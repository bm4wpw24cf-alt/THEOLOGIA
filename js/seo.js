/**
 * seo.js
 * ------------------------------------------------------------------
 * Genererer page title, meta description, keywords, canonical,
 * Open Graph og estimert lesetid ut fra artikkeldata. Ren funksjon,
 * ingen avhengigheter. Dikter aldri opp innhold – alt er utledet fra
 * felt forfatteren allerede har fylt ut i data/articles.json.
 * ------------------------------------------------------------------
 */

'use strict';

const SITE_NAME = 'THEOLOGIA';
const WORDS_PER_MINUTE = 200;

/** Klipper en tekst til maks lengde ved nærmeste ordgrense. */
function truncate(text, maxLength) {
  if (!text || text.length <= maxLength) return text || '';
  const cut = text.slice(0, maxLength);
  return cut.slice(0, cut.lastIndexOf(' ')) + '…';
}

/**
 * Lager 5–8 nøkkelord basert på kategori, undertema og overskrifter
 * i artikkelen. Enkel, forutsigbar heuristikk – ingen KI-generering,
 * kun uttrekk fra data forfatteren allerede har skrevet.
 */
function buildKeywords(article) {
  const words = new Set();

  words.add(article.category);
  if (article.subcategory) words.add(article.subcategory);
  words.add('THEOLOGIA');
  words.add('bibelsk teologi');

  (article.sections || []).forEach((section) => {
    if (section.heading) {
      section.heading
        .split(/\s+/)
        .filter((w) => w.length > 3)
        .forEach((w) => words.add(w.replace(/[.,:;!?]/g, '')));
    }
  });

  return Array.from(words).filter(Boolean).slice(0, 8);
}

/**
 * Estimerer lesetid fra faktisk ordantall i artikkelens seksjoner
 * og underseksjoner (~200 ord/min). Brukes kun som fallback når
 * forfatteren ikke selv har oppgitt readingTime i artikkeldataen.
 */
function estimateReadingTime(article) {
  const text = (article.sections || [])
    .map((s) => {
      const subsectionText = (s.subsections || []).map((sub) => sub.content || '').join(' ');
      return `${s.content || ''} ${subsectionText}`;
    })
    .join(' ')
    .trim();

  const wordCount = text ? text.split(/\s+/).length : 0;
  const minutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
  return `${minutes} min lesetid`;
}

/**
 * Bygger komplett SEO-datasett for én artikkel.
 * article: se schema i data/schema.json
 */
function generateSEO(article) {
  const title = `${article.title} | ${SITE_NAME}`;
  const description = truncate(
    article.metaDescription || article.introduction || article.subtitle || '',
    160
  );
  const keywords = buildKeywords(article);
  const canonicalUrl = article.url || '';
  const readingTime = article.readingTime || estimateReadingTime(article);

  return {
    pageTitle: title,
    metaDescription: description,
    keywords: keywords.join(', '),
    canonicalUrl,
    readingTime,
    og: {
      type: 'article',
      title: article.title,
      description,
      image: article.heroImage,
      url: canonicalUrl,
      siteName: SITE_NAME,
      author: article.author,
      publishedTime: article.date,
      modifiedTime: article.updated || article.date
    }
  };
}

module.exports = { generateSEO, truncate, buildKeywords, estimateReadingTime };