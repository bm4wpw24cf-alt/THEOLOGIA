# THEOLOGIA — komponent- og duplikat-revisjon

**Dato:** 2026-08-06
**Omfang:** Hele repoet — 43 reelle HTML-sider, 22 CSS-filer, `templates/`, `partials/`, `js/`, `data/`.
**Status:** Kun analyse. Ingen kode er endret som del av denne revisjonen.

Dette dokumentet er ikke en del av THEOLOGIAs nummererte standardserie
(00–15 i `docs/00_MANIFEST.md`). Det er en teknisk tilstandsrapport —
et øyeblikksbilde av hvor komponenter er duplisert, hvorfor, og hvordan
det trygt kan ryddes opp.

---

## Sammendrag

THEOLOGIA har **to fungerende, parallelle måter å bygge en side på**,
pluss **tre påbegynte men aldri fullførte arkitekturer** liggende i
repoet uten å faktisk styre noen side:

| # | System | Status | Reelle sider |
|---|--------|--------|---------------|
| A | Modulære `css/*.css`-filer + håndskrevet HTML | **Den faktiske standarden** | 41 av 43 |
| B | `templates/artikkel-mal.html` + `js/cli.js`-generator + `data/articles.json` | Fungerer, men aldri forsonet med sidens ekte URL-struktur | 1 (`troens-bonn.html`, nå håndlappet og avvikende fra kilden) |
| C | `temaer/ressurser/.../kapittel-4.html` + `css/study.css` + `css/modal.css` | Egen, legitim sidetype (interaktiv studieleser) — ikke duplisering | 1 |
| — | `templates/tema-mal.html` | Aldri kjørt/generert noe | 0 |
| — | `templates/kategori-mal.html`, `templates/ressurs-mal.html` | Tomme filer (0 byte) | 0 |
| — | `partials/` (10 filer: layout/cards/sections) | Tomme filer (0 byte), refereres ingen steder | 0 |
| — | `css/style.css` | Monolittisk bunt som **re-importerer** deler av system A og forårsaker en reell cascade-bug | 2 (`index.html`, `omvendelse.html`) |
| — | `css/themes.css`, `css/layout.css` | Foreldreløse, lenket av ingen side | 0 |
| — | `data/articles.js` + `js/latest-articles.js` | Klientsidevariant av "nyeste artikler" — lenket av ingen side | 0 |

**Hovedkonklusjon:** System A er allerede vunnet i praksis (95 % av
sidene). Oppgaven er ikke å velge en standard — det er å (1) fjerne det
som aldri ble tatt i bruk, (2) migrere det ene reelle avviket
(`troens-bonn.html`), og (3) fjerne én reell cascade-bug (`style.css`).

---

## Metodikk

Gjennomgått: alle 43 HTML-sider (`find . -name "*.html"`, ekskl.
`.git`), alle 22 CSS-filer, alle JS-filer i `js/`, alt i `data/` og
`templates/` og `partials/`. For hver komponentkategori er det
grep-verifisert **hvor mange og hvilke sider** som faktisk bruker hvert
klassenavn/mønster — ikke bare hvor mange filer som *definerer* det.
Alle tall under er telt, ikke anslått.

---

## Funn per komponentkategori

### 1. Header / hovednavigasjon

**Implementasjon A — kanonisk.** `css/header.css` + `css/navigation.css`.
Markup: `<header class="site-header"><div class="container header-inner"><a class="logo">…<nav class="main-nav"><ul>…`

- **42 av 43 sider** (41 direkte lenket, 1 indirekte via `style.css`s
  `@import`).
- Konsekvent navstruktur: Hjem / Utforsk temaer eller Temaer / Ressurser
  / Artikler / Veien til Jesus / Om meg.
- Mobilvarianter finnes i **tre forskjellige former** på tvers av disse
  42 sidene (se eget punkt under, "1b").

**Implementasjon B — embedded.** `temaer/kristenliv/bonn/troens-bonn.html`
sin egen `<style>`-blokk (kopiert fra `templates/artikkel-mal.html`,
som har identisk kode). Egen `:root` med egne fargetokens, egen
checkbox-drevet mobilmeny (`<input type="checkbox" id="nav-toggle">` +
`:checked ~ .main-nav`), egne klassenavn (`.logo-title`/`.logo-subtitle`
i stedet for `.logo-text`).

