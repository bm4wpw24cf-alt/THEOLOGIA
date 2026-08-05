/**
 * article-generator.js
 * ------------------------------------------------------------------
 * Hovedmotor. Leser templates/artikkel-mal.html som ren tekst,
 * fyller inn placeholders, og gjentar de blokkene malen har markert
 * med HTML-kommentarer:
 *
 *   <!-- BLOCK:TOC_ITEM:START -->       ... <!-- BLOCK:TOC_ITEM:END -->
 *   <!-- BLOCK:SECTION:START -->        ... <!-- BLOCK:SECTION:END -->
 *   <!-- BLOCK:SECTION_BODY:START -->   ... <!-- BLOCK:SECTION_BODY:END -->
 *   <!-- BLOCK:RELATED_SECTION:START --> ... <!-- BLOCK:RELATED_SECTION:END -->
 *   <!-- BLOCK:RELATED_CARD:START -->   ... <!-- BLOCK:RELATED_CARD:END -->
 *
 * Disse markørene er de ENESTE strukturelle tilføyelsene som er gjort
 * i selve malen – ingen klasse, farge, skrift eller layout er endret.
 * templates/artikkel-mal.html er fortsatt eneste kilde til hvordan en
 * THEOLOGIA-artikkel skal se ut.
 *
 * Krever felt fra data/articles.json og validerer dem mot de påkrevde
 * feltene i data/schema.json – ingen hardkodet feltliste her.
 *
 * ESCAPING-PRINSIPP (viktig ved videre vedlikehold):
 * Korte metadata-felt (tittel, forfatter, kategori, dato, bilde-URL-er,
 * overskrifter) betraktes som ren tekst og HTML-escapes alltid før de
 * settes inn – de skal aldri kunne inneholde markup.
 * Lange brødtekst-felt (introduction, section.content, subsection.content,
 * infoBox.text) betraktes som redaktør-skrevet riktekst og settes inn
 * RÅTT, slik at forfatteren kan skrive <strong>/<a>/<em> inni avsnitt.
 * Denne grensen er bevisst og skal ikke viskes ut ved senere endringer.
 * ------------------------------------------------------------------
 */

'use strict';

const fs = require('fs');
const path = require('path');

const {
  escapeHTML,
  slugify,
  renderScripture,
  renderQuote,
  renderInfoBox,
  renderImage,
  renderSubsection
} = require('./components');

const { generateSEO } = require('./seo');
const { findRelatedArticles } = require('./related-articles');

const PROJECT_ROOT = path.join(__dirname, '..');
const TEMPLATE_PATH = path.join(PROJECT_ROOT, 'templates', 'artikkel-mal.html');
const SCHEMA_PATH = path.join(PROJECT_ROOT, 'data', 'schema.json');

const schema = JSON.parse(fs.readFileSync(SCHEMA_PATH, 'utf8'));
const REQUIRED_FIELDS = schema.required || [];

/** Erstatter {{FELT}}-plassholdere i en tekststreng med verdier fra et objekt. */
function fillPlaceholders(str, data) {
  return str.replace(/\{\{([A-Z0-9_]+)\}\}/g, (match, key) => {
    return Object.prototype.hasOwnProperty.call(data, key) && data[key] !== undefined
      ? String(data[key])
      : match; // ukjent felt: la plassholderen stå synlig fremfor å late som den er fylt ut
  });
}

/** Henter én blokk markert med BLOCK:NAVN:START/END og fjerner den fra resten av malen. */
function extractBlock(html, name) {
  const startTag = `<!-- BLOCK:${name}:START -->`;
  const endTag = `<!-- BLOCK:${name}:END -->`;
  const start = html.indexOf(startTag);
  const end = html.indexOf(endTag);

  if (start === -1 || end === -1) {
    throw new Error(
      `Fant ikke blokkmarkør BLOCK:${name} i malen. Er templates/artikkel-mal.html endret?`
    );
  }

  return {
    before: html.slice(0, start),
    block: html.slice(start + startTag.length, end),
    after: html.slice(end + endTag.length)
  };
}

/** Kloner en blokk N ganger – én gang per element i items, fylt med renderFn(item). */
function repeatBlock(html, name, items, renderFn) {
  const { before, block, after } = extractBlock(html, name);
  const rendered = items.map((item) => fillPlaceholders(block, renderFn(item))).join('\n');
  return before + rendered + after;
}

