# Migreringsstatus — THEOLOGIA → Next.js (`site/`)

Sist oppdatert: 2026-08-14

Dette dokumentet er den autoritative kilden for migreringsstatus og
route-inventar for THEOLOGIA. Det beskriver både (a) den faktiske
migreringsstatusen fra den gamle statiske HTML-strukturen (repo-rot) til
Next.js-appen i `site/`, og (b) helt nye temaer som ikke stammer fra gammel
HTML (se punkt 11).

**Metode:** Alle `.html`-filer i repo-roten (utenfor `site/`) er lest og
kryssjekket mot faktiske lenker i header, footer, forside, tema-kort og
artikler — ikke bare mappestrukturen. Alle `page.tsx`/`route.ts`-filer i
`site/app/` er lest som fasit for hva som faktisk er migrert.

---

## Legende

| Status | Betydning |
|---|---|
| **MIGRERT** | Siden finnes som en fungerende Next.js-route (`page.tsx` finnes og er innholdsmessig komplett). |
| **DELVIS MIGRERT** | Noe av innholdet finnes i Next.js (f.eks. metadata), men selve siden/ruten mangler. |
| **IKKE MIGRERT** | Siden finnes bare i gammel HTML. Ingen Next.js-route finnes. |
| **PLACEHOLDER** | Lenken finnes i gammel HTML (ikke `href="#"`), men det finnes ikke noe innhold bak den — verken i gammel eller ny versjon. `href="#"`-kort telles ikke som sider (se eget avsnitt). |
| **NEW THEME – CONTENT REQUIRED** | Helt nytt tema uten forbilde i gammel HTML. Teknisk sidestruktur er bygget i Next.js, men inneholder bevisst ingen fagtekst — kun tydelig merkede TODO-plassholdere. Se punkt 11. |

---

## 0. Filer som IKKE er ruter (utelatt fra tellingen)

Repo-roten har 64 `.html`-filer totalt. 13 av disse er ikke sider — de er
gjenbrukbare kode-fragmenter og maler, aldri servert som egne URL-er:

**Partials** (`partials/`) — referanse-fragmenter for header/footer/kort, ikke egne sider:
`cards/article-card.html`, `cards/category-card.html`, `cards/theme-card.html`,
`layout/breadcrumb.html`, `layout/footer.html`, `layout/header.html`, `layout/hero.html`,
`sections/related-themes.html`, `sections/section-header.html`

**Maler** (`templates/`) — boilerplate for fremtidige sider, ikke publiserte sider:
`artikkel-mal.html`, `kategori-mal.html`, `ressurs-mal.html`, `tema-mal.html`

Dette gir **51 reelle sider** i den gamle statiske versjonen, som er grunnlaget
for resten av dette dokumentet.

---

## 1. Next.js-ruter som faktisk finnes i dag

Verifisert direkte mot `site/app/`:

| Route (URL) | Fil | Gruppe |
|---|---|---|
| `/` | `app/(site)/page.tsx` | `(site)` — felles Header/Footer |
| `/artikler` | `app/(site)/artikler/page.tsx` | `(site)` |
| `/artikler/hvordan-lese-bibelen-med-forstaelse` | `app/(site)/artikler/hvordan-lese-bibelen-med-forstaelse/page.tsx` | `(site)` |
| `/artikler/paulus-og-evangeliet-om-naden` | `app/(site)/artikler/paulus-og-evangeliet-om-naden/page.tsx` | `(site)` |
| `/temaer` | `app/(site)/temaer/page.tsx` | `(site)` |
| `/temaer/apologetikk` | `app/(site)/temaer/apologetikk/page.tsx` | `(site)` |
| `/temaer/apologetikk/artikler/den-forste-arsaken` | `app/(site)/temaer/apologetikk/artikler/den-forste-arsaken/page.tsx` | `(site)` |
| `/temaer/bibelen` | `app/(site)/temaer/bibelen/page.tsx` | `(site)` |
| `/temaer/bibelske-temaer` | `app/(site)/temaer/bibelske-temaer/page.tsx` | `(site)` |
| `/temaer/evangeliet` | `app/(site)/temaer/evangeliet/page.tsx` | `(site)` |
| `/temaer/fundament` | `app/(site)/temaer/fundament/page.tsx` | `(site)` |
| `/temaer/kristenliv` | `app/(site)/temaer/kristenliv/page.tsx` | `(site)` |
| `/temaer/kristenliv/andelig-vekst` | `app/(site)/temaer/kristenliv/andelig-vekst/page.tsx` | `(site)` |
| `/temaer/kristenliv/arbeid-og-kall` | `app/(site)/temaer/kristenliv/arbeid-og-kall/page.tsx` | `(site)` |
| `/temaer/kristenliv/bibellesning` | `app/(site)/temaer/kristenliv/bibellesning/page.tsx` | `(site)` |
| `/temaer/kristenliv/bonn` | `app/(site)/temaer/kristenliv/bonn/page.tsx` | `(site)` |
| `/temaer/kristenliv/bonn/troens-bonn` | `app/(site)/temaer/kristenliv/bonn/troens-bonn/page.tsx` | `(site)` |
| `/temaer/kristenliv/bonn/effektiv-bonn` | `app/(site)/temaer/kristenliv/bonn/effektiv-bonn/page.tsx` | `(site)` — nytt innhold, ikke fra gammel HTML (opprinnelig portert fra `Effektiv bønn.docx`, senere erstattet med en redigert artikkeltekst levert direkte av redaktøren) |
| `/temaer/kristenliv/bonn/be-for-familien` | `app/(site)/temaer/kristenliv/bonn/be-for-familien/page.tsx` | `(site)` — nytt innhold, ikke fra gammel HTML, artikkeltekst levert direkte av redaktøren |
| `/temaer/kristenliv/disippelskap` | `app/(site)/temaer/kristenliv/disippelskap/page.tsx` | `(site)` |
| `/temaer/kristenliv/evangelisering` | `app/(site)/temaer/kristenliv/evangelisering/page.tsx` | `(site)` |
| `/temaer/kristenliv/familie` | `app/(site)/temaer/kristenliv/familie/page.tsx` | `(site)` |
| `/temaer/kristenliv/helliggjorelse` | `app/(site)/temaer/kristenliv/helliggjorelse/page.tsx` | `(site)` |
| `/temaer/kristenliv/lidelse` | `app/(site)/temaer/kristenliv/lidelse/page.tsx` | `(site)` |
| `/temaer/kristenliv/menighetsliv` | `app/(site)/temaer/kristenliv/menighetsliv/page.tsx` | `(site)` |
| `/temaer/endetid` | `app/(site)/temaer/endetid/page.tsx` | `(site)` |
| `/temaer/endetid/artikler/er-evig-bevisst-pine-bibelsk` | `app/(site)/temaer/endetid/artikler/er-evig-bevisst-pine-bibelsk/page.tsx` | `(site)` |
| `/temaer/fundament/artikler/dap-i-vann` | `app/temaer/fundament/artikler/dap-i-vann/page.tsx` | Frittstående, utenfor `(site)` (bevisst spesialtilfelle, se `Rutearkitektur` under) |
| `/temaer/fundament/artikler/evig-dom` | `app/temaer/fundament/artikler/evig-dom/page.tsx` | Frittstående, utenfor `(site)` (bevisst spesialtilfelle, samme mønster som `dap-i-vann`) |
| `/temaer/fundament/grunnvollen` | `app/(site)/temaer/fundament/grunnvollen/page.tsx` | `(site)` |
| `/temaer/ressurser/boker` | `app/(site)/temaer/ressurser/boker/page.tsx` | `(site)` |
| `/temaer/ressurser/studiegrupper` | `app/(site)/temaer/ressurser/studiegrupper/page.tsx` | `(site)` |
| `/temaer/ressurser/studiegrupper/den-herlige-menigheten` | `app/(site)/temaer/ressurser/studiegrupper/den-herlige-menigheten/page.tsx` | `(site)` |
| `/temaer/ressurser/studiegrupper/den-herlige-menigheten/kapittel-4` | `app/(site)/temaer/ressurser/studiegrupper/den-herlige-menigheten/kapittel-4/page.tsx` | `(site)` |
| `/temaer/teologi` | `app/(site)/temaer/teologi/page.tsx` | `(site)` |
| `/temaer/ressurser` | `app/temaer/ressurser/page.tsx` | Frittstående, utenfor `(site)` (bevisst spesialtilfelle — egen nav-rekkefølge + minimal footer i original, se `Rutearkitektur` under) |
| `/temaer/calvinisme` | `app/(site)/temaer/calvinisme/page.tsx` | `(site)` — **NEW THEME – CONTENT REQUIRED**, se punkt 11 |
| `/temaer/islam` | `app/(site)/temaer/islam/page.tsx` | `(site)` — **NEW THEME – CONTENT REQUIRED**, se punkt 11 |
| `/vaar-visjon` | `app/(site)/vaar-visjon/page.tsx` | `(site)` |
| `/om-meg` | `app/(site)/om-meg/page.tsx` | `(site)` |
| `/kontakt` | `app/(site)/kontakt/page.tsx` | `(site)` |
| `/veien-til-jesus/kom-til-kristus` | `app/(site)/veien-til-jesus/kom-til-kristus/page.tsx` | `(site)` |
| `/stott-arbeidet` | `app/(site)/stott-arbeidet/page.tsx` | `(site)` |