- **1 side** (`troens-bonn.html`). Navigasjonsmålene er allerede rettet
  til relative, ekte stier i en tidligere økt — men selve
  CSS-implementasjonen er fortsatt 100 % separat fra system A.
- **Verdt å redde:** checkbox-drevet mobilmeny krever ingen JavaScript
  i det hele tatt. Det er teknisk enklere enn løsningen på forsiden
  (se 1b under). Anbefales vurdert som mønster ved sitewide
  hamburger-implementasjon.

**1b. Mobilnavigasjon er selv duplisert tre ganger:**

| Variant | Hvor | Mekanisme |
|---|---|---|
| JS-hamburger, id-skopet | `index.html` alene | `.nav-toggle`-knapp + `js/main.js` + regler i bunnen av `css/style.css`, skopet til `#site-header-home` |
| CSS-only checkbox-hamburger | `troens-bonn.html` alene | Embedded, se over |
| Wrappende meny uten hamburger | **40 andre sider** | `css/responsive.css` sin `.main-nav ul { flex-wrap: wrap }` — nav bryter til 2–3 rader på smale skjermer |

Dette er ikke et duplikat av samme løsning — det er tre *forskjellige*
løsninger på samme problem, bygget i tre separate økter uten en felles
plan. Ingen av delene er "feil", men **mobilnavigasjon bør besluttes
én gang og implementeres ett sted** (se migreringsplan, fase 3).

---

### 2. Footer

**Implementasjon A — kanonisk.** `css/footer.css`. Markup:
`.site-footer > .container.footer-inner > .footer-brand + 3× .footer-col + .footer-col.footer-social`.
Kolonner: Utforsk / Mer / Om Theologia / Følg oss.

- **41 av 43 sider.**

**Implementasjon B — embedded, avvikende.** `troens-bonn.html`. Mørk
bakgrunn, `.footer-grid`, tre kolonner (Utforsk / Ressurser / Kontakt),
tekstbaserte social-knapper ("YT"/"FB" i stedet for SVG-ikoner via
`.icon-youtube` osv.).

- **1 side.**

**Implementasjon C — riktig CSS, ufullstendig innhold.**
`kapittel-4.html` bruker faktisk `.site-footer`/`.footer-inner`/
`.footer-col` (system A sin CSS, korrekt), men mangler `.footer-brand`
(logo) og `.footer-social`-blokken, og har bare 3 kolonner
(THEOLOGIA / Studier / Ressurser) i stedet for de 4 standardkolonnene.
Inneholder også en ødelagt lenke: `../../../../bibel/index.html`
(skal være `temaer/bibelen/index.html` — "bibel" uten "en" finnes ikke
noe sted i prosjektet).

- **1 side.** Lavest risiko å rette — riktig CSS er allerede på plass,
  det mangler kun markup for de manglende blokkene.

---

### 3. Breadcrumb

**Implementasjon A — kanonisk (nylig rettet).** `css/components.css`,
`.breadcrumb` / `.breadcrumb-list` / `.breadcrumb-current`. Filen
brukte opprinnelig hardkodede hex-farger som ikke matchet
`variables.css` (f.eks. `#b38b2d` mot det faktiske `--gold: #b8872b`)
og var **ikke lenket av noen side**. Rettet til CSS-variabler og tatt i
bruk i en tidligere økt.

- **1 side** (`veien-til-jesus/kom-til-kristus.html`).
- Referert (men aldri faktisk generert/brukt) i `templates/tema-mal.html`.

**Implementasjon B — embedded.** `troens-bonn.html` sin egen
`.breadcrumb`-blokk: full-bredde stolpe, `::after`-genererte
skråstrek-separatorer, `aria-current="page"` på en umerket `<li>` i
stedet for en dedikert klasse.

- **1 side.**

**40 av 43 sider har ingen breadcrumb i det hele tatt** — de fleste
temasidene og artiklene navigerer kun via hovedmenyen. Dette er ikke
nødvendigvis feil (MANIFEST/CONTENT_STRUCTURE nevner brødsmulestier som
en anbefaling, ikke et krav), men er verdt en bevisst beslutning: skal
breadcrumb være standard på alle artikkel-/temasider, eller forbli
unntaket?

