# THEOLOGIA Development Guide
Version 1.0

Dette dokumentet beskriver den tekniske utviklingsstandarden for THEOLOGIA.

Alle utviklere og AI-assistenter skal følge disse retningslinjene ved utvikling av prosjektet.

Denne guiden bygger på prosjektets øvrige standarddokumenter og beskriver hvordan kode skal skrives, organiseres og vedlikeholdes.

---

# Formål

Målet er å utvikle et prosjekt som er:

- enkelt å forstå
- enkelt å vedlikeholde
- enkelt å videreutvikle
- konsekvent
- robust
- langsiktig

---

# Utviklingsfilosofi

Kode skal være:

- lesbar
- enkel
- konsekvent
- modulær
- gjenbrukbar

Kompleksitet skal alltid begrunnes.

Den enkleste løsningen som løser problemet riktig skal foretrekkes.

---

# Grunnprinsipper

Ved utvikling skal vi prioritere:

- kvalitet fremfor hastighet
- vedlikeholdbarhet fremfor smarte løsninger
- gjenbruk fremfor duplisering
- små endringer fremfor store omskrivinger

---

# Før du skriver kode

Før en ny funksjon utvikles skal du:

1. lese oppgaven
2. lese relevante dokumenter
3. analysere eksisterende kode
4. se om løsningen allerede finnes
5. planlegge endringen

Ikke begynn å kode før problemet er forstått.

---

# Dokumenthierarki

Ved tvil gjelder dokumentene i denne rekkefølgen:

1. 00_MANIFEST.md
2. relevante standarddokumenter
3. denne Development Guide

---

# Kodefilosofi

Kode skal være selvforklarende.

Hvis en kommentar er nødvendig for å forstå koden, bør koden vurderes omskrevet.

Kommentarer brukes for å forklare:

- hvorfor
- ikke hva

---

# Filstruktur

Prosjektet skal ha en ryddig struktur.

Mapper skal ha ett tydelig ansvar.

Eksempel:

- app/
- components/
- content/
- docs/
- public/
- styles/
- utils/

---

# Navngivning

Bruk tydelige navn.

Eksempel:

Godt:

```
ArticleCard
ThemePage
BibleVerse
```

Unngå:

```
Card2
PageNew
TestComponent
```

---

# Komponenter

Komponenter skal:

- gjøre én oppgave
- være små
- være gjenbrukbare
- være enkle å teste

Store komponenter deles opp.

---

# Gjenbruk

Før en ny komponent opprettes:

- se om en eksisterende kan brukes
- vurder om komponenten kan utvides
- unngå duplisering

---

# CSS

Følg Design Standard.

Unngå:

- tilfeldige marginer
- tilfeldige farger
- inline styling
- duplisert CSS

---

# Responsivitet

Alle nye komponenter skal fungere på:

- mobil
- nettbrett
- desktop

Responsivt design er standard.

---

# Tilgjengelighet

Alle komponenter skal følge:

08_ACCESSIBILITY.md

Tastaturnavigasjon og semantisk HTML er obligatorisk.

---

# Ytelse

Prioriter:

- små komponenter
- optimaliserte bilder
- effektiv rendering
- minimal JavaScript

Unngå unødvendige avhengigheter.

---

# Feilhåndtering

Kode skal håndtere feil på en kontrollert måte.

Brukeren skal aldri møte tekniske feilmeldinger.

---

# Testing

Nye funksjoner skal testes før publisering.

Kontroller:

- funksjonalitet
- responsivitet
- tilgjengelighet
- design
- ytelse

---

# Git

Arbeid i små steg.

Bruk:

- små commits
- tydelige commit-meldinger
- én logisk endring per commit

Eksempel:

```
Add article layout

Improve hero responsiveness

Fix navigation spacing
```

---

# Dokumentasjon

Større endringer skal dokumenteres.

Hvis en ny standard innføres skal dokumentasjonen oppdateres.

Kode og dokumentasjon skal utvikles sammen.

---

# AI-utvikling

AI er en utviklingsassistent.

AI skal:

- analysere først
- lese dokumentasjonen
- følge standardene
- foreslå minimale endringer
- forklare større endringer

AI skal aldri redesigne prosjektet på eget initiativ.

---

# Hva AI alltid skal lese

Før større oppgaver skal AI lese:

- 00_MANIFEST.md
- 03_DESIGN_STANDARD.md
- 04_COMPONENT_LIBRARY.md
- 05_STYLE_GUIDE.md
- 11_DEVELOPMENT_GUIDE.md

Ved innholdsarbeid også:

- 01_CONTENT_STRUCTURE.md
- 02_EDITORIAL_STANDARD.md

---

# Kodegjennomgang

Før kode godkjennes skal følgende vurderes:

- Er løsningen enkel?
- Er den lesbar?
- Kan noe gjenbrukes?
- Er dokumentasjonen fulgt?
- Er designstandarden fulgt?
- Er tilgjengeligheten ivaretatt?
- Er ytelsen god?

---

# Ting vi unngår

Unngå:

- overkomplisert kode
- unødvendige biblioteker
- store omskrivinger
- magiske tall
- duplisert kode
- ubrukte filer
- ubrukte komponenter
- eksperimentell kode i produksjon

---

# Definisjon av ferdig

En oppgave er ferdig når:

- funksjonen virker
- designet følger standarden
- koden er ryddig
- komponentene kan gjenbrukes
- responsivitet fungerer
- tilgjengelighet er kontrollert
- dokumentasjon er oppdatert
- endringen er testet

---

# Sammenheng med øvrige dokumenter

Denne guiden bygger på:

- 00_MANIFEST.md
- 03_DESIGN_STANDARD.md
- 04_COMPONENT_LIBRARY.md
- 05_STYLE_GUIDE.md
- 08_ACCESSIBILITY.md
- 10_THEOLOGIA_HANDBOOK.md

Relaterte dokumenter:

- 12_CONTENT_WORKFLOW.md
- 13_RELEASE_PROCESS.md
- 14_AI_CONTEXT.md

---

# Grunnregel

Skriv kode som den neste utvikleren umiddelbart kan forstå.

Den beste koden er ikke den mest avanserte – men den som er enklest å lese, vedlikeholde og videreutvikle.