**43 fungerende ruter totalt** (39 migrert fra gammel HTML + 2 nytt artikkelinnhold uten gammelt HTML-forbilde, `effektiv-bonn` og `be-for-familien` + 2 nye temastrukturer uten fagtekst). `app/temaer/kristenliv/bonn/troens-bonn/` (uten `(site)`) er en tom mappe uten `page.tsx` — bidrar ikke til routing (se `Rutearkitektur`).

**Merk:** `app/(site)/temaer/fundament/page.tsx` eksisterer allerede og er
innholdsmessig komplett (hero + full tema-kort-grid, identisk struktur med den
gamle siden). Dette er nytt siden forrige versjon av dette dokumentet, som
feilaktig oppga at fundament-migreringen ventet på godkjenning — den er
allerede implementert.

---

## Rutearkitektur

`app/(site)/` er route group for vanlige THEOLOGIA-sider med felles
Header/Footer-layout (`app/(site)/layout.tsx`). Route group-navnet påvirker
ikke URL-en.

`app/temaer/fundament/artikler/dap-i-vann/page.tsx` ligger bevisst **utenfor**
`(site)`. Siden er en frittstående, selvstendig komponent (`"use client"`) med
sin egen `<header>`/`<footer>` bygget inn i selve siden (`styles.siteNav`,
`styles.siteFooter` i `dap-i-vann.module.css`) — den skal ikke arve
site-wide Header/Footer fra `(site)`-layouten. Den arver kun rot-layouten
(`app/layout.tsx`), som ikke rendrer Header/Footer. Dette er et bevisst
spesialtilfelle, ikke en migreringsfeil, og siden skal ikke flyttes inn i
`(site)` uten eksplisitt beskjed.

`app/temaer/ressurser/page.tsx` ligger av samme grunn bevisst **utenfor**
`(site)`. Originalen (`temaer/ressurser/index.html`) har en annen
nav-rekkefølge (Artikler før Ressurser, mot standard Hjem/Temaer/Ressurser/
Artikler alle andre steder) og en minimal egen footer (kun copyright-linje,
ingen kolonner/sosiale ikoner) — et reelt, pre-eksisterende avvik i
originalen. Siden bygger derfor egen header/nav (server-komponent, ikke
`"use client"` — "Ressurser" er hardkodet aktiv siden ruten kun rendres her)
og egen minimal footer direkte i siden, i stedet for å endre de delte
`Header`/`Footer`-komponentene (som brukes uendret av alle andre migrerte
sider). Siden laster også sin egen Google Font (Cormorant Garamond) for
overskrifter via `next/font`, skopet kun til denne filen — sitewide
EB Garamond i `app/layout.tsx` er ikke rørt.

**Verifisert med `npm run build`** (Next.js 16.3.0, Turbopack) — se punkt 8.

---

## 2. Forsiden

| Gammel filsti | Gammel URL | Planlagt Next.js URL | Status |
|---|---|---|---|
| `index.html` | `/` | `/` | **MIGRERT** |

---

## 3. Hovednavigasjon (Header / Footer — identisk på alle gamle sider)

Header: Hjem (`index.html`), Utforsk temaer (`temaer/`), Ressurser
(`temaer/ressurser/`), Artikler (`artikler/`), **Veien til Jesus** (peker
direkte til `veien-til-jesus/kom-til-kristus.html`, ikke til
`veien-til-jesus/index.html` — se spesialtilfelle i punkt 7), Om meg (`om-meg/`).