---

### 4. Artikkel-/innholdsside-mal

Dette er kategorien med størst reell arkitektonisk uenighet i
prosjektet.

**System A — kanonisk, modulær.** `css/article.css`:
`.article-page > .article-container > .article-header (.article-category, h1, .article-subtitle) + .article-content (h2, h3, p, .bible-box)`.

- **~30 sider**: alle 11 filer i `artikler/`, alle 6 tidligere tomme
  temastubber (`bibelen`, `evangeliet`, `teologi`, `apologetikk`,
  `endetid`, `bibelske-temaer`), alle 9 Kristenliv-undersider + `bonn/index.html`,
  `om-meg`, `vaar-visjon`, `kontakt`, `stott-arbeidet`, `folg-oss`,
  `veien-til-jesus/kom-til-kristus.html`.
- Null embedded CSS. Gjenbruker delte design-tokens fullt ut.
- **Kjent feil i en side som *skal* bruke dette systemet:**
  `temaer/evangeliet/artikler/omvendelse.html` skriver
  `<div class="bible">` i stedet for `<div class="bible-box">` — en
  ren skrivefeil som gjør at bibelsitatene der rendres helt ustylet.
  Dette er den billigste rettelsen i hele rapporten (bytt ett
  klassenavn 4 steder).

**System B — datadrevet generator.**
`templates/artikkel-mal.html` (eneste designkilde, ifølge
`templates/README.md`) + `js/article-generator.js` / `js/components.js`
/ `js/seo.js` + `data/articles.json` (validert mot `data/schema.json`)
+ `js/cli.js` (kjøres med `node js/cli.js <id>`, output til
`articles/<slug>.html`).

- Reelt sett **1 utdata-fil**: `troens-bonn.html` — og selv den er nå
  **avveket fra kilden**, fordi jeg håndrettet output-filen direkte
  (riktig navigasjon) i stedet for å rette `data/articles/troens-bonn.json`
  og regenerere. **Kjøres `node js/cli.js troens-bonn` eller
  `node js/cli.js --all` på nytt, forsvinner navigasjonsrettelsen** og
  siden er tilbake til absolutte, ødelagte stier. Dette er en skjult
  regresjonsrisiko så lenge begge filene eksisterer i utakt.
- Bruker egne klassenavn som ikke finnes i system A:
  `.scripture-box`/`.bible-text`/`.bible-reference` (bibelvers),
  `.toc-card`/`.toc-column` (innholdsfortegnelse),
  `.info-box`/`.important-box`/`.warning-box`/`.cross-reference-box`
  (informasjonsbokser), `.related-card` (relaterte artikler).
- Genuint mer avansert enn system A på enkelte punkter: automatisk
  utledet lesetid, kategori-/undertema-/tag-basert "relaterte
  artikler"-matching, strukturert SEO-generering fra data i stedet for
  håndskrevne meta-tagger.
- Output-katalogen `articles/` (engelsk) er en **annen mappe** enn
  `artikler/` (norsk, brukt av system A) — de to systemene ville, hvis
  begge tas i bruk samtidig, produsere sider på to parallelle
  URL-strukturer.

**System C — bevisst egen sidetype, ikke duplisering.**
`kapittel-4.html` + `css/study.css` (1205 linjer) + `css/modal.css`
(251 linjer) + `js/study.js` + `js/modal.js`. Dette er en interaktiv
studieleser (accordions, infografikk-slides, sidebar med
lesefremdrift) — en fundamentalt annen sidetype enn en artikkel, bygget
korrekt oppå den modulære basen (linker `header.css`/`footer.css`/osv.
normalt). **Ingen anbefalt konsolidering her** — men to reelle feil
funnet i farten:
  - Navigasjonen lenker til `kapittel-1.html`, `kapittel-2.html`,
    `kapittel-3.html`, `kapittel-5.html` — ingen av disse filene
    finnes ennå (kun `kapittel-4.html` er bygget).
  - `../../../../bibel/index.html` (samme "bibel" vs. "bibelen"-feil
    som i footer-funnet over).

