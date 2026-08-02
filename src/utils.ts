import { getCollection, type CollectionEntry } from 'astro:content';
import type { CategoryKey } from './consts';
import { getPostDates } from './lastmod';

export type PostView = {
  id: string;
  data: CollectionEntry<'blog'>['data'];
  isUpdated: boolean;
  lastModified: Date;
  effective: Date;
};

function toView(post: CollectionEntry<'blog'>): PostView {
  const { isUpdated, lastModified, effective } = getPostDates(post.id, post.data.pubDate);
  return { id: post.id, data: post.data, isUpdated, lastModified, effective };
}

/** 已發佈文章（非草稿）→ 依「有效日期」新到舊排序（被更新過的會往前） */
export async function getPublishedPosts(): Promise<PostView[]> {
  const posts = await getCollection('blog', ({ data }) => data.draft !== true);
  return posts
    .map(toView)
    .sort((a, b) => b.effective.valueOf() - a.effective.valueOf());
}

/** 某分類的已發佈文章 */
export async function getPostsByCategory(category: CategoryKey): Promise<PostView[]> {
  const posts = await getPublishedPosts();
  return posts.filter((p) => p.data.category === category);
}

/** 精選文章（featured: true） */
export async function getFeaturedPosts(): Promise<PostView[]> {
  const posts = await getPublishedPosts();
  return posts.filter((p) => p.data.featured === true);
}
