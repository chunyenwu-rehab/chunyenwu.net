#!/bin/bash
# 由本資料夾的 1536×1024 原稿，產生單張產生器實際使用的兩種尺寸。
# 用法：在本資料夾執行 ./產生圖片.sh          → 全部重轉
#       ./產生圖片.sh k_slr c_bridge          → 只轉指定動作
# 需要 macOS 內建的 sips，不必安裝任何東西。
set -e
cd "$(dirname "$0")"
# 輸出直接寫進網站要部署的資料夾（repo 裡只有那一份）
OUT_IMG="../../../public/exercise-sheet/assets/img"      # 1200px 寬，列印與預覽用
OUT_THUMB="../../../public/exercise-sheet/assets/thumb"  #  480px 寬，動作庫瀏覽用
mkdir -p "$OUT_IMG" "$OUT_THUMB"

if [ $# -gt 0 ]; then FILES=(); for id in "$@"; do FILES+=("$id.png"); done
else FILES=(*.png); fi

n=0
for f in "${FILES[@]}"; do
  [ -f "$f" ] || { echo "找不到 $f"; exit 1; }
  id="${f%.png}"
  sips -Z 1200 -s format jpeg -s formatOptions 88 "$f" --out "$OUT_IMG/$id.jpg"   >/dev/null
  sips -Z 480  -s format jpeg -s formatOptions 78 "$f" --out "$OUT_THUMB/$id.jpg" >/dev/null
  n=$((n+1))
done
echo "完成 $n 張。記得在 public/exercise-sheet/exercises.js 該動作加上 img:'<id>'。"