**Åpent spørsmål jeg ikke besvarer i denne rapporten:** skal THEOLOGIA
satse videre på system B (datadrevet, automatisert, men krever at
malen og generatoren rettes til å bruke ekte relative stier) for
*fremtidige* artikler, eller skal system A (håndskrevet, enkelt, men
manuelt) forbli standarden og system B skrotes/arkiveres? Dette er en
produktbeslutning, ikke en teknisk en — se anbefaling i migreringsplanen.

---

### 5. Kort-komponenter

| Klasse | Definert i | Reell bruk |
|---|---|---|
| `.topic-card` | `css/cards.css` | Kanonisk. Forsiden + `temaer/index.html` + alle temahuber. |
| `.article-card` | `css/cards.css` (duplisert igjen inline i `css/style.css`) | Kanonisk. Forsiden "Nyeste artikler" + `artikler/index.html`. |
| `.featured-panel` / `.featured-image` | `css/cards.css` | Kanonisk. Forsiden, `veien-til-jesus/`, gjenbrukt som generisk innholdsboks i `kom-til-kristus.html`. |
| `.category-card` | `templates/tema-mal.html` (embedded) | **0 sider.** Malen er aldri kjørt/generert. |
| `.related-card` | `templates/artikkel-mal.html` + `templates/tema-mal.html` (embedded) | **0 sider.** `RELATED_SECTION`-blokken i `troens-bonn.html` er tom (ingen treff ble matchet), så markupen finnes ikke i noen faktisk fil i dag. |
| `partials/cards/*.html` (3 filer) | — | Tomme (0 byte). Referert ingen steder. |

**Vurdering:** `.topic-card`/`.article-card`/`.featured-panel` er
uomtvistet kanonisk og godt gjenbrukt. `.category-card`/`.related-card`
er ikke duplikater i praksis ennå (de eksisterer ikke i noen levende
side) — de er utestående system B-scaffolding. `partials/cards/` bør
bare slettes.

---

### 6. Innholdsfortegnelse (TOC)

**Ingen delt/modulær TOC-komponent finnes** i `css/*.css` i dag.

- **Embedded (system B):** `.toc-card`/`.toc-column` i
  `troens-bonn.html`/`templates/artikkel-mal.html` — nummererte lenker
  med `counter()`-generert "01", "02" osv.
- **Sammensatt av eksisterende primitiver (min løsning i
  `kom-til-kristus.html`):** `.featured-panel` + `.panel-tag` +
  `.article-list` — null ny CSS, men mister den nummererte
  visuelle stilen.
- `kapittel-4.html` har ingen klassisk TOC (bruker accordion-navigasjon
  i stedet — egen, akseptabel UX for den sidetypen).

**Vurdering:** Dette er det eneste tilfellet i rapporten der *ingen* av
de eksisterende løsningene bør kalles "kanonisk" uten videre — det er
et reelt designvalg som gjenstår: enten formalisere `.toc-card` som en
delt komponent (flytt den fra embedded til f.eks. `css/components.css`,
med riktige CSS-variabler), eller bevisst fortsette å bygge TOC av
eksisterende kort-primitiver slik jeg gjorde i `kom-til-kristus.html`.

---

### 7. Bibelvers

**Implementasjon A — kanonisk.** `.bible-box` i `css/article.css`
(gull venstrekant, `<em>` for sitat, `<strong>` for referanse).

- Korrekt brukt: `kom-til-kristus.html` (30+ vers).
- **Tiltenkt, men ødelagt av skrivefeil:** `omvendelse.html` (se
  punkt 4 — `.bible` i stedet for `.bible-box`).

**Implementasjon B — embedded.** `.scripture-box`/`.bible-text`/
`.bible-reference` i `troens-bonn.html`/`templates/artikkel-mal.html`
(gjenbrukt av `js/components.js` sin `renderScripture()`-funksjon).

- 1 side.

**Vurdering:** `.bible-box` er den enkleste, mest gjenbrukte og
korrekt token-baserte løsningen. Anbefales som eneste standard for
bibelsitater fremover.

---

### 8. Kommentarer

- **Giscus** (ekte, konfigurert integrasjon mot
  `bm4wpw24cf-alt/THEOLOGIA`-repoet) brukes i **2 sider**:
  `kom-til-kristus.html` (innpakket i gjenbrukte `.latest-articles` +
  `.section-header` — ingen ny CSS) og `troens-bonn.html` (innpakket i
  embedded `.kommentar-seksjon`/`.section-label`).
