/* Site translations.

   English is the source language and lives at the root (/journeys/...).
   Every other language gets a path prefix (/fr/journeys/...), rendered from the
   very same page files via the thin wrappers in src/pages/[lang]/.

   Dictionaries are keyed by the English text itself, gettext-style:
     t('Start Planning')        → 'Inizia a pianificare'
     t(journey.title)           → the translated title, if there is one
   Anything without a translation falls back to English, so an untranslated
   string never breaks a page — it just shows in English until someone adds it.
   `npm run i18n:check` lists every string still missing per language. */

import it from './locales/it.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import es from './locales/es.json';

export const DEFAULT_LANG = 'en' as const;
export const LANGS = ['en', 'it', 'fr', 'de', 'es'] as const;
export type Lang = (typeof LANGS)[number];
/** Languages that get a /{lang}/ prefix. */
export const PREFIXED_LANGS = LANGS.filter((l) => l !== DEFAULT_LANG) as Exclude<Lang, 'en'>[];

export const LANG_NAMES: Record<Lang, string> = {
  en: 'English',
  it: 'Italiano',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
};

/** English names, for anything the team in Arusha reads (enquiry emails). */
export const LANG_NAMES_EN: Record<Lang, string> = {
  en: 'English',
  it: 'Italian',
  fr: 'French',
  de: 'German',
  es: 'Spanish',
};

/** BCP 47 tags for <html lang>, hreflang and Intl formatting. */
export const LANG_TAGS: Record<Lang, string> = {
  en: 'en',
  it: 'it',
  fr: 'fr',
  de: 'de',
  es: 'es',
};

const DICTIONARIES: Record<Lang, Record<string, string>> = { en: {}, it, fr, de, es };

/* Sections whose body copy is English-only for now (articles and legal text).
   They still render under every prefix so the header and footer stay in the
   reader's language, but they point search engines at the English original. */
const ENGLISH_ONLY = [/^\/blog\/.+/, /^\/(contact|our-booking-process|our-vehicle|privacy-policy|refund-policy|terms-conditions|tipping-guideline)\/?$/];

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as readonly string[]).includes(value);
}

/** The language a URL is in, read from its first path segment. */
export function langFromUrl(url: URL): Lang {
  const first = url.pathname.split('/')[1];
  return isLang(first) ? first : DEFAULT_LANG;
}

/** The pathname with any language prefix removed: /fr/about → /about. */
export function stripLang(pathname: string): string {
  const parts = pathname.split('/');
  if (isLang(parts[1]) && parts[1] !== DEFAULT_LANG) {
    const rest = '/' + parts.slice(2).join('/');
    return rest === '/' ? '/' : rest.replace(/\/$/, '') || '/';
  }
  return pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
}

/** Prefix an internal link for a language. External links, assets
    (anything with a file extension), mailto/tel and pure hashes pass through. */
export function localizePath(href: string, lang: Lang): string {
  if (lang === DEFAULT_LANG) return href;
  if (!href.startsWith('/') || href.startsWith('//')) return href;
  const [path, ...hashParts] = href.split('#');
  const [pathname, query] = path.split('?');
  if (/\.[a-z0-9]{2,5}$/i.test(pathname)) return href;
  if (pathname.split('/')[1] === lang) return href;
  const localized = pathname === '/' ? `/${lang}` : `/${lang}${pathname}`;
  return localized + (query !== undefined ? `?${query}` : '') + (hashParts.length ? `#${hashParts.join('#')}` : '');
}

/** True when this page's body copy has been translated. */
export function isTranslatedPath(pathname: string): boolean {
  const base = stripLang(pathname);
  return !ENGLISH_ONLY.some((re) => re.test(base));
}

export type Vars = Record<string, string | number>;

function interpolate(text: string, vars?: Vars): string {
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
}

/** Translate one English string. Placeholders like {n} are filled from vars. */
export function translate(lang: Lang, text: string, vars?: Vars): string {
  if (text == null) return text;
  const hit = DICTIONARIES[lang][text];
  return interpolate(hit && hit.trim() ? hit : text, vars);
}

/** Deep-translate a data object (from src/data/site.ts) for display.
    Every string leaf that has a dictionary entry is swapped; everything else —
    slugs, URLs, prices, numbers — comes back untouched. Use the result only
    for rendering: keep comparisons and filter logic on the English original. */
export function localize<T>(value: T, lang: Lang): T {
  if (lang === DEFAULT_LANG) return value;
  const walk = (v: unknown): unknown => {
    if (typeof v === 'string') return translate(lang, v);
    if (Array.isArray(v)) return v.map(walk);
    if (v && typeof v === 'object' && Object.getPrototypeOf(v) === Object.prototype) {
      const out: Record<string, unknown> = {};
      for (const [k, val] of Object.entries(v)) out[k] = walk(val);
      return out;
    }
    return v;
  };
  return walk(value) as T;
}

/** Everything a component needs, from one call:
      const { lang, t, l, path } = useI18n(Astro);
    t(text, vars?)  translate a string
    l(data)         deep-translate a data object for display
    path(href)      prefix an internal link with the current language */
export function useI18n(astro: { url: URL }) {
  const lang = langFromUrl(astro.url);
  return {
    lang,
    tag: LANG_TAGS[lang],
    t: (text: string, vars?: Vars) => translate(lang, text, vars),
    l: <T>(value: T) => localize(value, lang),
    path: (href: string) => localizePath(href, lang),
  };
}

/** getStaticPaths helper for the src/pages/[lang]/ wrappers. */
export function prefixedLangPaths() {
  return PREFIXED_LANGS.map((lang) => ({ params: { lang } }));
}

/** Expand an English page's static paths across every prefixed language. */
export async function expandPaths(
  base: () => Promise<Array<{ params: Record<string, string | undefined>; props?: Record<string, unknown> }>> | Array<{ params: Record<string, string | undefined>; props?: Record<string, unknown> }>,
) {
  const paths = await base();
  return PREFIXED_LANGS.flatMap((lang) => paths.map((p) => ({ params: { ...p.params, lang }, props: p.props })));
}
