// 結構化資料（JSON-LD / schema.org）集中在這裡。
// 讓 Google 知識面板與 AI 搜尋認得「吳俊諺＝復健科醫師」，
// 並理解每篇文章的作者、日期與分類。改個人資料只要動這個檔。

import { SITE, SOCIAL } from './consts';

const BASE = SITE.url;
export const PERSON_ID = `${BASE}/#person`;
export const WEBSITE_ID = `${BASE}/#website`;

// 作者本人（Person）。@id 讓其他節點（網站、文章）用參照方式指回同一個人，
// 不必到處重複整份資料。
export const personSchema = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: SITE.author,
  alternateName: `${SITE.author}醫師`,
  url: `${BASE}/about/`,
  image: `${BASE}/avatar.jpg`,
  jobTitle: '復健科醫師',
  description:
    '復健科醫師，員林常春醫院復健科主任。專注神經復健、運動醫學、疼痛與再生醫療，也關注復健科技與醫療流程改善。',
  worksFor: {
    '@type': 'MedicalOrganization',
    name: '員林常春醫院',
  },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: '中山醫學大學' },
    { '@type': 'CollegeOrUniversity', name: '國立臺東大學' },
  ],
  knowsAbout: [
    '神經復健',
    '中風復健',
    '腦傷與脊髓損傷復健',
    '運動醫學',
    '疼痛治療與再生醫療',
    '經顱磁刺激',
    '兒童發展遲緩',
  ],
  sameAs: [SOCIAL.rehab.href, SOCIAL.facebook.href, SOCIAL.instagram.href],
} as const;

// 網站本身（WebSite）。作者與發行者都指回同一個人。
export const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${BASE}/`,
  name: SITE.title,
  description: SITE.description,
  inLanguage: SITE.lang,
  publisher: { '@id': PERSON_ID },
  author: { '@id': PERSON_ID },
} as const;

// 單篇文章（BlogPosting）。author／publisher 用 @id 參照 personSchema，
// 所以文章頁的 @graph 要同時帶入 personSchema。
export function blogPostingSchema(opts: {
  title: string;
  description?: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image: string;
  section?: string;
  keywords?: readonly string[];
}) {
  return {
    '@type': 'BlogPosting',
    '@id': `${opts.url}#article`,
    headline: opts.title,
    ...(opts.description ? { description: opts.description } : {}),
    url: opts.url,
    mainEntityOfPage: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    image: opts.image,
    inLanguage: SITE.lang,
    ...(opts.section ? { articleSection: opts.section } : {}),
    ...(opts.keywords && opts.keywords.length ? { keywords: [...opts.keywords] } : {}),
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
  };
}
