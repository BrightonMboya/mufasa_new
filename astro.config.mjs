// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { existsSync } from 'node:fs';

/* Keep in step with src/i18n/index.ts. English lives at the root; the rest
   are rendered under /{lang}/ by the wrappers in src/pages/[lang]/. */
const LOCALES = { en: 'en', it: 'it', fr: 'fr', de: 'de', es: 'es', zh: 'zh-Hans' };

/* Legal pages are English-only: their /{lang}/ copies exist so the header
   and footer stay in the reader's language, but they canonicalise to the
   English page and are left out of the sitemap. */
const ENGLISH_ONLY_UNDER_PREFIX =
  /^\/(it|fr|de|es|zh)\/(contact|our-booking-process|our-vehicle|privacy-policy|refund-policy|terms-conditions|tipping-guideline)\/?$/;

/* Blog posts are translated one by one into src/content/blog-i18n/{lang}/.
   A prefixed post without a translation file is English, so it stays out too. */
const PREFIXED_POST = /^\/(it|fr|de|es|zh)\/blog\/([^/]+)\/?$/;
const isUntranslatedPost = (pathname) => {
  const m = pathname.match(PREFIXED_POST);
  return !!m && !existsSync(new URL(`./src/content/blog-i18n/${m[1]}/${m[2]}.md`, import.meta.url));
};

// https://astro.build
export default defineConfig({
  site: 'https://kingmufasaexpeditions.com',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: LOCALES },
      filter: (page) => {
        const { pathname } = new URL(page);
        return !ENGLISH_ONLY_UNDER_PREFIX.test(pathname) && !isUntranslatedPost(pathname);
      },
    }),
  ],
});
