import { getCollection } from 'astro:content';
import type { CategoryKey } from './consts';

/** 取得所有已發佈（非草稿）文章，依日期新到舊排序 */
export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => data.draft !== true);
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

/** 取得某分類的已發佈文章 */
export async function getPostsByCategory(category: CategoryKey) {
  const posts = await getPublishedPosts();
  return posts.filter((p) => p.data.category === category);
}

/** 取得精選文章（featured: true），依日期新到舊 */
export async function getFeaturedPosts() {
  const posts = await getPublishedPosts();
  return posts.filter((p) => p.data.featured === true);
}
