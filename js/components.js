/**
 * components.js
 * ------------------------------------------------------------------
 * Rene funksjoner som gjengir hver artikkelkomponent som en HTML-
 * streng. Klassene brukt her (.scripture-box, .quote-box, .info-box
 * osv.) er hentet ordrett fra templates/artikkel-mal.html sin
 * innebygde CSS og skal ALDRI endres her uten å endre malen
 * tilsvarende – disse funksjonene er "kontrakten" mot designet.
 *
 * Alle funksjoner returnerer ren HTML (streng). Ingen avhengigheter,
 * ingen DOM. Kan derfor senere gjenbrukes fra en React/Next.js-
 * komponent ved å bytte returtype fra streng til JSX uten å endre
 * selve datamodellen.
 * ------------------------------------------------------------------
 */

'use strict';

/** Enkel HTML-escaping for tekst som settes inn i attributter/innhold. */
function escapeHTML(value) {
  if (value === undefined || value === null) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Lager en URL-vennlig id fra en overskrift, brukt til seksjons-ankere. */
function slugify(text) {
  return String(text)
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // fjern diakritiske tegn
    .replace(/[æå]/g, 'a')
    .replace(/ø/g, 'o')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Bibelvers-komponent → .scripture-box
 * data: { reference, text, translation }
 */
function renderScripture(data) {
  const translation = data.translation ? ` (${escapeHTML(data.translation)})` : '';
  return [
    '<div class="scripture-box">',
    `  <p class="bible-text">${escapeHTML(data.text)}</p>`,
    `  <p class="bible-reference">${escapeHTML(data.reference)}${translation}</p>`,
    '</div>'
  ].join('\n');
}

/**
 * Sitat-komponent → .quote-box
 * data: { quote, author, source }
 */
function renderQuote(data) {
  const source = [data.author, data.source].filter(Boolean).map(escapeHTML).join(', ');
  return [
    '<div class="quote-box">',
    `  <blockquote>${escapeHTML(data.quote)}</blockquote>`,
    source ? `  <cite>${source}</cite>` : '',
    '</div>'
  ].filter(Boolean).join('\n');
}

/**
 * Informasjonsboks → .info-box / .important-box / .warning-box / .cross-reference-box
 * data: { type: "info"|"important"|"warning"|"cross-reference", title, text }
 */
const INFO_BOX_ICONS = {
  info: 'i',
  important: '!',
  warning: '!',
  'cross-reference': '→'
};

function renderInfoBox(data) {
  const type = data.type || 'info';
  const className = type === 'cross-reference' ? 'cross-reference-box' : `${type}-box`;
  const icon = INFO_BOX_ICONS[type] || 'i';
  return [
    `<div class="${className}">`,
    `  <span class="box-icon" aria-hidden="true">${icon}</span>`,
    '  <div>',
    `    <span class="box-title">${escapeHTML(data.title)}</span>`,
    `    ${data.text}`,
    '  </div>',
    '</div>'
  ].join('\n');
}

/**
 * Bilde/figur → .article-figure
 * data: { image, alt, caption }
 */
function renderImage(data) {
  return [
    '<figure class="article-figure">',
    `  <img src="${escapeHTML(data.image)}" alt="${escapeHTML(data.alt)}">`,
    data.caption ? `  <figcaption>${escapeHTML(data.caption)}</figcaption>` : '',
    '</figure>'
  ].filter(Boolean).join('\n');
}

/**
 * Underseksjon (H3 + avsnitt) inni en hovedseksjon.
 * data: { heading, content }
 */
function renderSubsection(data) {
  return [
    `<h3>${escapeHTML(data.heading)}</h3>`,
    `<p>${data.content}</p>`
  ].join('\n');
}

module.exports = {
  escapeHTML,
  slugify,
  renderScripture,
  renderQuote,
  renderInfoBox,
  renderImage,
  renderSubsection
};