Footer: Bibelen, Evangeliet, Kristenliv, Teologi, Apologetikk, Endetid,
Bibelske temaer, Ressurser, Veien til Jesus (`veien-til-jesus/index.html`,
her *er* det indekssiden), Om meg, Vår visjon, Kontakt oss, Støtt arbeidet,
Følg oss (4× sosiale ikoner → alle til `folg-oss/index.html`).

Alle disse målsidene er dekket i tabellene under. Ingen døde lenker i
header/footer.

---

## 4. Temaer — oversikt og toppnivå-kategorier

| Gammel filsti | Gammel URL | Planlagt Next.js URL | Status | Merknad |
|---|---|---|---|---|
| `temaer/index.html` | `/temaer/` | `/temaer` | **MIGRERT** (2026-08-11) | Hub-side med kort til alle 9 temaer. `app/(site)/temaer/page.tsx` gjenbruker eksisterende `TopicGrid`-komponent uendret — innholdet var allerede 1:1-identisk med forsidens temaseksjon (samme tekst, ikoner og lenker), portert derfra tidligere. Kun `Breadcrumbs` lagt til (samme etablerte mønster som Fundament/Artikler/Troens bønn; original hadde ingen brødsmulesti). |
| `temaer/apologetikk/index.html` | `/temaer/apologetikk/` | `/temaer/apologetikk` | **MIGRERT** (2026-08-12) | Portert 1:1 (intro, "vil dekke"-liste via `SimpleList`, "Tilgjengelig nå" med lenke til `den-forste-arsaken`, coming-soon-boks). Artikkelen er nå også migrert (2026-08-13) — lenken peker til en fungerende rute. Ingen bilder i original. |
| `temaer/bibelen/index.html` | `/temaer/bibelen/` | `/temaer/bibelen` | **MIGRERT** (2026-08-11) | Ren stub, portert 1:1 (intro, "Dette temaet vil dekke"-liste, coming-soon-boks). Ny delt komponent `SimpleList` lagt til for `.simple-list`-mønsteret (gyllen firkant-bullet), først brukt her — gjenbrukbar for `apologetikk/index.html` og `vaar-visjon/index.html` som bruker samme klasse. Ingen bilder på siden (tomme `artikler/`- og `bilder/`-mapper i original, ingenting å flytte). |
| `temaer/bibelske-temaer/index.html` | `/temaer/bibelske-temaer/` | `/temaer/bibelske-temaer` | **MIGRERT (2026-08-13)** | Ren stub, portert 1:1 (intro + coming-soon-boks, ingen kort/artikler i original). Ingen bilder, ingen sideegen CSS, ingen JS i original. Identisk mønster som Teologi/Bibelen/Evangeliet. `TopicGrid`- og `Footer`-lenkene til denne ruten var allerede forhåndsregistrert (klassifisering B) og er nå A. |
| `temaer/endetid/index.html` | `/temaer/endetid/` | `/temaer/endetid` | **MIGRERT (2026-08-13)** | Portert 1:1 (intro, "Tilgjengelig nå" med lenke til `er-evig-bevisst-pine-bibelsk` — nå en migrert rute, klassifisert A — og coming-soon-boks). Ingen "vil dekke"-liste i original, så ingen `SimpleList` brukt. Ingen bilder, ingen sideegen CSS, ingen JS i original. Samme mønster som Apologetikk-huben, men uten `SimpleList`-seksjonen. |
| `temaer/evangeliet/index.html` | `/temaer/evangeliet/` | `/temaer/evangeliet` | **MIGRERT** (2026-08-11) | Ren stub, portert 1:1 (intro + coming-soon-boks, ingen "vil dekke"-liste i original). Bekreftet på nytt ved migrering: siden lenker fortsatt *ikke* til `omvendelse.html` — den forblir foreldreløs, se spesialtilfelle punkt 8.2. Ingen bilder på siden. |
| `temaer/fundament/index.html` | `/temaer/fundament/` | `/temaer/fundament` | **MIGRERT** | `page.tsx` finnes, komplett. |
| `temaer/kristenliv/index.html` | `/temaer/kristenliv/` | `/temaer/kristenliv` | **MIGRERT** (2026-08-11) | Reelt hub-innhold, portert 1:1 (hero med bilde, 10-kort emnenett, sitatpanel). Bespoke sideoppsett (ikke `TopicGrid`/`TopicCard`) fordi originalen har reelle designavvik (5 kolonner, venstrejustert, mindre ikonmarg — dokumentert i `temaer/kristenliv/css/kristenliv.css`). `hero-kristenliv.jpg` kopiert til `public/images/kristenliv/`. `sitat-bakgrunn.jpg` finnes ikke i original heller (dokumentert i kildens CSS-kommentar) — samme manglende referanse bevart uendret, usynlig pga. opacity .18. 3 nye ikoner lagt til i delt `Icon`-komponent (`megaphone`, `family`, `briefcase`), portert fra `css/icons.css`. "Bønn"-kortet peker til `/temaer/kristenliv/bonn` (nå også migrert, se egen rad under — **ikke** direkte til `troens-bonn`, som originalen heller ikke gjør). |
| `temaer/ressurser/index.html` | `/temaer/ressurser/` | `/temaer/ressurser` | **MIGRERT** (2026-08-12) | Reelt hub-innhold, portert 1:1 (hero, featured-kort med kapitteloversikt, 5 ressursrader, sitatpanel). Frittstående utenfor `(site)` pga. avvikende nav-rekkefølge/minimal footer i original, se `Rutearkitektur`. `ressurser.css` er 1144 linjer, men ~750 av dem (`.featured-study`/`.study-card`/`.study-groups`-seksjonene) er bekreftet **ubrukt** i `index.html` og er ikke portert. To pre-eksisterende CSS-spesifisitetskvirker i original replikert etter faktisk gjengitt oppførsel, ikke antatt hensikt: `--muted` er en udefinert CSS-variabel (hero-ingress arver derfor `var(--text)`, ikke en egen "dempet" farge), og `.study-outline p` (0,1,1) slår `.study-coming` (0,1,0) i spesifisitet slik at begge avslutningsavsnittene under kapitteloversikten faktisk får samme styling. Kun 4 av 5 bilder oppgitt i oppgaven ble kopiert — `den-herlige-menigheten-3d.png` er bekreftet **ikke** brukt av `index.html` (kun av `studiegrupper`/`kapittel-4`, utenfor denne oppgavens omfang). Underliggende sider (`boker`, `studiegrupper`, `den-herlige-menigheten`, `kapittel-4`) er ikke rørt. **Rettet 2026-08-12:** "Flere podkaster"- og "Flere verktøy"-lenkene pekte feilaktig til `/temaer/ressurser` i stedet for originalens `#podcasts-title`/`#tools-title`; begge nå korrekte. Alle `resource-more`-lenker på siden peker nå til riktig samme-sides anker, i tråd med original. |
| `temaer/teologi/index.html` | `/temaer/teologi/` | `/temaer/teologi` | **MIGRERT** (2026-08-12) | Ren stub, portert 1:1 (intro + coming-soon-boks). Ingen bilder, ingen sideegen CSS, ingen JS i original. Identisk mønster som Bibelen/Evangeliet/Disippelskap. |

