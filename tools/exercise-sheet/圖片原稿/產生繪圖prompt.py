#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把 exercises.js 裡的動作轉成 illustration-prompts.json 的繪圖 prompt。

用法：
    python3 產生繪圖prompt.py                # 所有還沒有 img 的動作
    python3 產生繪圖prompt.py e_grip a_bike  # 只做指定的幾個
    python3 產生繪圖prompt.py --all          # 全部 97 個（重畫整套時才用）

輸出：同資料夾的 illustration-prompts.json（會覆蓋）。
畫完的圖檔名用動作 id（例：e_grip.png）放進這個資料夾，
再用 產生圖片.sh 壓出兩種尺寸，最後在 exercises.js 那筆加上 img:'e_grip'。
"""
import json, re, subprocess, sys, pathlib

HERE = pathlib.Path(__file__).resolve().parent
EXJS = HERE.parents[2] / "public" / "exercise-sheet" / "exercises.js"
OUT  = HERE / "illustration-prompts.json"

# 全套圖的共同風格。改這裡等於改整套的畫風，改完要重畫的不只一張，請謹慎。
COMMON = (
 "Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise "
 "illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with "
 "light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. "
 "Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential "
 "motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this "
 "exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: "
 "exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed "
 "repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. "
 "Equipment must support/contact correctly."
)
# 全身動作才需要人物設定。手部特寫套上這段會自相矛盾（既要求畫球鞋又要求不要畫全身），
# 所以兩者互斥，不要合併。
FULL_BODY = (
 " Consistent older East Asian man with gray hair, teal #0f766e shirt, gray shorts, natural "
 "proportions. Barefoot on bed/mat or for foot detail; nonslip sneakers for standing/walking. "
 "Exactly two arms two legs per person."
)
# 手部特寫：只畫手與前臂，不要人物、不要臉，也就不要講衣著鞋子。
HANDS_ONLY = (
 " Close-up of the hands and forearms ONLY: no full figure, no head, no face, no torso, no legs. "
 "Crop at mid-upper-arm or at the elbow as the movement requires. Hands of an older East Asian "
 "adult, natural proportions, same skin tone and line style as the rest of the set. Where a chair, "
 "table or prop is needed, show only the part the hands actually touch."
)
HAND_REGIONS = {"肘腕手"}
# 少數肘腕手的動作，頭頸也是動作的一部分，只畫手就講不完整——這些要用半身取景。
# e_median_glide：手腕後翹的同時頭要倒向同側，兩端一鬆一緊才是 slider；
#                 頭倒錯邊會變成 tensioner，正是會讓症狀加重的那種。
UPPER_BODY_IDS = {"e_median_glide"}
# 個別動作的補充指示。只在通用敘述不足以避免特定錯誤時才加——第一版與第二版
# e_median_glide 分別畫錯了取景與「頭倒的方向＋前臂旋轉」，兩次都是通用敘述講不清楚。
EXTRA = {
 "e_median_glide":
   "CRITICAL geometry, both poses: the forearm stays SUPINATED the whole time — the palm faces "
   "UPWARD toward the ceiling in BOTH panels, and must never be shown rotated palm-down. The wrist "
   "motion is EXTENSION, not flexion: with the palm still facing up, the fingers point toward the "
   "floor because the wrist bends back. In the first pose the head must be side-bent TOWARD the "
   "same side as the outstretched working arm — if the working arm reaches to the viewer's right, "
   "the head must lean to the viewer's right, ear moving toward that shoulder. Tilting the head to "
   "the opposite side is medically WRONG and must not be drawn. In the second pose the head is "
   "upright and the wrist relaxed. Make the head tilt large enough to be obvious at a glance.",
}
UPPER_BODY = (
 " Show the head, neck, shoulder and the whole arm of an older East Asian man with gray hair, teal "
 "#0f766e shirt, seen from the front or three-quarter view, cropped at the waist. The head tilt "
 "toward the SAME shoulder as the working arm is an essential part of this exercise and must be "
 "clearly visible and unmistakable in each pose. Do not crop the head out."
)

def load_ex():
    """用 node 把 exercises.js 讀成 JSON——自己寫正規表示式解析 JS 物件會出事。"""
    js = f"global.window={{}};require({json.dumps(str(EXJS))});process.stdout.write(JSON.stringify(window.RXDATA.EX))"
    out = subprocess.run(["node","-e",js], capture_output=True, text=True, check=True).stdout
    return json.loads(out)

def build(eid, e):
    if eid in UPPER_BODY_IDS:      framing = UPPER_BODY
    elif set(e.get("reg", [])) & HAND_REGIONS: framing = HANDS_ONLY
    else:                          framing = FULL_BODY
    extra = EXTRA.get(eid, "")
    body = COMMON + framing + (" " + extra if extra else "") + f" Title:「{e['n']}」."
    body += "\nExercise source steps: " + " ".join(e["s"])
    if e.get("m"): body += "\nAvoid these errors: " + e["m"]
    if e.get("c"): body += "\nContext precautions (do not add paragraph text): " + e["c"]
    job = {"id":eid, "n":e["n"], "s":e["s"], "reg":e.get("reg",[]), "prompt":body}
    if e.get("c"): job["c"] = e["c"]
    if e.get("m"): job["m"] = e["m"]
    return job

def main(argv):
    EX = load_ex()
    if "--all" in argv:
        ids = list(EX)
    elif argv:
        ids = argv
        missing = [i for i in ids if i not in EX]
        if missing: sys.exit("動作庫裡沒有這些 id：" + ", ".join(missing))
    else:
        ids = [i for i in EX if not EX[i].get("img")]
    if not ids: sys.exit("沒有需要產生 prompt 的動作（所有動作都已經有 img）。")
    # 既有的 job 要留著——那 79 張圖的 prompt 是畫出現有圖的依據，
    # 之後要重畫或對照風格都得靠它，不能被這次的新動作蓋掉。
    jobs, seen = [], set(ids)
    if OUT.exists():
        old = json.loads(OUT.read_text(encoding="utf-8")).get("jobs", [])
        jobs = [j for j in old if j.get("id") not in seen]
    kept = len(jobs)
    jobs += [build(i, EX[i]) for i in ids]
    OUT.write_text(json.dumps({"tool":"built-in image_gen","jobs":jobs},
                              ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"{OUT.name}：保留既有 {kept} 筆，寫入／更新 {len(ids)} 筆")
    for i in ids: print("  ", i, EX[i]["n"])

if __name__ == "__main__":
    main(sys.argv[1:])
