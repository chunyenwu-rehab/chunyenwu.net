import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 一個 blog 集合。category 分成 學習／醫療 兩類；
// featured: true 的文章會被收進「精選復健文章」頁。
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['學習', '醫療']),
    featured: z.boolean().default(false),
    image: z.string().optional(), // 社群分享顯圖；不填則用全站預設

    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