### Underkategorier og artikler under Fundament

| Gammel filsti | Gammel URL | Planlagt Next.js URL | Status | Merknad |
|---|---|---|---|---|
| `temaer/fundament/grunnvollen/index.html` | `/temaer/fundament/grunnvollen/` | `/temaer/fundament/grunnvollen` | **MIGRERT (2026-08-13)** | Ren stub, portert 1:1 (intro + coming-soon-boks). Originalens `article-subtitle` er en ordrett duplikat av ingress-paragrafen — bevisst bevart som funnet, ikke ryddet opp i. Original bruker en eldre/utdatert footer-variant (andre kolonnenavn, duplikat "Veien til Jesus"-lenke) — delt, oppdatert `Footer`-komponent brukes i stedet, samme etablerte tilnærming som huben. Ingen bilder, ingen sideegen CSS, ingen JS i original. |
| `temaer/fundament/artikler/dap-i-vann.html` | `/temaer/fundament/artikler/dap-i-vann.html` | `/temaer/fundament/artikler/dap-i-vann` | **MIGRERT** | Frittstående spesialtilfelle (se `Rutearkitektur`). Egne innebygde `<style>`-regler i gammel HTML; egen `.module.css` i Next.js. |
| `temaer/fundament/artikler/evig-dom.html` | `/temaer/fundament/artikler/evig-dom.html` | `/temaer/fundament/artikler/evig-dom` | **MIGRERT (2026-08-13)** | Bespoke frittstående side, samme arkitektur som `dap-i-vann` (utenfor `(site)`, egen lokal header/footer, egen `.module.css` med skopet navy/gull/vin-palett, `"use client"` + IntersectionObserver-basert fade-in portert med DENNE artikkelens egne threshold/rootMargin-verdier, ikke dap-i-vann sine). Flere CSS-komponentmønstre enn dap-i-vann (`.summary-box`/`.summary-step`, `.verse-card`, `.refs-inline`, `.reflection-list`, `.three-aspects`/`.aspect`, `.part-marker`) — alle portert med egne, nøyaktige verdier fra originalens `<style>`-blokk. `.plain-list` fra originalens CSS er bekreftet ubrukt i `<body>` og ikke portert. Ingen bilder. `href` var allerede forhåndsregistrert i `FundamentPage`s `TOPICS`-array. |

De fem resterende kortene på `/temaer/fundament/` (Omvendelse fra døde
gjerninger, Tro på Gud, Dåp i Den Hellige Ånd, Håndspåleggelse, De dødes
oppstandelse) peker til `href="#"` i gammel HTML og telles **ikke** som sider
per instruks — ingen skrevne artikler finnes bak dem i noen av versjonene.

### Underkategorier og artikler under Apologetikk / Endetid / Evangeliet

| Gammel filsti | Gammel URL | Planlagt Next.js URL | Status | Merknad |
|---|---|---|---|---|
| `temaer/apologetikk/artikler/den-forste-arsaken.html` | `/temaer/apologetikk/artikler/den-forste-arsaken.html` | `/temaer/apologetikk/artikler/den-forste-arsaken` | **MIGRERT (2026-08-13)** | Portert 1:1 (9 nummererte seksjoner p1–p9 med Begrunnelse/Implikasjon-mønster, TOC via `ArticleToc`, "Samlet bilde og konklusjon" bevisst uten id/TOC-oppføring, `ContentList`, `ImportantBox`, `BibleBox`). Byline «Av Eirik Storesletten» bevart (ikke normalisert til «Av THEOLOGIA»). Utvidet metadata portert (OG/Twitter/canonical/published_time, med egen kortere og:description/twitter:description-tekst atskilt fra hoved-description). Giscus-kommentarwidget portert som isolert, page-scoped klientkomponent (`GiscusComments.tsx`, ko-lokalisert i samme mappe) — samme prinsipp som `ZoomGroupModal` fra Ressurser-migreringen. Ingen bilder. Registrert i `lib/articles.ts` med `migrated: true`. |
| `temaer/endetid/artikler/er-evig-bevisst-pine-bibelsk.html` | `/temaer/endetid/artikler/er-evig-bevisst-pine-bibelsk.html` | `/temaer/endetid/artikler/er-evig-bevisst-pine-bibelsk` | **MIGRERT (2026-08-12)** | Migrert 2026-08-12. Registrert i `lib/articles.ts` med `migrated: true`. PDF kopiert uendret til `site/public/pdf/er-evig-bevisst-pine-bibelsk.pdf` og lenket fra "Les som PDF"/"Last ned PDF"/embed-fallback. Hub-siden `temaer/endetid/index.html` er nå også migrert (2026-08-13) — brødsmulestiens "Endetid"-lenke peker til en fungerende rute. |
| `temaer/evangeliet/artikler/omvendelse.html` | `/temaer/evangeliet/artikler/omvendelse.html` | `/temaer/evangeliet/artikler/omvendelse` | **IKKE MIGRERT** | **Foreldreløs side** — se spesialtilfelle punkt 7. Bruker kun `css/style.css` (eldre, samlet stilark), ikke det modulære CSS-settet de andre artiklene bruker. |

### Kristenliv — underkategorier