- Samme Giscus-konfigurasjon (repo-ID, kategori-ID) begge steder — det
  er ikke *verktøyet* som er duplisert, kun innpaknings-markupen.
- **Ingen egen "felles kommentar-komponent" finnes** i `css/*.css`.

**Vurdering:** Lav risiko, lav prioritet. Når `troens-bonn.html`
migreres til system A (fase 2 i planen), forsvinner denne duplikeringen
som et biprodukt.

---

### 9. CSS-arkitektur / leveranse

| Fil | Status |
|---|---|
| `variables.css`, `base.css`, `typography.css`, `header.css`, `navigation.css`, `buttons.css`, `cards.css`, `footer.css`, `utilities.css`, `animations.css`, `responsive.css`, `icons.css`, `hero.css`, `article.css`, `components.css` | **Kanonisk, fungerende modulært sett.** Lenket stykkevis av 41–42 av 43 sider. |
| `css/style.css` | **Aktiv teknisk gjeld.** Monolittisk bunt som `@import`-er flere av filene over *på nytt* (base, typography, header, navigation, buttons, cards, footer, icons, `layout.css`) og i tillegg *redeklarerer* `.hero`/`.hero-grid`/`.hero-title`/`.latest-articles`/`.articles-grid`/`.article-*` inline uten media queries. Fordi filen lenkes **sist** i `<head>` på `index.html` og `omvendelse.html`, vinner disse re-importerte reglene kappløpet mot `responsive.css` sine mobil-brytningspunkter for de samme selektorene — en reell, allerede bekreftet cascade-bug (dokumentert og omgått, ikke fjernet, i en tidligere mobiloptimaliserings-økt). |
| `css/layout.css` | **0 byte.** Importert av `style.css`, gjør ingenting. Trygt å slette. |
| `css/themes.css` (189 linjer, hardkodede hex-farger) | **Foreldreløs.** Lenket av ingen side. Trygt å slette. |
| `css/study.css`, `css/modal.css` | Legitime, korrekt skopede utvidelser for `kapittel-4.html`. Ikke duplisering — ingen tiltak anbefalt. |
| `temaer/fundament/css/fundament.css`, `temaer/kristenliv/css/kristenliv.css`, `temaer/ressurser/css/ressurser.css` | Legitime, minimale sideegne tillegg oppå den modulære basen. Dette er **riktig mønster** for sideegne behov — nevnes som positivt eksempel, ikke et problem. |

---

### 10. `templates/`, `partials/`, `data/` — ubrukt infrastruktur

| Element | Størrelse | Refereres av | Vurdering |
|---|---|---|---|
| `templates/artikkel-mal.html` | 1295 linjer | `js/article-generator.js`, kilde til `troens-bonn.html` | Reell, dokumentert (`templates/README.md`), men produserer navigasjon som ikke matcher prosjektets faktiske filstruktur. |
| `templates/tema-mal.html` | 264 linjer | Ingen kjørt output | Aldri brukt til å generere noen faktisk side. |
| `templates/kategori-mal.html`, `templates/ressurs-mal.html` | 0 byte | — | Tomme, uferdige. |
| `partials/layout/*.html` (header, footer, breadcrumb, hero) | 0 byte × 4 | Ingen | Tomt scaffold for en tredje (partial-basert) mal-arkitektur som aldri ble påbegynt. |
| `partials/cards/*.html` (3 filer) | 0 byte × 3 | Ingen | Samme. |
| `partials/sections/*.html` (2 filer) | 0 byte × 2 | Ingen | Samme. |
| `data/articles.json` + `data/schema.json` | — | `js/article-generator.js`, `js/cli.js` | Reell, i bruk av system B. |
| `data/articles/troens-bonn.json` | — | Ikke lenger i synk med `troens-bonn.html` (se punkt 4) | Kilde til regresjonsrisiko. |
| `data/articles.js` | — | `js/related-articles.js` (internt i generatoren), **og** `js/latest-articles.js` | Sistnevnte er en klientsidevariant som forventer en global `articles`-variabel og re-render `.articles-grid` on load — **lenket av ingen HTML-side**. Konkurrerer i praksis med den statiske, håndskrevne `.articles-grid` på `index.html`. |

