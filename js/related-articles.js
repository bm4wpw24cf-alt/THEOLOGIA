/**
 * related-articles.js
 * ------------------------------------------------------------------
 * Rangerer relaterte artikler i tre trinn, i denne prioritetsrekke-
 * følgen: kategori, deretter undertema (subcategory), deretter
 * overlappende tags. Ekskluderer artikkelen selv. Ingen maskinlæring
 * eller skjult vekting – redaktøren skal alltid kunne forklare
 * hvorfor en artikkel ble foreslått.
 * ------------------------------------------------------------------
 */

'use strict';

const CATEGORY_WEIGHT = 10;
const SUBCATEGORY_WEIGHT = 5;
const TAG_WEIGHT = 1;

function scoreMatch(article, candidate) {
  if (candidate.id === article.id) return -1; // ekskluder seg selv

  let score = 0;

  if (candidate.category === article.category) {
    score += CATEGORY_WEIGHT;
  }

  if (article.subcategory && candidate.subcategory === article.subcategory) {
    score += SUBCATEGORY_WEIGHT;
  }

  const articleTags = new Set((article.tags || []).map((t) => t.toLowerCase()));
  (candidate.tags || []).forEach((tag) => {
    if (articleTags.has(tag.toLowerCase())) score += TAG_WEIGHT;
  });

  return score;
}

/**
 * @param {object} article - artikkelen vi finner forslag for
 * @param {object[]} allArticles - hele data/articles.json
 * @param {number} count - antall forslag (standard 3, matcher malen)
 * @returns {object[]} liste klar for RELATED_CARD-blokken. Tom liste
 *   hvis ingen kandidat scorer over 0 – ingen artikkel skal foreslås
 *   kun fordi den tilfeldigvis står sist i en sortert, men irrelevant, liste.
 */
function findRelatedArticles(article, allArticles, count = 3) {
  return allArticles
    .map((candidate) => ({ candidate, score: scoreMatch(article, candidate) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((entry) => ({
      title: entry.candidate.title,
      description: entry.candidate.subtitle || entry.candidate.introduction || '',
      url: entry.candidate.url,
      image: entry.candidate.heroImage
    }));
}

module.exports = { findRelatedArticles };