| Gammel filsti | Gammel URL | Planlagt Next.js URL | Status | Merknad |
|---|---|---|---|---|
| `temaer/kristenliv/andelig-vekst/index.html` | `/temaer/kristenliv/andelig-vekst/` | `/temaer/kristenliv/andelig-vekst` | **MIGRERT** (2026-08-12) | Ren stub, portert 1:1 (intro + coming-soon-boks). Ingen bilder, ingen sideegen CSS i original. Verifisert mot faktisk `page.tsx` og `npm run build`-output. |
| `temaer/kristenliv/arbeid-og-kall/index.html` | `/temaer/kristenliv/arbeid-og-kall/` | `/temaer/kristenliv/arbeid-og-kall` | **MIGRERT** (2026-08-12) | Ren stub, portert 1:1 (intro + coming-soon-boks). Ingen bilder, ingen sideegen CSS i original. Verifisert mot faktisk `page.tsx` og `npm run build`-output. Siste gjenstående Kristenliv-underkategori — alle 9 er nå migrert. |
| `temaer/kristenliv/bibellesning/index.html` | `/temaer/kristenliv/bibellesning/` | `/temaer/kristenliv/bibellesning` | **MIGRERT** (2026-08-12) | Ren stub, portert 1:1 (intro + coming-soon-boks). Ingen bilder, ingen sideegen CSS i original. |
| `temaer/kristenliv/bonn/index.html` | `/temaer/kristenliv/bonn/` | `/temaer/kristenliv/bonn` | **MIGRERT** (2026-08-12) | Portert 1:1 (intro, "Tilgjengelig nå" med lenke til Troens bønn, coming-soon-boks). Ingen "vil dekke"-liste i original (ingen `SimpleList` brukt). Lenken til Troens bønn peker til den faktiske, allerede migrerte ruten `/temaer/kristenliv/bonn/troens-bonn` — verifisert 200 OK. Ingen bilder i original. |
| `temaer/kristenliv/bonn/troens-bonn.html` | `/temaer/kristenliv/bonn/troens-bonn.html` | `/temaer/kristenliv/bonn/troens-bonn` | **MIGRERT** | `content/articles/troens-bonn.mdx`. Egen `css/troens-bonn.css` i gammel versjon. |
| `temaer/kristenliv/disippelskap/index.html` | `/temaer/kristenliv/disippelskap/` | `/temaer/kristenliv/disippelskap` | **MIGRERT** (2026-08-12) | Ren stub, portert 1:1 (intro + coming-soon-boks). Ingen bilder, ingen sideegen CSS i original. |
| `temaer/kristenliv/evangelisering/index.html` | `/temaer/kristenliv/evangelisering/` | `/temaer/kristenliv/evangelisering` | **MIGRERT** (2026-08-12) | Ren stub, portert 1:1 (intro + coming-soon-boks). Ingen bilder, ingen sideegen CSS i original. |
| `temaer/kristenliv/familie/index.html` | `/temaer/kristenliv/familie/` | `/temaer/kristenliv/familie` | **MIGRERT** (2026-08-12) | Ren stub, portert 1:1 (intro + coming-soon-boks). Ingen bilder, ingen sideegen CSS i original. |
| `temaer/kristenliv/helliggjorelse/index.html` | `/temaer/kristenliv/helliggjorelse/` | `/temaer/kristenliv/helliggjorelse` | **MIGRERT** (2026-08-12) | Ren stub, portert 1:1 (intro + coming-soon-boks). Ingen bilder, ingen sideegen CSS i original. Verifisert mot faktisk `page.tsx` i `site/app/` og `npm run build`-output, ikke bare tidligere rapport. |
| `temaer/kristenliv/lidelse/index.html` | `/temaer/kristenliv/lidelse/` | `/temaer/kristenliv/lidelse` | **MIGRERT** (2026-08-12) | Ren stub, portert 1:1 (intro + coming-soon-boks). Ingen bilder, ingen sideegen CSS i original. Verifisert mot faktisk `page.tsx` og `npm run build`-output. |
| `temaer/kristenliv/menighetsliv/index.html` | `/temaer/kristenliv/menighetsliv/` | `/temaer/kristenliv/menighetsliv` | **MIGRERT** (2026-08-12) | Ren stub, portert 1:1 (intro + coming-soon-boks). Ingen bilder, ingen sideegen CSS i original. Verifisert mot faktisk `page.tsx` og `npm run build`-output. |

### Ressurser — underkategorier

| Gammel filsti | Gammel URL | Planlagt Next.js URL | Status | Merknad |
|---|---|---|---|---|
| `temaer/ressurser/boker/index.html` | `/temaer/ressurser/boker/` | `/temaer/ressurser/boker` | **MIGRERT** (2026-08-12) | Portert 1:1 (kildekort Rhema Books/Monergism, "Hvorfor lese kristne bøker"-grid, bibelvers-boks). Bruker standard `(site)`-layout (Header/Footer) — i motsetning til Ressurser-huben har denne siden ingen designavvik. `ArticleLayout`s `category`-prop utvidet fra `string` til `React.ReactNode` (additiv, bakoverkompatibel) for å bevare originalens lille bok-ikon foran "Ressursbiblioteket". Egen side-scoped "Tilbake"-pillknapp (unikt mønster, ikke i noen delt komponent ennå). Ingen bilder i original. |
| `temaer/ressurser/studiegrupper/index.html` | `/temaer/ressurser/studiegrupper/` | `/temaer/ressurser/studiegrupper` | **MIGRERT** (2026-08-12) | Portert 1:1 (3 boksett, 6 `aria-disabled`-kort + 1 reell lenke til Den herlige menigheten). Standard `(site)`-layout, ingen designavvik. 7 bilder kopiert: 6 fra `studiegrupper/images/` til `public/images/studiegrupper/`, pluss `den-herlige-menigheten-3d.png` fra `images/resources/` til `public/images/resources/` (brukt av siden, men ikke opprinnelig nevnt i bildelisten for oppgaven — verifisert og kopiert likevel). Lenken til Den herlige menigheten peker korrekt til kapitteloversikten (`/temaer/ressurser/studiegrupper/den-herlige-menigheten`), ikke migrert ennå. |
| `temaer/ressurser/studiegrupper/den-herlige-menigheten/index.html` | `.../den-herlige-menigheten/` | `.../den-herlige-menigheten` | **MIGRERT** (2026-08-12) | Portert 1:1 (hero, bokstatus-kort med fremdriftslinje, kapitteloversikt, kapittelnavigasjon). Erstatter `js/study-overview.js` (regner ut fremdrift/paginering fra `.book-toc` i nettleseren) med ren serverside-utregning fra samme datastruktur — ingen klient-JS. Kapittel 1/2/3/5 forblir `aria-disabled`/`tabindex="-1"`-placeholders med korrekte fremtidige URL-er (404 inntil migrert); Kapittel 4 peker til egen, ennå ikke migrert rute (404). Bespoke layout (ikke `ArticleLayout`) — originalen har ingen `.article-page`-struktur. To funn: originalens `.section-label`("STUDIET") og selve brødsmulestien har **ingen CSS-treff** i det hele tatt (siden lenker ikke `css/components.css`) — brødsmulestien er derfor erstattet med standard `Breadcrumbs`-komponent per etablert praksis, mens "STUDIET" er gjengitt som ustylet tekst, tro mot original. `.study-hero-grid` og `.pagination-grid` har **ingen** responsiv kollaps-regel noe sted i kildens CSS — bevart uendret (ikke lagt til mobil-stacking som ikke finnes i original). |
| `temaer/ressurser/studiegrupper/den-herlige-menigheten/kapittel-4.html` | `.../kapittel-4.html` | `.../kapittel-4` | **MIGRERT** (2026-08-12) | Portert 1:1, inkludert all brødtekst i "Presentasjon"-seksjonen (ingen forkortning/omskriving). Sideegne klientkomponenter: `AccordionSection`/`SubAccordion` (erstatter `js/study.js` sin accordion-toggle — ren utledning fra React-state, samme uavhengige multi-åpen-oppførsel) og `ZoomGroupModal` (erstatter `js/modal.js` isolert for denne ene modalen — Escape, overlay-klikk, fokusfelle, fokus-retur, samme faseforløp som original). Alt innhold (også i lukkede seksjoner/modal) er alltid i SSR-HTML-en, kun CSS-skjult via `hidden`/`hidden`-attributt — ingen tekst forsvinner fra DOM-en slik betinget mounting ville gitt. `js/study.js` sin `initInfographicViewers()` (fullskjerm-lysbildeviser) er bevisst **ikke** portert — bekreftet at siden har null `.infographic-slides`-markup i dag, så funksjonen er et no-op i original også. De 38 `lammets-blod-*.jpg` er bekreftet ubrukt av kapittel 4 og er ikke kopiert. Kapittel 3/5-paginering og "Relaterte ressurser" (3 tomme kort, ingen tittel/beskrivelse i original) bevart nøyaktig, ingen oppdiktet innhold. |
| *(kapittel-1, 2, 3, 5)* | — | — | **PLACEHOLDER** | Se punkt 6. |

