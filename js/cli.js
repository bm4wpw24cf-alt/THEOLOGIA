#!/usr/bin/env node
/**
 * cli.js
 * ------------------------------------------------------------------
 * Kommandolinje-inngang.
 *
 * Bruk:
 *   node js/cli.js <artikkel-id>
 *   node js/cli.js --all
 *
 * Leser data/articles.json, finner artikkelen(e) med gitt id, og
 * skriver ferdig HTML til articles/<slug>.html.
 * ------------------------------------------------------------------
 */

'use strict';

const fs = require('fs');
const path = require('path');

const { writeArticleFile } = require('./article-generator');

const DATA_PATH = path.join(__dirname, '..', 'data', 'articles.json');

function loadArticles() {
  const raw = fs.readFileSync(DATA_PATH, 'utf8');
  return JSON.parse(raw);
}

function main() {
  const arg = process.argv[2];

  if (!arg) {
    console.error('Bruk: node js/cli.js <artikkel-id>  eller  --all');
    process.exit(1);
  }

  const allArticles = loadArticles();

  const targets = arg === '--all'
    ? allArticles
    : allArticles.filter((a) => a.id === arg);

  if (targets.length === 0) {
    console.error(`Fant ingen artikkel med id "${arg}" i ${DATA_PATH}`);
    process.exit(1);
  }

  targets.forEach((article) => {
    try {
      const outputPath = writeArticleFile(article, allArticles);
      console.log(`✓ Generert: ${outputPath}`);
    } catch (err) {
      console.error(`✗ Feil ved generering av "${article.id}": ${err.message}`);
    }
  });
}

main();