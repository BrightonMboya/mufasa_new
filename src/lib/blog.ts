import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { LANGS, DEFAULT_LANG, type Lang } from '../i18n';

type Post = CollectionEntry<'blog'>;
type Translation = CollectionEntry<'blogI18n'>;

/** The translation of a post, or undefined when it hasn't been translated. */
export async function getTranslation(post: Post, lang: Lang): Promise<Translation | undefined> {
  if (lang === DEFAULT_LANG) return undefined;
  return getEntry('blogI18n', `${lang}/${post.id}`);
}

/** Title, description and the entry to render for a post in a language,
    falling back to the English original. */
export async function localizePost(post: Post, lang: Lang) {
  const translation = await getTranslation(post, lang);
  return {
    title: translation?.data.title ?? post.data.title,
    description: translation?.data.description ?? post.data.description,
    entry: (translation ?? post) as Post | Translation,
    translated: lang === DEFAULT_LANG || translation !== undefined,
  };
}

/** Languages a post can be read in: English plus every translation on disk. */
export async function postLangs(post: Post): Promise<Lang[]> {
  const translations = await getCollection('blogI18n', (t) => t.id.endsWith(`/${post.id}`));
  const have = new Set(translations.map((t) => t.id.split('/')[0]));
  return LANGS.filter((l) => l === DEFAULT_LANG || have.has(l));
}

/** Published posts, newest first, with title/description in the given language. */
export async function getLocalizedPosts(lang: Lang) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  return Promise.all(
    posts.map(async (post) => {
      const { title, description } = await localizePost(post, lang);
      return { post, title, description };
    }),
  );
}