---

## 5. Artikler (rotnivå `/artikler/`)

| Gammel filsti | Gammel URL | Planlagt Next.js URL | Status | Merknad |
|---|---|---|---|---|
| `artikler/index.html` | `/artikler/` | `/artikler` | **MIGRERT** | `page.tsx` finnes. Innholdsmodellen er endret fra statisk liste til delt `LatestArticlesTimeline`-komponent drevet av `lib/articles.ts` — samme URL og formål, men annen implementasjon. |
| `artikler/a-leve-som-guds-etterfolger.html` | `/artikler/a-leve-som-guds-etterfolger.html` | `/artikler/a-leve-som-guds-etterfolger` | **IKKE MIGRERT** | Ren stub i gammel versjon også. Metadata i `lib/articles.ts` (`migrated: false`). |
| `artikler/er-kristendommen-historisk-palitelig.html` | tilsvarende | tilsvarende | **IKKE MIGRERT** | Ren stub. Metadata i `lib/articles.ts`. |
| `artikler/forsoningen.html` | tilsvarende | tilsvarende | **IKKE MIGRERT** | Ren stub. Metadata i `lib/articles.ts`. |
| `artikler/forsoningens-frukter.html` | tilsvarende | tilsvarende | **IKKE MIGRERT** | Ren stub. Metadata i `lib/articles.ts`. |
| `artikler/hva-er-forsoning.html` | tilsvarende | tilsvarende | **IKKE MIGRERT** | Ren stub. Metadata i `lib/articles.ts`. |
| `artikler/hvordan-lese-bibelen-med-forstaelse.html` | `/artikler/hvordan-lese-bibelen-med-forstaelse.html` | `/artikler/hvordan-lese-bibelen-med-forstaelse` | **MIGRERT (2026-08-13)** | Ren stub, portert 1:1 (kategori, ingress, synlig dato/byline «18. mai 2024 · Artikkel» via `ArticleLayout`s `meta`-prop, coming-soon-boks). Registrert i `lib/articles.ts` med `migrated: true`. Ingen bilder, ingen sideegen CSS, ingen JS i original. |
| `artikler/korset-kjaerlighet-og-rettferdighet.html` | tilsvarende | tilsvarende | **IKKE MIGRERT** | Ren stub. Metadata i `lib/articles.ts`. |
| `artikler/kristi-offer-i-det-gamle-testamentet.html` | tilsvarende | tilsvarende | **IKKE MIGRERT** | Ren stub. Metadata i `lib/articles.ts`. |
| `artikler/lammets-seier-i-apenbaringen.html` | tilsvarende | tilsvarende | **IKKE MIGRERT** | Ren stub. Metadata i `lib/articles.ts`. |
| `artikler/paulus-og-evangeliet-om-naden.html` | `/artikler/paulus-og-evangeliet-om-naden.html` | `/artikler/paulus-og-evangeliet-om-naden` | **MIGRERT (2026-08-13)** | Ren stub, portert 1:1 (kategori, ingress, synlig dato/byline «15. mai 2024 · Artikkel» via `ArticleLayout`s `meta`-prop, coming-soon-boks). Registrert i `lib/articles.ts` med `migrated: true`. Ingen bilder, ingen sideegen CSS, ingen JS i original. |
| `artikler/vanlige-misforstaelser-om-forsoningen.html` | tilsvarende | tilsvarende | **IKKE MIGRERT** | Ren stub. Metadata i `lib/articles.ts`. |

Alle 11 er "Kommer snart"-stubs i gammel HTML — det finnes ikke skrevet
artikkeltekst bak noen av dem i noen av versjonene ennå.

---

## 6. Ekte placeholders (lenke finnes, ingen side bak den noe sted)