/**
 * Behandler en hel seksjon som valgfri: hvis items er tom, fjernes hele
 * blokken (inkl. overskrift/wrapper) – ikke bare listen inni. En
 * overskrift som "Relaterte artikler" over et tomt grid er ikke noe
 * en redaktør noensinne ville publisert manuelt, så generatoren skal
 * heller ikke produsere det.
 */
function renderOptionalSection(html, sectionName, itemBlockName, items, renderFn) {
  const { before, block, after } = extractBlock(html, sectionName);

  if (items.length === 0) {
    return before + after;
  }

  const filled = repeatBlock(block, itemBlockName, items, renderFn);
  return before + filled + after;
}

/** Validerer artikkeldata mot de påkrevde feltene definert i data/schema.json. */
function validateArticle(article) {
  const missing = REQUIRED_FIELDS.filter((field) => {
    const value = article[field];
    return value === undefined || value === null || value === '';
  });
  if (missing.length > 0) {
    throw new Error(`Artikkeldata mangler påkrevde felt (jf. data/schema.json): ${missing.join(', ')}`);
  }
  if (!Array.isArray(article.sections) || article.sections.length === 0) {
    throw new Error('Artikkelen må ha minst én seksjon i "sections".');
  }
}

/**
 * Lager en unik, HTML-sikker anker-id for en seksjon. Kjører alltid
 * gjennom slugify() – også når forfatteren har oppgitt en egen id i
 * dataen – slik at id alltid er trygg å bruke i både id="" og href="#...".
 * Kolliderer to seksjoner (samme overskrift, eller egne id-er som er
 * like), legges et løpenummer til (-2, -3, ...) slik at HTML-en aldri
 * får dupliserte id-attributter.
 */
function createIdGenerator() {
  const used = new Map();

  return function nextId(section) {
    const base = slugify(section.id || section.heading) || 'seksjon';
    const count = used.get(base) || 0;
    used.set(base, count + 1);
    return count === 0 ? base : `${base}-${count + 1}`;
  };
}

/** Bygger den frie HTML-en som settes inn i en seksjons SECTION_BODY-punkt. */
function renderSectionBody(section) {
  const parts = [];

  (section.scriptures || []).forEach((s) => parts.push(renderScripture(s)));
  (section.quotes || []).forEach((q) => parts.push(renderQuote(q)));
  (section.infoBoxes || []).forEach((b) => parts.push(renderInfoBox(b)));
  (section.images || []).forEach((img) => parts.push(renderImage(img)));
  (section.subsections || []).forEach((sub) => parts.push(renderSubsection(sub)));

  return parts.join('\n\n');
}

/**
 * Bygger innholdsfortegnelsen. Tar imot de samme unike id-ene som
 * hovedseksjonene bruker (via idFor), slik at #anker-lenker alltid
 * treffer riktig seksjon selv om overskrifter gjentas i artikkelen.
 */
function renderTOC(html, sections, idFor) {
  return repeatBlock(html, 'TOC_ITEM', sections, (section) => ({
    SECTION_ID: idFor(section),
    SECTION_HEADING: escapeHTML(section.heading)
  }));
}

function renderSections(html, sections, idFor) {
  const { before, block, after } = extractBlock(html, 'SECTION');

  const rendered = sections
    .map((section) => {
      let sectionHTML = fillPlaceholders(block, {
        SECTION_ID: idFor(section),
        SECTION_HEADING: escapeHTML(section.heading),
        SECTION_CONTENT: section.content // riktekst – se escaping-prinsipp øverst i filen
      });

      sectionHTML = sectionHTML.replace(
        '<!-- BLOCK:SECTION_BODY:START --><!-- BLOCK:SECTION_BODY:END -->',
        renderSectionBody(section)
      );

      return sectionHTML;
    })
    .join('\n\n');

  return before + rendered + after;
}

/**
 * Genererer ferdig HTML for én artikkel.
 * @param {object} article - se data/schema.json for full struktur
 * @param {object[]} allArticles - hele data/articles.json, for "relaterte artikler"
 * @returns {string} ferdig HTML-dokument
 */