**Vurdering:** Dette er den enkleste kategorien å rydde i — alt her er
enten (a) 0 byte og ufarlig å slette, eller (b) reelt kode som aldri
kjøres fra noen side og derfor kan fjernes eller arkiveres uten å endre
noe brukeren faktisk ser.

---

## Andre feil funnet underveis (ikke duplisering, men verdt å nevne siden de dukket opp i samme filer)

1. `omvendelse.html`: `<div class="bible">` skal være `<div class="bible-box">` (4 forekomster) — bibelsitatene er helt ustylet i dag.
2. `kapittel-4.html`: lenker til `kapittel-1.html`, `kapittel-2.html`, `kapittel-3.html`, `kapittel-5.html` som ikke finnes ennå.
3. To steder (`kapittel-4.html` sin footer og hovednav) lenker til `bibel/index.html` — skal være `temaer/bibelen/index.html`.
4. `kapittel-4.html` sin footer mangler logo/brand-blokk og sosiale ikoner sammenlignet med standardfooteren, selv om den bruker riktig CSS-klasser.

---

## Anbefalt migreringsplan

Rekkefølgen er valgt slik at hvert steg er uavhengig testbart og ikke
avhenger av at et senere steg er gjort. Alt er reversibelt (git).

### Fase 0 — nullrisiko opprydding (kan gjøres når som helst, ingen side påvirkes)
- Slett `partials/` (10 tomme filer).
- Slett `templates/kategori-mal.html`, `templates/ressurs-mal.html` (0 byte).
- Slett `css/layout.css` (0 byte, ingen effekt å fjerne importen av den fra `style.css`).
- Slett `css/themes.css` (lenket av ingen side).
- Slett/arkiver `js/latest-articles.js` og `data/articles.js` (ingen side laster dem) — **eller** koble dem faktisk til hvis dynamisk rendering av "Nyeste artikler" er ønsket; ikke la dem ligge ubrukt og tvetydige.

**Risiko:** ingen. Ingen av disse filene endrer noe en bruker kan se,
fordi ingenting refererer til dem i dag.

### Fase 1 — billige, isolerte rettelser (1 fil om gangen, ingen arkitekturendring)
- Rett `.bible` → `.bible-box` i `omvendelse.html` (4 steder).
- Rett `bibel/index.html` → `../../../../temaer/bibelen/index.html` i `kapittel-4.html` (2 steder).
- Enten bygg `kapittel-1/2/3/5.html` eller fjern/marker lenkene i `kapittel-4.html` sin kapittelnavigasjon som "kommer snart", slik at de ikke er døde.
- Fyll ut `kapittel-4.html` sin footer med `.footer-brand` og `.footer-social`, og utvid til 4 kolonner som resten av siten.

**Risiko:** svært lav. Hver endring er lokal og verifiserbar med en
lenkesjekk + skjermbilde.

### Fase 2 — migrer `troens-bonn.html` fra system B til system A
Dette er den eneste reelle "duplikat-migreringen" i rapporten, siden
alt annet enten allerede er system A eller aldri var i bruk.

1. Bestem status på system B først (se "Åpen beslutning" under) — hvis
   svaret er "system A er standard fremover", er dette steget en ren
   opprydding.
2. Konverter `troens-bonn.html` sin embedded header/footer/breadcrumb
   til system A sine delte klasser (samme jobb som allerede er gjort
   for `veien-til-jesus/kom-til-kristus.html` og kan brukes som mal).
3. Konverter `.scripture-box`/`.bible-text`/`.bible-reference` →
   `.bible-box` (ren finn-og-erstatt av 4 forekomster).
4. Konverter `.toc-card`/`.toc-column` → enten formaliser som delt
   komponent (se fase 4) eller gjenbruk `.featured-panel`+`.article-list`
   som i `kom-til-kristus.html`.
5. Fjern eller behold `data/articles/troens-bonn.json` bevisst — hvis
   filen beholdes uten at output regenereres derfra, bør det stå en
   tydelig kommentar i filen (eller `data/articles.json`) om at
   `troens-bonn.html` nå er håndvedlikeholdt og IKKE må regenereres
   uten å først bake inn navigasjonsrettelsene i malen.

