# THEOLOGIA — artikkel-generator

Genererer nye artikkelsider fra `templates/artikkel-mal.html`. Malen er
eneste kilde til design — generatoren endrer aldri farger, typografi,
klasser eller layout. Den fyller kun inn data og gjentar de markerte
blokkene (seksjoner, innholdsfortegnelse-punkter, relaterte artikler).

## Legg til en ny artikkel

1. Åpne `data/articles.json`.
2. Kopier ett artikkel-objekt, gi det en ny, unik `id`.
3. Fyll ut feltene — se `data/schema.json` for full struktur og hvilke
   felt som er påkrevd.
4. Kjør fra prosjektroten:

```
node js/cli.js <artikkel-id>
```

Filen havner i `articles/<slug>.html`, ferdig med samme design som
alle andre THEOLOGIA-artikler.

Generer alle artikler i `data/articles.json` på én gang:

```
node js/cli.js --all
```

## Struktur

```
templates/
    artikkel-mal.html      ← eneste designkilde
js/
    article-generator.js   ← hovedmotor
    components.js          ← én ren funksjon per komponent
    seo.js                 ← title/description/keywords/canonical/OG/lesetid
    related-articles.js    ← kategori-/undertema-/tag-basert matching
    cli.js                 ← kommandolinje-inngang
data/
    schema.json            ← full datastruktur + påkrevde felt
    articles.json          ← alle artikler (kildedata)
articles/
    (genererte HTML-filer)
```

## Malens blokkmarkører

`templates/artikkel-mal.html` har fem steder markert med usynlige
HTML-kommentarer som generatoren kloner eller fjerner — dette er den
eneste strukturelle endringen som er gjort i malen, og påvirker ikke
visuelt uttrykk:

```html
<!-- BLOCK:TOC_ITEM:START -->        ... <!-- BLOCK:TOC_ITEM:END -->
<!-- BLOCK:SECTION:START -->         ... <!-- BLOCK:SECTION:END -->
<!-- BLOCK:SECTION_BODY:START -->    ... <!-- BLOCK:SECTION_BODY:END -->
<!-- BLOCK:RELATED_SECTION:START --> ... <!-- BLOCK:RELATED_SECTION:END -->
<!-- BLOCK:RELATED_CARD:START -->    ... <!-- BLOCK:RELATED_CARD:END -->
```

`RELATED_SECTION` er valgfri i output: finnes ingen relaterte artikler,
fjernes hele seksjonen (inkl. overskrift) — ikke bare et tomt grid.

## Relaterte artikler

`related-articles.js` rangerer i tre trinn: kategori (høyest vekt),
deretter undertema (`subcategory`), deretter overlappende `tags`.
Artikler med score 0 foreslås aldri.

## Sikkerhet

Alle korte metadata-felt (tittel, forfatter, kategori, bilde-URL-er,
overskrifter) HTML-escapes alltid før innsetting. Lange brødtekst-felt
(`introduction`, `section.content`, `infoBox.text` osv.) settes inn
rått, slik at forfatteren kan skrive `<strong>`/`<a>`/`<em>` i løpende
tekst — dette skillet er bevisst, se kommentaren øverst i
`js/article-generator.js`.

## Fremtidig bruk med Next.js/React/TypeScript

`js/components.js` sine funksjoner tar rene JS-objekter og returnerer
HTML-strenger. De kan porteres til React-komponenter (samme props, JSX
i stedet for streng) uten å endre datastrukturen i `data/schema.json`
— kun rendring-laget byttes ut.