function generateArticleHTML(article, allArticles = []) {
  validateArticle(article);

  let html = fs.readFileSync(TEMPLATE_PATH, 'utf8');

  // Én id-generator per kall, delt mellom TOC og seksjoner, slik at
  // begge bruker nøyaktig samme (unike) id-er for samme seksjon.
  const idFor = createIdGenerator();
  const idBySection = new Map(article.sections.map((s) => [s, idFor(s)]));
  const getId = (section) => idBySection.get(section);

  // 1. Innholdsfortegnelse – én TOC_ITEM per seksjon
  html = renderTOC(html, article.sections, getId);

  // 2. Hovedseksjoner (med nøstede bibelvers/sitater/infobokser/bilder/underseksjoner)
  html = renderSections(html, article.sections, getId);

  // 3. Relaterte artikler – kategori-/undertema-/tag-basert matching
  //    (related-articles.js). Hele seksjonen utelates helt hvis ingen
  //    reelle treff finnes.
  const related = findRelatedArticles(article, allArticles, 3);
  html = renderOptionalSection(html, 'RELATED_SECTION', 'RELATED_CARD', related, (item) => ({
    RELATED_TITLE: escapeHTML(item.title),
    RELATED_DESCRIPTION: escapeHTML(item.description),
    RELATED_URL: escapeHTML(item.url),
    RELATED_IMAGE: escapeHTML(item.image)
  }));

  // 4. SEO (title/description/keywords/canonical/OG/lesetid – seo.js)
  const seo = generateSEO(article);

  // 5. Alle øvrige, enkeltstående felter (hero, breadcrumb, footer m.m.)
  //    Korte metadata-felt escapes; introduction/asideContent/authorBio
  //    er riktekst og settes inn rått (se escaping-prinsipp øverst i filen).
  html = fillPlaceholders(html, {
    ARTICLE_TITLE: escapeHTML(article.title),
    ARTICLE_SUBTITLE: escapeHTML(article.subtitle),
    ARTICLE_LEDE: article.introduction,
    CATEGORY: escapeHTML(article.category),
    CATEGORY_URL: escapeHTML(article.categoryUrl || `/${slugify(article.category)}/`),
    AUTHOR: escapeHTML(article.author),
    AUTHOR_PHOTO: escapeHTML(article.authorPhoto || '/images/forfattere/standard.jpg'),
    AUTHOR_BIO: article.authorBio || '',
    DATE: escapeHTML(article.date),
    UPDATED: escapeHTML(article.updated || article.date),
    READING_TIME: escapeHTML(seo.readingTime),
    FEATURE_IMAGE: escapeHTML(article.heroImage),
    ASIDE_TITLE: escapeHTML(article.asideTitle || 'Om denne artikkelen'),
    ASIDE_CONTENT: article.asideContent || '',
    YEAR: escapeHTML(String(new Date(article.date).getFullYear() || new Date().getFullYear()))
  });

  // SEO-metadata i <head>: title/description dekkes allerede av
  // ARTICLE_TITLE/ARTICLE_SUBTITLE i malen. Keywords, canonical,
  // Open Graph og Twitter Card mangler der og settes inn eksplisitt.
  // (JSON-LD/structured data er bevisst ikke lagt til – se rapport.)
  const canonicalUrl = escapeHTML(seo.canonicalUrl);
  const seoTags = [
    `<link rel="canonical" href="${canonicalUrl}">`,
    `<meta name="keywords" content="${escapeHTML(seo.keywords)}">`,
    `<meta property="og:url" content="${canonicalUrl}">`,
    `<meta property="og:site_name" content="${escapeHTML(seo.og.siteName)}">`,
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${escapeHTML(seo.og.title)}">`,
    `<meta name="twitter:description" content="${escapeHTML(seo.metaDescription)}">`,
    `<meta name="twitter:image" content="${escapeHTML(seo.og.image)}">`
  ].join('\n');

  html = html.replace('</head>', `${seoTags}\n</head>`);

  return html;
}

/** Genererer og skriver artikkelen til articles/<slug>.html. */
function writeArticleFile(article, allArticles = [], outputDir) {
  const html = generateArticleHTML(article, allArticles);
  const dir = outputDir || path.join(PROJECT_ROOT, 'articles');
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, `${article.slug || slugify(article.title)}.html`);
  fs.writeFileSync(filePath, html, 'utf8');
  return filePath;
}

module.exports = {
  generateArticleHTML,
  writeArticleFile,
  validateArticle
};