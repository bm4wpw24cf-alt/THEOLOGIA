# THEOLOGIA Content Structure
Version 1.0

Dette dokumentet beskriver den offisielle innholdsstrukturen for THEOLOGIA.

All organisering av innhold skal følge denne standarden.

Ved tvil skal denne strukturen prioriteres fremfor nye løsninger.

---

# Formål

THEOLOGIA er bygget som et digitalt bibliotek.

Målet er at innholdet skal være:

- enkelt å finne
- enkelt å forstå
- enkelt å utvide
- enkelt å vedlikeholde
- logisk organisert

Strukturen skal hjelpe leseren til å fordype seg i Bibelen gjennom naturlige læringssteg.

---

# Grunnprinsipp

Innhold skal aldri organiseres tilfeldig.

Alle artikler skal høre hjemme i en tydelig struktur.

Informasjonsarkitekturen skal være stabil over tid.

---

# Hierarki

THEOLOGIA følger denne strukturen:

```
Tema
    ↓
Kategori
    ↓
Artikkel
```

Eksempel:

```
Bibelen
    ├── Bibelens autoritet
    ├── Hvordan lese Bibelen
    ├── Bibelens kanon
    └── Inspirasjon
```

---

# Hovedtemaer

Forsiden består av åtte hovedtemaer.

Disse fungerer som inngangen til hele biblioteket.

1. Bibelen
2. Bibelkommentar
3. Evangeliet
4. Kristenliv
5. Apologetikk
6. Teologi
7. Ressurser
8. Endetid

Disse temaene er prosjektets hovednavigasjon.

---

# Temaside

Alle temasider skal ha samme oppbygning.

1. Hero
2. Om temaet
3. Utforsk temaet
4. Anbefalt start
5. Nyeste artikler
6. Se alle artikler
7. Relaterte temaer

Dette gir en konsekvent brukeropplevelse.

---

# Kategorier

Et tema kan bestå av én eller flere kategorier.

Eksempel:

```
Apologetikk
    ├── Guds eksistens
    ├── Bibelens troverdighet
    ├── Jesu oppstandelse
    ├── Tro og vitenskap
    ├── Ondskapens problem
    └── Verdensreligioner
```

Kategorier skal samle artikler om samme emne.

---

# Artikler

Artikkelen er den minste innholdsenheten.

Alle artikler skal tilhøre én primærkategori.

Artikler kan knyttes til relaterte temaer gjennom intern lenking.

---

# Standard artikkelstruktur

Alle artikler bør så langt som mulig følge denne oppbygningen.

1. Tittel
2. Kort introduksjon
3. Hovedinnhold
4. Bibelhenvisninger
5. Praktisk anvendelse (når relevant)
6. Oppsummering
7. Relaterte artikler

Ikke alle artikler trenger alle seksjoner, men strukturen skal være gjenkjennelig.

---

# Relaterte artikler

Alle artikler bør lenke videre til:

- relaterte artikler
- relevante temaer
- relevante kategorier

Målet er å hjelpe leseren videre i studiet.

---

# Krysslenking

Innhold skal kobles sammen der det er naturlig.

Eksempel:

En artikkel om dåp kan lenke til:

- Evangeliet
- Menigheten
- Disippelskap
- Frelse

Krysslenking skal alltid være relevant.

---

# Navigasjon

Brukeren skal alltid vite hvor han befinner seg.

Navigasjonen skal være enkel, logisk og forutsigbar.

Brødsmulestier (breadcrumbs) anbefales på temasider og artikler.

---

# Forsiden

Forsiden er en inngangsportal til biblioteket.

Den skal bestå av:

1. Header
2. Hero
3. Åtte temakort
4. Ressurser
5. Relaterte artikler
6. Nyeste artikler
7. Footer

Forsiden skal ikke fungere som en blogg.

---

# URL-struktur

URL-er skal være:

- korte
- beskrivende
- stabile
- søkemotorvennlige

Eksempel:

```
/bibelen/

/bibelen/hvordan-lese-bibelen/

/apologetikk/guds-eksistens/

/evangeliet/frelse/
```

Unngå unødvendige nivåer.

---

# Filnavn

Bruk:

- små bokstaver
- bindestrek
- ingen mellomrom
- ingen spesialtegn

Eksempel:

```
hvordan-lese-bibelen.html
```

---

# Videre utvikling

Nye temaer skal passe inn i den eksisterende strukturen.

Det skal ikke opprettes nye hovedtemaer uten at det finnes en tydelig begrunnelse.

Stabilitet prioriteres fremfor hyppige endringer.

---

# Fremtidig innhold

Nye artikler skal:

- plasseres i riktig kategori
- kobles til relaterte artikler
- følge redaksjonell standard
- følge designstandarden

---

# Sammenheng med øvrige dokumenter

Dette dokumentet beskriver hvordan innhold organiseres.

For øvrige standarder, se:

- 00_MANIFEST.md
- 02_EDITORIAL_STANDARD.md
- 03_DESIGN_STANDARD.md
- 04_COMPONENT_LIBRARY.md
- 05_STYLE_GUIDE.md

---

# Prinsipp

God struktur gjør kunnskap lettere å finne.

God navigasjon gjør kunnskap lettere å lære.

God organisering gjør THEOLOGIA lettere å videreutvikle.