// 全站設定集中在這裡，日後改文字/連結只要動這個檔。

export const SITE = {
  title: '吳俊諺醫師',
  author: '吳俊諺',
  tagline: '一位復健科醫師的學習、醫療與生活筆記',
  description:
    '復健科醫師吳俊諺的個人筆記——進修學習的心得、醫療現場的思考，以及精選的復健文章。專業，但不像醫院；溫暖，但不過度感性。',
  url: 'https://chunyenwu.net',
  lang: 'zh-Hant',
  locale: 'zh_TW',
} as const;

// 導覽列
export const NAV = [
  { label: '學習筆記', href: '/learning/' },
  { label: '醫療現場', href: '/clinic/' },
  { label: '精選復健', href: '/featured/' },
  { label: '關於', href: '/about/' },
] as const;

// 寫作分類——每篇文章的 category 只能是這兩個之一
// key 對應文章 frontmatter 的 category 值
export const CATEGORIES = {
  學習: {
    key: '學習',
    label: '學習筆記',
    href: '/learning/',
    color: 'var(--teal)',
    blurb: '進修、讀書與新研究的消化與反思。把讀到的、學到的，整理成自己的話。',
  },
  醫療: {
    key: '醫療',
    label: '醫療現場',
    href: '/clinic/',
    color: 'var(--coral)',
    blurb: '復健醫療的觀點與思考，以及站在照顧者角度的衛教反思——不談個案，只談想法。',
  },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;

// 精選復健文章——用 featured 標記，把最想推薦的復健好文集中呈現（可跨分類）
export const FEATURED = {
  label: '精選復健文章',
  href: '/featured/',
  color: 'var(--gold)',
  blurb: '從我寫過的內容裡，挑出對復健與照顧最有幫助的幾篇，集中放在這裡。',
} as const;

// 首頁 HERO 大圖。credit 為 null 表示自有照片、footer 不需標示授權。
export const HERO_IMAGE = {
  src: '/hero.jpg',
  width: 1600,
  height: 1200,
  alt: '吳俊諺醫師站在東華醫院偏鄉巡迴醫療車前，一旁備有遠距醫療設備',
  credit: null as null | {
    title: string;
    author: string;
    source: string;
    sourceUrl: string;
    license: string;
    licenseUrl: string;
  },
};

// 對外連結（email 預設不公開；要放再加）
export const SOCIAL = {
  rehab: { label: '作伙來復健', href: 'https://17rehab.com' },
  facebook: {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61574357303659',
  },
  instagram: { label: 'Instagram', href: 'https://www.instagram.com/1717rehab/' },
} as const;
