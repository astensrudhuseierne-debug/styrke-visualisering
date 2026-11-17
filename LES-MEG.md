# Styrke – installerbar app (PWA)

Appen er én side med 23 interaktive eksempler i to kapitler.

**Kapittel 1 · Statikk og styrke:** sin og cos på enhetssirkelen (animert), skrå sperre, fiberretning, bolt i skjær, knekking, høykant eller flatt, Steinertillegget, nedbøyning, vandrende last, innspent eller fritt opplagt bjelke, statisk ubestemt bjelke (kraftmetoden), bjelketabell med 21 lasttilfeller, superposisjon, skråstag, knutepunktsmetoden, strekkraft i stag, fagverksbro med kjøretøy og Mohrs sirkel.

**Kapittel 2 · Bygningsfysikk og energi:** U-verdi for lagdelt konstruksjon, U-verdi med stendere (NS-EN ISO 6946), Glasers metode for damptrykk og kondens, kuldebroer i 2D med ψ-verdi og temperaturfaktor, og roterende varmegjenvinner med virkningsgrad og effekt.

Etter første åpning fungerer den uten nett.

## 1. Legg filene på en nettadresse (én gang)

En PWA må ligge på en https-adresse. Den kan ikke åpnes som fil direkte fra telefonen. To enkle, gratis alternativer:

**Netlify Drop (raskest)**
1. Gå til app.netlify.com/drop og logg inn (gratis konto).
2. Dra hele mappen `styrke-app` inn i vinduet.
3. Du får en adresse som `https://noe-tilfeldig.netlify.app`. Du kan endre navnet under *Site settings*.

**GitHub Pages**
1. Lag et nytt repo og last opp innholdet i mappen, med `index.html` i roten.
2. Gå til *Settings → Pages → Deploy from branch → main / root*.
3. Adressen blir `https://brukernavn.github.io/reponavn/`.

## 2. Installer på telefonen

**iPhone (Safari)**
1. Åpne adressen i Safari. Det må være Safari, ikke Chrome på iPhone.
2. Trykk på del-knappen og velg **Legg til på Hjem-skjerm**.
3. Appen åpnes i fullskjerm fra ikonet «Styrke».

**Android (Chrome)**
1. Åpne adressen i Chrome.
2. Trykk på menyen (⋮) og velg **Installer app** eller **Legg til på startsiden**.

**PC/Mac (Chrome eller Edge)**
Trykk på installasjonsikonet i adressefeltet.

## 3. Oppdatere appen senere

1. Erstatt filene på nettadressen.
2. Øk versjonsnummeret øverst i `sw.js`, for eksempel `styrke-v14` → `styrke-v15`.
3. Telefonen henter ny versjon neste gang appen åpnes med nett.

## Filer

| Fil | Innhold |
|---|---|
| `index.html` | Hele appen (alle 23 eksempler) |
| `manifest.webmanifest` | Navn, ikon og fullskjermvisning |
| `sw.js` | Lagring for bruk uten nett |
| `icons/` | App-ikoner |

Skriftene (IBM Plex) hentes fra Google Fonts første gang og lagres deretter lokalt. Uten nett ved aller første åpning brukes systemskrift.