| Lenke | Lenket fra | Status |
|---|---|---|
| `/ressurser/videoer/` | Forsidens ressursliste (`index.html`) | **PLACEHOLDER** — absolutt sti, finnes ikke som fil noe sted. |
| `/ressurser/podkaster/` | Forsidens ressursliste | **PLACEHOLDER** — samme. |
| `/ressurser/nettressurser/` | Forsidens ressursliste | **PLACEHOLDER** — samme. |
| `/ressurser/studieverktoy/` | Forsidens ressursliste og `temaer/ressurser/index.html` | **PLACEHOLDER** — samme. |
| `kapittel-1.html` | `den-herlige-menigheten/index.html` (kapitteloversikt) | **PLACEHOLDER** — `aria-disabled`, eksplisitt kommentert i kilden: "finnes ikke som egne sider ennå". |
| `kapittel-2.html` | samme | **PLACEHOLDER** — samme. |
| `kapittel-3.html` | samme | **PLACEHOLDER** — samme. |
| `kapittel-5.html` | samme | **PLACEHOLDER** — samme. |

Disse fire `/ressurser/...`-lenkene er allerede dokumentert som forhåndseksisterende,
tomme lenker i `site/components/home/ResourceLibraryPanel.tsx` sin kommentar —
ikke noe denne kartleggingen fant opp.

`href="#"`-kortene på `/temaer/fundament/` (5 stk, se punkt 4) telles **ikke**
med her, per instruks.

---

## 7. Spesialsider (rotnivå, utenfor `temaer/` og `artikler/`)

| Gammel filsti | Gammel URL | Planlagt Next.js URL | Status | Merknad |
|---|---|---|---|---|
| `om-meg/index.html` | `/om-meg/` | `/om-meg` | **MIGRERT** (2026-08-14) | Ren innholdsside, portert 1:1 (4 seksjoner + `content-list` med 8 punkter + mailto-lenke). Gjenbrukte eksisterende, tidligere uendret `ContentList`-komponent for `.content-list`-mønsteret (grid, 2 kolonner, sirkulær gyllen bullet) — første faktiske bruk. Ny minimal CSS-regel `.contactEmail` lagt til i `article.module.css` for å bevare originalens `.contact-email`-styling (1.15rem, fet skrift) på mailto-lenken — konkret originalavvik, ikke en ny abstraksjon. Ingen breadcrumbs i original — standard migreringsavvik (Hjem → Om meg). |
| `vaar-visjon/index.html` | `/vaar-visjon/` | `/vaar-visjon` | **MIGRERT** (2026-08-14) | Ren innholdsside, portert 1:1 (visjon-avsnitt + misjon-liste med 6 punkter). Gjenbrukte eksisterende `SimpleList` uendret. Ingen breadcrumbs i original — standard migreringsavvik (Hjem → Vår visjon). Ingen bilder utover delt logo, ingen JS. |
| `veien-til-jesus/index.html` | `/veien-til-jesus/` | `/veien-til-jesus` | **IKKE MIGRERT** | Reelt innhold. Kun nådd via footer, ikke header (se spesialtilfelle under). |
| `veien-til-jesus/kom-til-kristus.html` | `/veien-til-jesus/kom-til-kristus.html` | `/veien-til-jesus/kom-til-kristus` | **MIGRERT** (2026-08-14) | Stor artikkel, portert 1:1 (9 kapitler, TOC, 31 bibelbokser inkl. én fritstående mellom kap2/kap3, `featured-panel`-oppsummering, Giscus-kommentarfelt). H1 «Veien til Gud» ≠ tittel «Kom til Kristus» bevisst bevart. Ny lokal CSS-modul (`.featuredPanel`, portert fra `css/cards.css`) og co-lokalisert `GiscusComments.tsx` (samme mønster som `den-forste-arsaken`). Delt `Header.tsx` og `Hero.tsx` er nå oppdatert til å peke direkte hit — se punkt 8 (spesialtilfeller). Breadcrumbens midtre lenke («Veien til Jesus») peker til `/veien-til-jesus`, som ennå ikke er migrert og derfor gir 404 inntil videre. |
| `kontakt/index.html` | `/kontakt/` | `/kontakt` | **MIGRERT** (2026-08-14) | Ren stub, portert 1:1 (ingress + `ComingSoon`-boks). Gjenbrukte eksisterende `ArticleLayout`/`ComingSoon` uendret, ingen ny CSS. Ingen breadcrumbs i original — standard migreringsavvik (Hjem → Kontakt). |
| `stott-arbeidet/index.html` | `/stott-arbeidet/` | `/stott-arbeidet` | **MIGRERT** (2026-08-15) | Ren stub, portert 1:1 (ingress + `ComingSoon`-boks). Gjenbrukte eksisterende `ArticleLayout`/`ComingSoon` uendret, ingen ny CSS. Ingen breadcrumbs i original — standard migreringsavvik (Hjem → Støtt arbeidet). |
| `folg-oss/index.html` | `/folg-oss/` | `/folg-oss` | **IKKE MIGRERT** | Ren stub. Alle 4 sosiale ikoner i alle footere peker hit. |

---

## 8. Spesialtilfeller — samlet oversikt

1. **~~Barn migrert før forelder-hub.~~**
   Rettet 2026-08-11/2026-08-12 — både `/temaer` (vs. `/temaer/fundament`) og
   `/temaer/kristenliv/bonn` (vs. `/temaer/kristenliv/bonn/troens-bonn`) er nå
   migrert. Ingen gjenstående tilfeller av denne typen i inventaret per nå.

