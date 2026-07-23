# THEOLOGIA Component Library
Version 1.0

Dette dokumentet beskriver den offisielle komponentstandarden for THEOLOGIA.

Alle brukergrensesnitt-komponenter skal følge denne standarden.

Ved tvil skal eksisterende komponenter gjenbrukes fremfor å lage nye.

---

# Formål

Komponentbiblioteket skal sikre at hele nettstedet fremstår som ett sammenhengende system.

Komponentene skal være:

- konsistente
- gjenbrukbare
- enkle
- tilgjengelige
- lette å vedlikeholde

---

# Grunnprinsipp

Én komponent.

Én funksjon.

Én implementasjon.

Hvis en komponent allerede finnes, skal den gjenbrukes.

---

# Komponenthierarki

Komponentene deles inn i fire nivåer.

```
Layout
    ↓
Seksjoner
    ↓
Komponenter
    ↓
Elementer
```

Eksempel:

```
Page
 ├── Header
 ├── Hero
 ├── Topic Grid
 │      └── Topic Card
 ├── Article List
 │      └── Article Card
 └── Footer
```

---

# Layout-komponenter

Globale komponenter:

- Header
- Navigation
- Main
- Sidebar (ved behov)
- Footer
- Container

Disse brukes gjennom hele nettstedet.

---

# Seksjonskomponenter

Eksempler:

- Hero
- Featured Topics
- Latest Articles
- Resources
- Related Articles
- CTA Section
- Newsletter (dersom brukt)

Alle seksjoner skal kunne brukes på flere sider.

---

# Kort (Cards)

Kort er en av de viktigste komponentene i THEOLOGIA.

Kort brukes blant annet til:

- temaer
- artikler
- ressurser
- guider
- serier

Alle kort skal følge samme grunnstruktur.

---

# Standard kort

Et standardkort består av:

- bilde eller ikon
- kategori
- tittel
- kort beskrivelse
- lenke

Layouten skal være konsekvent.

---

# Hero

Hero skal inneholde:

- hovedoverskrift
- introduksjon
- primær handling
- eventuell sekundær handling

Hero skal være enkel og innholdsfokusert.

---

# Knapper

Tillatte knappetyper:

- Primary
- Secondary
- Text Button

Ikke lag nye knappetyper uten behov.

---

# Lenker

Alle lenker skal ha:

- tydelig hover-effekt
- fokusmarkering
- god kontrast

Lenker skal være enkle å identifisere.

---

# Navigasjon

Navigasjonen skal bestå av:

- hovedmeny
- brødsmulesti (der relevant)
- footer-navigasjon

Brukeren skal alltid vite hvor han er.

---

# Artikkelliste

Artikkellister skal være enkle.

Hver artikkel viser normalt:

- tittel
- ingress
- kategori
- publiseringsdato (dersom brukt)

Unngå visuell støy.

---

# Ressurskort

Ressurskort brukes for:

- PDF
- e-bøker
- videoer
- studiemateriell

Utseendet skal følge samme prinsipper som vanlige kort.

---

# Faktaboks

Faktabokser brukes til:

- definisjoner
- nøkkelvers
- sammendrag
- historiske fakta

De skal være tydelige uten å dominere siden.

---

# Sitatboks

Sitatbokser brukes til:

- bibelsitater
- historiske sitater
- viktige uttalelser

Designet skal være enkelt og lesbart.

---

# Advarselsboks

Kan brukes når leseren bør være oppmerksom på:

- vanlige misforståelser
- viktige presiseringer
- historiske usikkerheter

Brukes med måte.

---

# Informasjonsboks

Informasjonsbokser brukes til:

- tips
- forklaringer
- ekstra informasjon

De skal støtte teksten, ikke avbryte den.

---

# Tabeller

Tabeller skal:

- være enkle
- være responsive
- være lettleste

Bruk kun tabeller når de gjør informasjon enklere.

---

# Diagrammer

Diagrammer skal:

- forklare
- forenkle
- visualisere sammenhenger

Ikke brukes kun som dekorasjon.

---

# Ikoner

Alle ikoner skal:

- ha samme stil
- ha samme visuelle vekt
- brukes konsekvent

Ikoner skal støtte innholdet.

---

# Bilder

Alle bilder skal:

- være relevante
- være optimaliserte
- ha alternativ tekst
- følge bildeguiden

---

# Tomme tilstander

Når innhold mangler skal brukeren få en tydelig melding.

Eksempel:

"Ingen artikler funnet."

Ikke vis tomme seksjoner.

---

# Lasting

Ved lasting av innhold skal:

- layouten være stabil
- hopp i innhold unngås
- brukeren forstå at siden arbeider

---

# Feilmeldinger

Feilmeldinger skal være:

- tydelige
- korte
- hjelpsomme

Beskriv problemet uten teknisk sjargong.

---

# Gjenbruk

En ny komponent skal bare opprettes dersom:

- eksisterende komponent ikke dekker behovet
- den kan gjenbrukes flere steder
- den passer inn i designsystemet

---

# Navngivning

Komponentnavn skal være:

- korte
- beskrivende
- konsekvente

Eksempel:

```
Hero
TopicCard
ArticleCard
ResourceCard
SectionTitle
Footer
```

---

# Konsistens

Samme komponent skal alltid:

- se lik ut
- oppføre seg likt
- bruke samme spacing
- bruke samme typografi

---

# Vedlikehold

Komponenter skal forbedres sentralt.

Ikke lag lokale kopier av komponenter.

---

# Kvalitetssikring

Før en komponent tas i bruk skal den kontrolleres for:

- tilgjengelighet
- responsivitet
- konsistens
- gjenbrukbarhet
- ytelse
- lesbarhet

---

# Sammenheng med øvrige dokumenter

Denne standarden bygger på:

- 00_MANIFEST.md
- 01_CONTENT_STRUCTURE.md
- 02_EDITORIAL_STANDARD.md
- 03_DESIGN_STANDARD.md

Relaterte dokumenter:

- 05_STYLE_GUIDE.md
- 06_IMAGE_GUIDE.md
- 07_SEO_STANDARD.md
- 08_ACCESSIBILITY.md

---

# Grunnregel

Komponenter skal være usynlige byggesteiner.

Brukeren skal oppleve ett helhetlig nettsted – ikke en samling enkeltkomponenter.