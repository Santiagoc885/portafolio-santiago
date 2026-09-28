import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';

export type Case = CollectionEntry<'casos'> & { slug: string };

/** Los casos viven en src/content/casos/<lang>/<slug>.mdx. El slug es el mismo en ambos idiomas. */
export const getCases = async (lang: Lang): Promise<Case[]> =>
  (await getCollection('casos', (e) => e.id.startsWith(`${lang}/`)))
    .map((e) => Object.assign(e, { slug: e.id.slice(lang.length + 1) }))
    .sort((a, b) => a.data.order - b.data.order);
