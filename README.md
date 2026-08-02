# chunyenwu.net

吳俊諺醫師的個人網站——學習、醫療與生活筆記。以 [Astro](https://astro.build) 建置，內容用 Markdown 撰寫，自動部署到 GitHub Pages。

## 本機開發

```bash
npm install     # 第一次先安裝套件
npm run dev     # 開發預覽 http://localhost:4321
npm run build   # 產生正式檔案到 dist/
npm run preview # 預覽 build 後的結果
```

## 怎麼發一篇新文章

1. 在 `src/content/blog/` 新增一個 `.md` 檔（檔名就是網址，用英文，例如 `my-first-note.md`）。
2. 檔案最上面放這段設定（frontmatter）：

   ```markdown
   ---
   title: 文章標題
   description: 一句話摘要，會顯示在列表與搜尋結果
   pubDate: 2026-08-02
   category: 學習        # 只能填：學習、醫療 其中一個
   featured: false       # 設 true 會收進「精選復健文章」頁
   tags: [標籤一, 標籤二]  # 可留空 []
   draft: false          # 設 true 就不會發佈（草稿）
   ---
   ```

3. `---` 底下就用 Markdown 正常寫內容。
4. 存檔、`git push` 到 `main`，GitHub Actions 會自動建置並上線。

## 分類與精選

| 區塊 | category 值 | 網址 | 用途 |
| --- | --- | --- | --- |
| 學習筆記 | `學習` | `/learning/` | 進修心得、讀書、研究反思 |
| 醫療現場 | `醫療` | `/clinic/` | 復健醫療觀點、衛教反思（不談個案） |
| 精選復健文章 | （用 `featured: true`） | `/featured/` | 從各分類挑出最推薦的復健好文，可跨分類 |

「精選復健文章」不是獨立分類，而是策展頁：任何一篇 `學習` 或 `醫療` 的文章，只要把 frontmatter 的 `featured` 設成 `true`，就會同時出現在這一頁。

## 常改的地方

- **站名、tagline、社群連結、分類說明** → `src/consts.ts`
- **配色、字體、整體樣式** → `src/styles/global.css`
- **關於我內容** → `src/pages/about.astro`
- **首頁文案** → `src/pages/index.astro`

## 部署

- 推送到 `main` → GitHub Actions（`.github/workflows/deploy.yml`）自動建置部署到 GitHub Pages。
- 自訂網域 `chunyenwu.net` 由 `public/CNAME` 指定。
- 也可另接 Cloudflare Pages：建置指令 `npm run build`，輸出目錄 `dist`。
