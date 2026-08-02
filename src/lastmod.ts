import { execSync } from 'node:child_process';

// 用 git 提交紀錄推算文章的「最後更新時間」。
// - 只被加入一次（count === 1）→ 視為「未曾更新」，不顯示更新日期。
// - 被改過（count > 1）→ 取最新一次提交時間當更新日期。
// 需要完整 git 歷史，所以 CI checkout 要用 fetch-depth: 0。
export function getGitInfo(relPath: string): { date: Date | null; count: number } {
  try {
    const out = execSync(`git log --pretty=format:%cI -- "${relPath}"`, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    const dates = out
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
    if (dates.length === 0) return { date: null, count: 0 };
    return { date: new Date(dates[0]), count: dates.length }; // git log 由新到舊
  } catch {
    return { date: null, count: 0 };
  }
}

const ymd = (d: Date) => d.toISOString().slice(0, 10);

// 回傳文章的更新資訊：是否更新過、最後更新時間、用來排序的有效日期。
export function getPostDates(id: string, pubDate: Date) {
  const { date, count } = getGitInfo(`src/content/blog/${id}.md`);
  const isUpdated = count > 1 && date !== null && ymd(date) > ymd(pubDate);
  const lastModified = isUpdated ? (date as Date) : pubDate;
  return { isUpdated, lastModified, effective: lastModified };
}