**Risiko:** middels. Berører én velbesøkt artikkel med reelt
teologisk innhold. Gjør i en egen gren/commit, skjermbilde-test
desktop+mobil før og etter (samme fremgangsmåte som ble brukt for
`kom-til-kristus.html`).

### Fase 3 — bestem mobilnavigasjon én gang
Velg **én** av de tre eksisterende mobilmeny-mekanismene (JS-hamburger
fra `index.html`, checkbox-hamburger fra `troens-bonn.html`, eller ren
wrapping) som sitewide standard, og flytt den til en delt fil
(`css/navigation.css`/`css/header.css` + evt. `js/main.js`) slik at
alle 43 sider bruker samme løsning. Checkbox-varianten er verdt å
vurdere ekstra siden den ikke krever JavaScript.

**Risiko:** middels — påvirker header på alle sider, men er rent
additivt/CSS-drevet og kan testes trinnvis (én sidetype om gangen).

### Fase 4 — formaliser TOC og retire `css/style.css`
- Flytt en TOC-komponent (enten hentet fra `troens-bonn.html` sin
  `.toc-card` eller en ny, enklere versjon) inn i `css/components.css`
  med riktige CSS-variabler, slik at fremtidige artikler har ett
  opplagt valg.
- Migrer `index.html` og `omvendelse.html` fra `css/style.css` til den
  vanlige modulære lenkelisten (samme 12–14 `<link>`-tagger som de 41
  andre sidene allerede bruker). Slett `css/style.css` når begge er
  migrert og verifisert.

**Risiko:** middels-høy for `index.html` spesifikt, siden det er
forsiden og fordi den nylige mobiloptimaliseringen bevisst ble lagt
nederst i `style.css` for å vinne kaskaden. Denne migreringen må gjøres
*samtidig* med at de samme reglene flyttes til riktig sted i
`responsive.css` — ellers reintroduseres mobil-bugen den var ment å
fikse. Gjøres sist, med full regresjonstest av forsiden på mobil og
desktop.

---

## Åpne beslutninger (ikke tatt i denne rapporten)

1. **System A vs. system B for fremtidige artikler.** Skal
   `js/cli.js`-generatoren rettes (ekte relative stier i
   `templates/artikkel-mal.html`, output til `artikler/` i stedet for
   `articles/`) og bli den offisielle måten å lage nye artikler på —
   eller skal den arkiveres/fjernes til fordel for at nye artikler
   bygges for hånd, slik de 30 siste har blitt? Generatoren er
   genuint mer kapabel (auto-lesetid, relaterte artikler, strukturert
   SEO) — men krever vedlikehold av to datakilder (malen + JSON) og har
   aldri vært prøvd i praksis mot sidens ekte struktur.
2. **Bør breadcrumb være standard på alle artikkel-/temasider,** eller
   forbli forbeholdt de sidene som har det i dag?
3. **Hvilken mobilmeny-mekanisme** (JS-hamburger, checkbox-hamburger,
   eller forbedret wrapping) skal være sitewide standard (fase 3)?

---

## Full filliste per kategori (for etterprøving)

Sider som bruker system A (modulær) gjennomgående — 41 stk:
`index.html`, `temaer/index.html`, `temaer/{bibelen,evangeliet,teologi,apologetikk,endetid,bibelske-temaer,fundament,ressurser}/index.html`,
`temaer/kristenliv/index.html` + `{bonn,bibellesning,disippelskap,helliggjorelse,menighetsliv,evangelisering,lidelse,andelig-vekst,familie,arbeid-og-kall}/index.html`,
`artikler/index.html` + 11 artikkelfiler,
`om-meg/`, `vaar-visjon/`, `kontakt/`, `stott-arbeidet/`, `folg-oss/`, `veien-til-jesus/index.html`, `veien-til-jesus/kom-til-kristus.html`.

Sider utenfor system A: `temaer/kristenliv/bonn/troens-bonn.html` (system B),
`temaer/ressurser/studiegrupper/den-herlige-menigheten/kapittel-4.html` (system C),
`temaer/evangeliet/artikler/omvendelse.html` (system A via `style.css`, med `.bible`-feilen).
