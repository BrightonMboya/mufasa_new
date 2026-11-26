import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum(['Safari', 'Climbing']),
      date: z.date(),
      image: z.string(),
      draft: z.boolean().optional().default(false),
    }),
});

/* Translations of blog posts, one folder per language: blog-i18n/fr/<slug>.md.
   Only title, description and body are translated; category, date and image
   come from the English original with the same slug. A post with no file for
   a language falls back to English (see src/lib/blog.ts). */
const blogI18n = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-i18n' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /* Optional editorial accent shown beside the copy on desktop only. */
    sideImage: z.string().optional(),
    sideImageAlt: z.string().optional(),
  }),
});

export const collections = { blog, blogI18n, legal };
