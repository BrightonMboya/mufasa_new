#!/usr/bin/env node
/* Translation catalogue tool.

   Collects every English string the site displays:
     1. string values in src/data/site.ts (minus URLs, slugs, prices, ids …)
     2. literal t('…') calls in src/components, src/pages and src/layouts
   and compares them with src/i18n/locales/{lang}.json.

   Usage:
     node scripts/i18n.mjs                 report missing / stale counts
     node scripts/i18n.mjs --write-missing write src/i18n/missing/{lang}.json
                                           (English → "" stubs to translate)
     node scripts/i18n.mjs --prune         drop stale keys from the locale files */

import { build } from 'esbuild';
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const LANGS = ['it', 'fr', 'de', 'es'];

/* Keys whose values are never shown as prose. */
const SKIP_KEYS = new Set([
  'slug', 'href', 'image', 'images', 'src', 'bandImage', 'gallery', 'logo', 'endpoint',
  'web3formsKey', 'phone', 'email', 'id', 'key', 'position', 'icon', 'url',
  'packageGroup', 'priceFrom', 'coords', 'platform', 'kind', 'layout',
]);
/* …but 'name' is prose inside these objects. Checked by path. */
const PROSE_NAME_PARENTS = [];

function looksNonProse(s) {
  const v = s.trim();
  if (!v) return true;
  if (/^(https?:|mailto:|tel:|\/|#|\.\/)/.test(v)) return true;
  if (/^[\d\s$€£.,%+\-–—/:×x]+$/i.test(v)) return true; // numbers, prices, ranges
  if (/^[0-9a-f-]{36}$/.test(v)) return true; // uuid
  if (/^[a-z0-9]+(-[a-z0-9]+)+$/.test(v)) return true; // slug-like
  if (/\.(jpe?g|png|webp|svg|avif|gif|mp4)(\?|$)/i.test(v)) return true;
  if (/^[A-Z]{2,4}$/.test(v)) return true; // codes like JRO
  if (/^[a-z]+$/.test(v)) return true; // identifiers like 'bigfive', 'multi'
  return false;
}

async function dataStrings() {
  const found = new Set();
  for (const file of ['src/data/site.ts', 'src/data/journey-cards.ts']) {
    for (const s of await moduleStrings(join(root, file))) found.add(s);
  }
  return found;
}

async function moduleStrings(entry) {
  const out = await build({
    entryPoints: [entry],
    bundle: true,
    format: 'esm',
    platform: 'node',
    write: false,
    logLevel: 'silent',
  });
  const code = out.outputFiles[0].text;
  const mod = await import('data:text/javascript;base64,' + Buffer.from(code).toString('base64'));
  const found = new Set();
  const walk = (v, key) => {
    if (typeof v === 'string') {
      if (key && SKIP_KEYS.has(key)) return;
      if (!looksNonProse(v)) found.add(v);
    } else if (Array.isArray(v)) {
      if (key && SKIP_KEYS.has(key)) return;
      v.forEach((x) => walk(x, key === 'images' || key === 'gallery' ? key : undefined));
    } else if (v && typeof v === 'object') {
      for (const [k, val] of Object.entries(v)) walk(val, k);
    }
  };
  for (const [name, value] of Object.entries(mod)) {
    if (name === 'forms') continue;
    if (typeof value === 'function') continue;
    walk(value);
  }
  return found;
}

function sourceFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) files.push(...sourceFiles(p));
    else if (/\.(astro|ts|tsx|js|mjs)$/.test(entry)) files.push(p);
  }
  return files;
}

/* Matches t('…'), t("…"), t(`…`) — the first argument must be a literal. */
const T_CALL = /(?<![\w$.])t\(\s*(['"`])((?:\\[\s\S]|(?!\1)[^\\])*)\1/g;

function callStrings() {
  const found = new Map();
  for (const dir of ['src/components', 'src/pages', 'src/layouts']) {
    for (const file of sourceFiles(join(root, dir))) {
      const text = readFileSync(file, 'utf8');
      for (const m of text.matchAll(T_CALL)) {
        const [, q, body] = m;
        if (q === '`' && body.includes('${')) continue; // dynamic — not a catalogue key
        let value;
        try {
          value = q === '`' ? body.replace(/\\`/g, '`') : JSON.parse('"' + body.replace(/\\'/g, "'").replace(/(?<!\\)"/g, '\\"') + '"');
        } catch {
          value = body;
        }
        if (!found.has(value)) found.set(value, file.replace(root + '/', ''));
      }
    }
  }
  return found;
}

const args = new Set(process.argv.slice(2));
const catalog = new Set([...(await dataStrings()), ...callStrings().keys()]);
const sorted = [...catalog].sort((a, b) => a.localeCompare(b));
writeFileSync(join(root, 'src/i18n/catalog.json'), JSON.stringify(sorted, null, 2) + '\n');
console.log(`catalogue: ${sorted.length} strings (src/i18n/catalog.json)`);

for (const lang of LANGS) {
  const file = join(root, `src/i18n/locales/${lang}.json`);
  const dict = JSON.parse(readFileSync(file, 'utf8'));
  const missing = sorted.filter((s) => !(s in dict) || !String(dict[s]).trim());
  const stale = Object.keys(dict).filter((k) => !catalog.has(k));
  console.log(`${lang}: ${sorted.length - missing.length} translated, ${missing.length} missing, ${stale.length} stale`);
  if (args.has('--write-missing')) {
    mkdirSync(join(root, 'src/i18n/missing'), { recursive: true });
    writeFileSync(
      join(root, `src/i18n/missing/${lang}.json`),
      JSON.stringify(Object.fromEntries(missing.map((s) => [s, ''])), null, 2) + '\n',
    );
  }
  if (args.has('--prune') && stale.length) {
    for (const k of stale) delete dict[k];
    const ordered = Object.fromEntries(Object.keys(dict).sort((a, b) => a.localeCompare(b)).map((k) => [k, dict[k]]));
    writeFileSync(file, JSON.stringify(ordered, null, 2) + '\n');
  }
}
