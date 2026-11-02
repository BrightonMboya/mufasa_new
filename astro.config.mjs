// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/* Keep in step with src/i18n/index.ts. English lives at the root; the rest
   are rendered under /{lang}/ by the wrappers in src/pages/[lang]/. */
const LOCALES = { en: 'en', it: 'it', fr: 'fr', de: 'de', es: 'es' };

/* Articles and legal pages are English-only: their /{lang}/ copies exist so
   the header and footer stay in the reader's language, but they canonicalise
   to the English page and are left out of the sitemap. */
const ENGLISH_ONLY_UNDER_PREFIX =
  /^\/(it|fr|de|es)\/(blog\/.+|contact|our-booking-process|our-vehicle|privacy-policy|refund-policy|terms-conditions|tipping-guideline)\/?$/;

// https://astro.build
export default defineConfig({
  site: 'https://kingmufasaexpeditions.com',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: LOCALES },
      filter: (page) => !ENGLISH_ONLY_UNDER_PREFIX.test(new URL(page).pathname),
    }),
  ],
});
