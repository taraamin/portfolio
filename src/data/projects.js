export const projects = [
  {
    id: 'paddle-for-ocean',
    title: 'Paddle4Ocean',
    type: 'Kryssplattform Skoleprosjekt',
    period: '2024',
    summary:
      'Kryssplattform som mobiliserer frivillige til å samle plast i kystsonen.',
    contribution: [
      'Bygget med React Native for å støtte, web, ios og Android.',
      'E-post/passord registrering og innlogging med Firebase Auth.',
      'Realtime liste over turer med søk og filtrering.',
      'Påmelding og markere turer som gjennomført.',
      'Registrere ny tur med skjema for validering.'
    ],
    stack: ['React Native(expo)', 'React Navigation', 'React Native Web', 'Firebase', 'Vercel'],
    links: {
      github: 'https://github.com/taraamin/Paddle4Ocean',
      side: 'https://paddle4-ocean.vercel.app/'
    }
  },
  {
    id: 'ur-ok',
    title: 'UR-OK',
    type: 'Oppdrag for fremtidig blogg',
    period: '2025',
    summary:
      'Blogg med CMS og språkbytte.',
    contribution: [
      'Bygde prosjektet med Next.js med fokus på ytelse og tilgjengelighet.',
      'Implementerte flerspårkligsgøtte og Decap CMS.',
      'Knyttet sammen frontend og innholdsdata for å sirke HTML-sanitizers.'
    ],
    stack: ['React', 'Next.js', 'Tailwind CSS', 'next-i18next', 'Decap CMS'],
   
    links: {
      side: 'https://www.ur-ok.org/'
    }
  },
  {
    id: 'automania-asker',
    title: 'Automania Asker',
    type: 'Oppdrag for bilforhandler',
    period: '2025',
    summary:
      'Nettside for bruktbilforhandler i Asker med tredjeparts booking.',
    contribution: [
      'Utviklet en komplett, responsiv nettside for Automania Asker AS med fokus på booking og lokal synlighet.',
      'Implementerte tjenester, priser, om-oss, kontakt og personvern som egne ruter i Next.js App Router.',
      'Integrerte Google Calendar for nettbooking og Google Maps for lokasjon.',
      'Satt opp kontaktskjema via Formspree for enkel henvendelse.'
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Formspree', 'Google maps & calendar embeds'],
    links: {
      side:'https://www.automaniaasker.no/'
    }
  },
  {
    id: 'freelance-talent-hub',
    title: 'Freelance Talent Hub',
    type: 'Skoleoppgave',
    period: '2023',
    summary:
      'Prosjekt for å håndtere frilans talenter.',
    contribution: [
      'Fullstack løsning for håndtering av frilans-talenter med CRUD, søk og opplasting av porteføljebilder.',
      'Responsiv frontend for å browse og administrere profiler, koblet til et REST-API.',
      'Enkel lokal drift med separate dev-servere for API og klient.'
    ],
    stack: ['React', 'Vite', 'React Router', 'Axios', 'Bootstrap', 'ASP.NET Core Web API', 'SQLite'],
    links: {
      github: 'https://github.com/taraamin/freelance-talent-hub'
    }
  },
  {
    id: 'flask-blog',
    title: 'Flask Blog',
    type: 'Prosjekt',
    period: '2025',
    summary:
      'Prosjekt blog',
    contribution: [
      'Enkel Flask-blogg med innlegg, redigering, tagging og kommentarer.',
      'Hjemmeside med siste innlegg, utdrag og tagger.',
      'Tagside for filtrering av innlegg.',
      'SQLite lagring med seed-data og tydelig schema.'
    ],
    stack: ['Python + Flask', 'SQlite', 'Jinja2'],
    links: {
      github: 'https://github.com/taraamin/flask-blog'
    }
  },

    {
    id: 'bloom-tracking',
    title: 'Bloom Tracking',
    type: 'Prosjekt',
    period: '2025',
    summary:
      'Tracking app for innsikt og logging av mensen-syklus',
    contribution: [
      'Sikker login og autentisering med Expo Secure Store',
      'Syklus-tracking, flow, symptomer, humør, notat og lengde',
      'Smart predictions for fremtidig syklus',
      'Innsikt basert på hva bruker logger',
    ],
    stack: ['React Native (Expo)', 'React Navigation', 'TypeScript', 'ASync Storage + Expo Secure Store', 'date-fns'],
    links: {
      github: 'https://github.com/taraamin/Bloom-tracker'
    }
  }


];
