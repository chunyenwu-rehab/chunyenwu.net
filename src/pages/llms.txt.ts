// /llms.txt —— 給 AI（LLM）閱讀的站點導覽。
// 用 llms.txt 慣例（https://llmstxt.org/）：標題、摘要，再依分類列出文章。
// 內容由已發佈文章動態產生，發新文會自動更新。

import type { APIContext } from 'astro';
import { SITE, SOCIAL, CATEGORIES } from '../consts';
import { getPublishedPosts } from '../utils';

export async function GET(context: APIContext) {
  const base = (context.site ?? new URL(SITE.url)).origin;
  const posts = await getPublishedPosts();
  const abs = (path: string) => `${base}${path}`;

  const line = (p: (typeof posts)[number]) => {
    const url = abs(`/posts/${p.id}/`);
    const desc = p.data.description ? `：${p.data.description}` : '';
    return `- [${p.data.title}](${url})${desc}`;
  };

  const sections = Object.values(CATEGORIES).map((cat) => {
    const items = posts.filter((p) => p.data.category === cat.key).map(line);
    if (items.length === 0) return '';
    return `## ${cat.label}\n\n${cat.blurb}\n\n${items.join('\n')}`;
  });

  const featured = posts.filter((p) => p.data.featured).map(line);

  const body = [
    `# ${SITE.title}`,
    '',
    `> ${SITE.tagline}`,
    '',
    SITE.description,
    '',
    `作者為復健科醫師吳俊諺（員林常春醫院復健科主任），專長神經復健、運動醫學、疼痛與再生醫療。本站記錄進修學習、醫療現場的觀點與反思，不針對特定個案，也不構成醫療診斷或治療建議。`,
    '',
    sections.filter(Boolean).join('\n\n'),
    '',
    ...(featured.length ? ['## 精選復健文章', '', ...featured, ''] : []),
    '## 其他',
    '',
    `- [關於吳俊諺醫師](${abs('/about/')})：學經歷、專長與門診時間`,
    `- [${SOCIAL.rehab.label}](${SOCIAL.rehab.href})：神經復健的照顧資源與決策指南（衛教平台）`,
    `- [RSS](${abs('/rss.xml')})`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
