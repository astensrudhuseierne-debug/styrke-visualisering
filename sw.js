// Service worker: gjør appen tilgjengelig uten nett.
// Øk versjonsnummeret når filene endres, så hentes ny versjon ved neste åpning.
const VERSION = 'styrke-v12';
const FONTS = VERSION + '-fonts';
const ASSETS = [
  './', 'index.html', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png', 'icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== FONTS).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Egne sider: prøv nettet først (får oppdateringer), bruk lagret kopi uten nett
  if (url.origin === location.origin) {
    if (req.mode === 'navigate') {
      e.respondWith(
        fetch(req)
          .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return res; })
          .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
      );
      return;
    }
    e.respondWith(caches.match(req).then(r => r || fetch(req)));
    return;
  }

  // Skrifter fra Google Fonts: lagres første gang, brukes deretter uten nett
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.open(FONTS).then(c => c.match(req).then(hit => hit || fetch(req).then(res => { c.put(req, res.clone()); return res; })))
    );
  }
});
