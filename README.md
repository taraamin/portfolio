# Tara Amin – React-portefølje

En fokusert porteføljeside bygget med React og Vite for å presentere utdanning, tverrfaglige ferdigheter og fire nøkkelprosjekter. Strukturen er enkel å videreutvikle og tilpasse konkrete stillingsutlysninger eller intervjuer.

## Kom i gang

```bash
npm install
npm run dev
```

Standardport er `http://localhost:5173`. Vite tilbyr hot reload slik at tekst og prosjektkort kan finjusteres fortløpende.

## Struktur

- `src/App.jsx` – Binder sammen seksjonene og definerer navigasjon.
- `src/components/` – Gjenbrukbare seksjoner (Hero, Prosjekter, Kompetanse, Erfaring, Utdanning, Kontakt, Footer).
- `src/data/` – All tekstlig informasjon samlet i små datastrukturer for enkel oppdatering.
- `src/styles/index.css` – Tema, typografi og layout.
- `public/` – Favicon og rom for eventuelle statiske ressurser.

## Tilpasningstips

- Oppdater `src/data/profile.js` med faktiske kontaktpunkter, tilgjengelighet og en tydelig pitch.
- Registrer repo-lenker og nøkkelresultater i `src/data/projects.js`. Hver case er satt opp med rolle, teknologier og effekt.
- `src/data/experience.js` inneholder både erfaring og utdanning; legg til flere roller ved behov.
- Ønsker du flere seksjoner (for eksempel blogg, sertifiseringer eller referanser), opprett nye komponenter i `src/components/` og koble dem inn i `App.jsx`.

## Videre arbeid

- Sett opp en GitHub Actions-workflow for automatisk bygg og deploy til GitHub Pages, Netlify eller Vercel.
- Legg til faktiske skjermbilder i prosjektkortene ved å supplere med `<img>` eller bakgrunnsbilder.
- Knytt kontaktseksjonen til et skjema (for eksempel Formspree eller Netlify Forms) dersom du vil ta imot henvendelser direkte fra siden.

## Lisens

Koden er åpen under MIT-lisens (juster ved behov). Branding, tekst og data tilhører Tara Amin.