2. **`temaer/evangeliet/artikler/omvendelse.html` er en foreldreløs side.**
   234 linjer reelt, ferdig innhold — men lenkes **ikke** fra
   `temaer/evangeliet/index.html` (som er en ren stub og ikke nevner den),
   ikke fra `temaer/fundament/index.html` (kortet "Omvendelse fra døde
   gjerninger" peker til `#`, ikke hit), og ikke fra noe annet sted i gammel
   HTML. Bruker også et eldre, samlet stilark (`css/style.css`) i stedet for
   det modulære CSS-settet resten av sonen bruker. Er heller ikke registrert
   i `site/lib/articles.ts`. Denne siden krever et bevisst valg om hvor den
   skal lenkes fra før den kan migreres meningsfullt.

3. **Header-navets "Veien til Jesus" hopper over indekssiden.**
   I gammel HTML pekte dette direkte til `veien-til-jesus/kom-til-kristus.html`
   (kun på forsiden — se punkt 7 for full kartlegging av dette avviket i
   originalen), mens footeren lenket til `veien-til-jesus/index.html`.
   `veien-til-jesus/kom-til-kristus.html` er nå migrert (2026-08-14), og den
   delte `Header.tsx`/`Hero.tsx` i `site/` peker nå direkte dit på alle sider
   (bevisst rettet, se rutetabellen). `veien-til-jesus/index.html` er
   fortsatt ikke migrert og nås i dag kun via delt `Footer.tsx`.

4. **`lib/articles.ts` har forhåndsregistrert metadata for 9 gjenværende
   ikke-migrerte rot-artikler** (av opprinnelig 11) — tittel, dato,
   beskrivelse og fremtidig URL, men med `migrated: false`. De vises i
   "Nyeste artikler"-tidslinjen uten klikkbar lenke. Dette er *ikke* det
   samme som at sidene er migrert — selve artikkelteksten/`page.tsx`
   mangler fortsatt for alle 9. Klassifisert som IKKE MIGRERT, ikke
   DELVIS MIGRERT, fordi kildekodens eget `migrated`-flagg konsekvent
   behandler dem som ikke-migrerte; ingen side i inventaret hadde et
   tilfelle som tydelig passet DELVIS MIGRERT-kategorien i dag.
   `er-evig-bevisst-pine-bibelsk`, `den-forste-arsaken`,
   `hvordan-lese-bibelen-med-forstaelse` og
   `paulus-og-evangeliet-om-naden` er nå migrert og har
   `migrated: true`.

5. **To ulike frittstående artikkel-mønstre finnes i gammel HTML:**
   - Innebygd `<style>` i `<head>`, eget `<script>` for scroll-animasjon,
     helt uavhengig av det delte CSS-systemet: `dap-i-vann.html` (migrert)
     og `evig-dom.html` (migrert 2026-08-13).
   - Delt CSS-system + én ekstra side-scoped fil i egen `css/`-mappe:
     `troens-bonn.html` (migrert, `css/troens-bonn.css`),
     `fundament/index.html` (migrert, `css/fundament.css`),
     `boker/index.html` (ikke migrert, `css/boker.css`),
     `studiegrupper/*` (ikke migrert, `css/studiegrupper.css`),
     `kristenliv/index.html` (ikke migrert, `css/kristenliv.css`),
     `ressurser/index.html` (ikke migrert, `css/ressurser.css`).

6. **`omvendelse.html` bruker en tredje, eldre stil-tilnærming**
   (`css/style.css` alene) — se punkt 2.

7. **Fire absolutte `/ressurser/...`-lenker peker til intet** i begge
   versjoner (se punkt 6) — forhåndsdokumentert i Next.js-koden som en
   eksisterende feil i originalen, ikke noe å finne opp en destinasjon for.

---

## 9. Totaloversikt

| Kategori | Antall |
|---|---|
| Sider i gammel statisk versjon (reelle ruter, ekskl. partials/maler) | **51** |
| — herav rene "Kommer snart"-stubs (ingen skrevet tekst) | 31 |
| — herav reelt, ferdig innhold | 20 |
| **MIGRERT** | **34** |
| **DELVIS MIGRERT** | **0** |
| **IKKE MIGRERT** | **17** |
| **Ekte PLACEHOLDER** (ikke `href="#"`) | **8** |
| Ikke-rutefiler utelatt fra tellingen (partials + maler) | 13 |
| **NEW THEME – CONTENT REQUIRED** (nye temaer, ikke fra gammel HTML) | **2** |

---

## 10. Neste steg

Videre migrering av eksisterende sider (punkt 2–7) avventer eksplisitt
godkjenning av prioritering, inkludert spesialtilfellene i punkt 8 (særlig
`omvendelse.html`s manglende inngang, og om `/temaer` og kategori-hub-sidene
skal migreres før eller etter sine barn). Innholdsskriving for de nye temaene
i punkt 11 er en egen, separat oppgave.

---

## 11. Nye temaer (ikke migrering av gammel HTML)

To temaer er opprettet på eksplisitt bestilling, uten forbilde i gammel HTML.
Dette er **strukturbygging**, ikke migrering — ingen gammel side å sammenligne
med, ingen fagtekst skrevet. All tekst i disse to rutene er tydelig merket
`TODO` i selve UI-en for å ikke kunne forveksles med ferdig redaksjonelt
innhold.

| Ny fil | Ny URL | Status | Merknad |
|---|---|---|---|
| `app/(site)/temaer/calvinisme/page.tsx` | `/temaer/calvinisme` | **NEW THEME – CONTENT REQUIRED** | Opprettet 2026-08-11. Bruker `ArticleLayout` + ny delt `ComingSoon`-komponent. Ingen fagtekst. |
| `app/(site)/temaer/islam/page.tsx` | `/temaer/islam` | **NEW THEME – CONTENT REQUIRED** | Opprettet 2026-08-11. Samme struktur som calvinisme. Ingen fagtekst. |

**Komponenter brukt** (begge sider, gjenbruk av eksisterende mønster fra
`temaer/kristenliv/bonn/troens-bonn/page.tsx`):
- `Breadcrumbs` (`Hjem › Temaer › [Tema]`)
- `ArticleLayout` (kategori-eyebrow + `<h1>` + subtitle — samme visuelle
  struktur som alle andre tema-/artikkelsider)
- Ny komponent `components/articles/ComingSoon.tsx` — 1:1-port av
  `css/utilities.css` sin delte `.coming-soon`-boks (samme boks som brukes
  på 30+ stub-sider i den gamle statiske versjonen), lagt til som CSS-klasse
  `.comingSoon` i `components/articles/article.module.css`. Gjenbrukbar for
  fremtidige stub-tema-sider når disse migreres (punkt 4).

**Bevisst utelatt i denne omgangen** (for å ikke blande denne oppgaven med
migrering av andre sider, og for å ikke skrive innhold på vegne av noen):
- Ingen `<h2>Dette temaet vil dekke</h2>`-punktliste (slik enkelte gamle
  stub-temaer har) — det ville vært å dikte opp faglig avgrensning.
- Ingen lenke fra `/temaer`, header eller footer til de nye sidene ennå —
  `/temaer`-hub-siden er selv ikke migrert (punkt 4), og det er ikke bedt om
  å endre delte navigasjonskomponenter i denne oppgaven.
- Ingen oppføring i `site/lib/articles.ts` — det er artikkelregisteret for
  "Nyeste artikler"-tidslinjen, ikke for tema-huber.

**Build:** `npm run build` kjørt etter opprettelse — begge ruter
prerendres statisk uten feil (verifisert sammen med de 5 eksisterende
rutene, 7 ruter totalt, se punkt 1).
