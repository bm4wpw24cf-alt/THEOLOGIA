# THEOLOGIA Accessibility Standard
Version 1.0

Dette dokumentet beskriver den offisielle standarden for universell utforming (Accessibility) i THEOLOGIA.

Alle sider, komponenter og funksjoner skal følge denne standarden.

Ved tvil skal tilgjengelighet alltid prioriteres.

---

# Formål

THEOLOGIA skal være tilgjengelig for alle.

Uansett:

- alder
- funksjonsevne
- syn
- hørsel
- motorikk
- teknisk utstyr

Alle skal kunne lese og studere Bibelen uten unødvendige hindringer.

---

# Grunnprinsipp

Tilgjengelighet er ikke en ekstra funksjon.

Det er en grunnleggende del av kvalitet.

Alle nye funksjoner skal være tilgjengelige fra første versjon.

---

# Standard

THEOLOGIA skal følge WCAG 2.2 AA så langt det er praktisk mulig.

Universell utforming skal være en del av hele utviklingsprosessen.

---

# Semantisk HTML

Bruk korrekt HTML5.

Eksempel:

- header
- nav
- main
- section
- article
- aside
- footer

Unngå å bruke `<div>` der et semantisk element passer bedre.

---

# Overskrifter

Overskrifter skal følge en logisk struktur.

Eksempel:

```
H1

H2

H3

H3

H2

H3
```

Ikke hopp over nivåer.

---

# Tastaturnavigasjon

Alt innhold skal kunne brukes uten mus.

Brukeren skal kunne:

- navigere med Tab
- aktivere knapper
- åpne menyer
- fylle ut skjema
- lukke dialoger

---

# Fokus

Alle interaktive elementer skal ha tydelig fokus.

Fokusmarkeringen skal være:

- synlig
- konsekvent
- lett å oppdage

Fokus skal aldri fjernes uten en god grunn.

---

# Kontrast

Tekst skal ha tilstrekkelig kontrast mot bakgrunnen.

Lav kontrast skal unngås.

Lesbarhet har høyeste prioritet.

---

# Tekst

Brødtekst skal være:

- lett å lese
- stor nok
- ha god linjehøyde
- ha passende linjelengde

Ikke bruk svært små fonter.

---

# Lenker

Lenker skal kunne identifiseres uten farge alene.

Hover og fokus skal være tydelig.

Lenketekst skal beskrive hvor lenken går.

Unngå:

```
Les mer
Klikk her
```

Bruk heller:

```
Les artikkelen om Jesu oppstandelse
```

---

# Knapper

Knapper skal:

- ha tydelige etiketter
- være store nok
- ha god kontrast
- ha fokusmarkering

---

# Klikkflater

Klikkbare elementer skal være store nok til enkel bruk på:

- mobil
- nettbrett
- desktop

---

# Bilder

Alle informative bilder skal ha alternativ tekst.

Alt-teksten skal beskrive bildets innhold og funksjon.

Dekorative bilder skal markeres som dekorative.

---

# Ikoner

Ikoner alene skal ikke formidle viktig informasjon.

Bruk tekst sammen med ikoner når det er nødvendig.

---

# Skjema

Skjemaelementer skal ha:

- label
- hjelpetekst ved behov
- tydelige feilmeldinger

Placeholder skal aldri erstatte label.

---

# Feilmeldinger

Feilmeldinger skal:

- være tydelige
- forklare problemet
- beskrive hvordan det kan løses

Bruk ikke kun rødfarge.

---

# Bevegelse

Animasjoner skal være rolige.

Unngå:

- blinkende elementer
- raske bevegelser
- distraherende effekter

Respekter brukerens innstilling for redusert bevegelse.

---

# Video

Videoer bør ha:

- teksting
- beskrivelse ved behov

Automatisk avspilling skal unngås.

---

# Lyd

Lyd skal aldri starte automatisk.

Brukeren skal selv velge avspilling.

---

# Responsivt design

Alt innhold skal fungere godt på:

- mobil
- nettbrett
- laptop
- desktop

Ingen informasjon skal skjules på små skjermer.

---

# Zoom

Nettstedet skal fungere ved minst 200 % zoom uten tap av innhold eller funksjonalitet.

---

# Mørk modus

Dersom mørk modus tilbys skal:

- kontrast opprettholdes
- tekst være lett å lese
- fokusmarkering fortsatt være tydelig

---

# Leserekkefølge

HTML-strukturen skal følge en naturlig leserekkefølge.

Skjermlesere skal kunne forstå siden.

---

# ARIA

ARIA brukes kun når semantisk HTML ikke er tilstrekkelig.

Bruk korrekt:

- aria-label
- aria-labelledby
- aria-describedby

Ikke overbruk ARIA.

---

# Skjermlesere

Sider skal testes med skjermleser når nye funksjoner utvikles.

Innholdet skal være forståelig uten visuelle elementer.

---

# Språk

Alle sider skal angi korrekt språk.

Eksempel:

```
<html lang="no">
```

---

# Ytelse

Rask lasting forbedrer tilgjengeligheten.

Optimaliser:

- bilder
- CSS
- JavaScript
- fonter

---

# Testing

Før publisering skal det kontrolleres:

- tastaturnavigasjon
- fokus
- kontrast
- overskriftstruktur
- alternativ tekst
- responsivitet
- zoom
- skjermleser
- mobil

---

# Sammenheng med øvrige dokumenter

Denne standarden bygger på:

- 00_MANIFEST.md
- 03_DESIGN_STANDARD.md
- 04_COMPONENT_LIBRARY.md
- 05_STYLE_GUIDE.md
- 06_IMAGE_GUIDE.md
- 07_SEO_STANDARD.md

Relaterte dokumenter:

- 09_ROADMAP.md
- 10_THEOLOGIA_HANDBOOK.md

---

# Grunnregel

Tilgjengelighet handler om mennesker.

Når flest mulig kan lese, forstå og bruke THEOLOGIA uten hindringer, har nettstedet oppfylt sitt mål.