# 給 GPT 的產圖說明｜18 個還沒有圖的動作

這份是從 `圖片原稿/illustration-prompts.json` 產生的，內容和那個檔案一致，
差別是整理成可以直接複製貼上的形式，並補上每張圖的驗收重點。

## 怎麼做

1. 開一個新的 GPT 對話，**先貼下面的〈開場〉**，讓它知道整批的共同規則。
2. 接著**一次貼一個動作的 prompt**，一則訊息只畫一張。不要一次丟多個，會互相污染。
3. 畫好的圖存成 **`<動作 id>.png`**（例 `e_grip.png`），放進：

       tools/exercise-sheet/圖片原稿/待審/

4. 全部畫完後跟我說，我幫你驗收、搬檔、壓圖並接上動作庫。

> 圖片尺寸請用 **1536×1024**（3:2 橫式）。這是整套圖的原稿規格，
> 之後會壓成 1200px（列印）與 480px（瀏覽）兩種。

---

## 開場（第一則訊息，先貼這個）

```text
我要請你畫一組病人衛教用的運動示意圖，總共 18 張，我會一張一張給你指示。

這組圖要接進一套已經有 79 張圖的現成圖庫，所以「風格一致」比「單張好看」重要得多。
每一則指示都已經包含完整的風格描述，請完全照著做，不要自行加上額外的醫療說明、
不要加 logo 或浮水印、不要發明中文詞彙。

尺寸一律 1536×1024（3:2 橫式），白色背景。
每張圖上只放：標題（繁體中文，照我指定的字），加上最多兩句從步驟來的簡短動作說明。
不要寫次數、組數、頻率。

其中 12 張是手部特寫（手肘、手腕、手指），這些不要畫全身人物也不要畫臉，
只畫手與前臂；另外 6 張是全身動作，沿用指示裡描述的人物設定。

準備好的話回覆「好」，我就開始給第一張。
```

---

## 手部特寫（12 張）

這 12 張的 prompt 裡已經含有「close-up of the hands and forearms only, no full figure, no face」。
如果 GPT 還是畫出整個人，把那句再強調一次。

### `e_ext_stretch`　前臂伸肌伸展（手背側）

**驗收重點**：**手心朝下**（前臂旋前）。這張和下一張最容易畫反，反了就是完全不同的病。手肘必須是打直的。

```text
Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. Equipment must support/contact correctly. Close-up of the hands and forearms ONLY: no full figure, no head, no face, no torso, no legs. Crop at mid-upper-arm or at the elbow as the movement requires. Hands of an older East Asian adult, natural proportions, same skin tone and line style as the rest of the set. Where a chair, table or prop is needed, show only the part the hands actually touch. Title:「前臂伸肌伸展（手背側）」.
Exercise source steps: 把要伸展的那隻手往前伸直，手肘打直、手心朝下。 另一隻手抓住手背，把手腕往下壓、手指也一起往內彎，再稍微往小指那一側倒。 前臂上方（手背那一側）有拉緊感時停住，維持 30 秒。
Avoid these errors: 手肘偷偷彎起來——手肘一彎就拉不到了，這是最常見的錯誤。
Context precautions (do not add paragraph text): 手肘外側那顆骨頭突起如果一壓就劇痛，伸展力道請減輕。
```

### `e_flex_stretch`　前臂屈肌伸展（手心側）

**驗收重點**：**手心朝上**（前臂旋後），另一手往下扳手掌。和上一張剛好相反，一起檢查。

```text
Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. Equipment must support/contact correctly. Close-up of the hands and forearms ONLY: no full figure, no head, no face, no torso, no legs. Crop at mid-upper-arm or at the elbow as the movement requires. Hands of an older East Asian adult, natural proportions, same skin tone and line style as the rest of the set. Where a chair, table or prop is needed, show only the part the hands actually touch. Title:「前臂屈肌伸展（手心側）」.
Exercise source steps: 把要伸展的那隻手往前伸直，手肘打直、手心朝上。 另一隻手抓住手掌，把手腕往下扳（手指朝地板），再稍微往大拇指那一側倒。 前臂下方（手心那一側）有拉緊感時停住，維持 30 秒。
Avoid these errors: 手肘彎起來，或只扳手指沒扳到手腕。
Context precautions (do not add paragraph text): 如果拉的時候小指和無名指出現麻電感，請放鬆一點——那條神經就在手肘內側經過。
```

### `e_ecc_ext`　離心腕伸展（慢慢放下）

**驗收重點**：要看得出**另一隻手幫忙把手腕抬上去**、患側只負責慢慢放下。畫成單手舉重量就是錯的。手心朝下。

```text
Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. Equipment must support/contact correctly. Close-up of the hands and forearms ONLY: no full figure, no head, no face, no torso, no legs. Crop at mid-upper-arm or at the elbow as the movement requires. Hands of an older East Asian adult, natural proportions, same skin tone and line style as the rest of the set. Where a chair, table or prop is needed, show only the part the hands actually touch. Title:「離心腕伸展（慢慢放下）」.
Exercise source steps: 坐著，前臂靠在桌面或大腿上，手心朝下、手腕懸在邊緣外，手裡握一個小重量（0.5–1 公斤，或一罐飲料）。 用另一隻手幫忙，把手腕抬到往上翹的位置。 放開幫忙的手，用 3–5 秒非常慢地把手腕放下來，再用好手抬回去。
Avoid these errors: 放下來時直接鬆手讓重量掉下去；或抬起來時用患側自己出力——抬是好手的工作，患側只負責慢慢放。
Context precautions (do not add paragraph text): 練習中和練習後有輕微痠痛是可以接受的，但隔天的疼痛應回到原本的程度；若更痛請減輕重量。
```

### `e_ecc_flex`　離心腕屈曲（慢慢放下）

**驗收重點**：同上，但**手心朝上**。一樣要有「好手幫忙抬」這個訊息。

```text
Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. Equipment must support/contact correctly. Close-up of the hands and forearms ONLY: no full figure, no head, no face, no torso, no legs. Crop at mid-upper-arm or at the elbow as the movement requires. Hands of an older East Asian adult, natural proportions, same skin tone and line style as the rest of the set. Where a chair, table or prop is needed, show only the part the hands actually touch. Title:「離心腕屈曲（慢慢放下）」.
Exercise source steps: 坐著，前臂靠在桌面上，手心朝上、手腕懸在桌緣外，手裡握一個小重量。 用另一隻手幫忙把手腕彎起來（手心朝自己的方向捲）。 放開幫忙的手，用 3–5 秒非常慢地把手腕放下來。
Avoid these errors: 速度太快，把「慢慢放下」做成上下甩動。
Context precautions (do not add paragraph text): 練習中輕微痠痛可以接受，隔天應回到原本的程度。手肘內側如果出現往小指方向的麻感請停止。
```

### `e_grip`　握力訓練（握軟球）

**驗收重點**：握的是軟球／毛巾捲，不是握力器。表情或線條不要畫成用盡全力。

```text
Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. Equipment must support/contact correctly. Close-up of the hands and forearms ONLY: no full figure, no head, no face, no torso, no legs. Crop at mid-upper-arm or at the elbow as the movement requires. Hands of an older East Asian adult, natural proportions, same skin tone and line style as the rest of the set. Where a chair, table or prop is needed, show only the part the hands actually touch. Title:「握力訓練（握軟球）」.
Exercise source steps: 手裡握一顆軟球、捲起的毛巾，或治療用的黏土。 用大約七成力慢慢握緊，不要握到最痛。 維持 5 秒，再完全放鬆。
Avoid these errors: 每次都用盡全力握——這裡練的是耐力，不是比誰握得死。
Context precautions (do not add paragraph text): 網球肘急性期光是握東西就會痛，這時先做伸展，等握起來不痛再加這一項。
```

### `e_forearm_rot`　前臂旋轉（轉門把的動作）

**驗收重點**：**手肘必須夾在身體側邊**——這是這個動作的重點，手肘一離開就變成肩膀在轉。

```text
Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. Equipment must support/contact correctly. Close-up of the hands and forearms ONLY: no full figure, no head, no face, no torso, no legs. Crop at mid-upper-arm or at the elbow as the movement requires. Hands of an older East Asian adult, natural proportions, same skin tone and line style as the rest of the set. Where a chair, table or prop is needed, show only the part the hands actually touch. Title:「前臂旋轉（轉門把的動作）」.
Exercise source steps: 坐著，手肘彎 90 度並夾在身體側邊——這樣肩膀才不會偷偷代償。 手心慢慢翻向上，像端著一碗湯，停 2 秒。 再慢慢翻向下，像把湯倒掉，停 2 秒。
Avoid these errors: 手肘離開身體側邊，變成用肩膀在轉，前臂其實沒動。
```

### `e_wrist_rom`　手腕活動度（四個方向）

**驗收重點**：前臂要**平放在桌面上、手腕懸在桌緣外**。前臂離開桌面就失去意義。

```text
Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. Equipment must support/contact correctly. Close-up of the hands and forearms ONLY: no full figure, no head, no face, no torso, no legs. Crop at mid-upper-arm or at the elbow as the movement requires. Hands of an older East Asian adult, natural proportions, same skin tone and line style as the rest of the set. Where a chair, table or prop is needed, show only the part the hands actually touch. Title:「手腕活動度（四個方向）」.
Exercise source steps: 前臂平放在桌面上，手腕懸在桌緣外。 手往上翹到底、再往下垂到底，慢慢來回 10 次。 接著把手掌放回桌面保持平貼，往大拇指那側偏、再往小指那側偏，來回 10 次。
Avoid these errors: 整條前臂跟著抬起來或翻轉，手腕其實沒動。前臂要固定在桌上。
Context precautions (do not add paragraph text): 骨折或手術後請先確認醫師允許的角度，不要硬做到底。
```

### `e_tendon_glide`　手指肌腱滑動（五個手勢）

**驗收重點**：五個手勢要**清楚分得出來**，不能只畫兩三個。順序：伸直→桌面式→勾拳→握拳→直拳。

```text
Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. Equipment must support/contact correctly. Close-up of the hands and forearms ONLY: no full figure, no head, no face, no torso, no legs. Crop at mid-upper-arm or at the elbow as the movement requires. Hands of an older East Asian adult, natural proportions, same skin tone and line style as the rest of the set. Where a chair, table or prop is needed, show only the part the hands actually touch. Title:「手指肌腱滑動（五個手勢）」.
Exercise source steps: ① 五指伸直併攏，整個手掌打平。② 只彎最靠手掌的那一節指根，其他指節保持直的，像立起一張桌面。 ③ 指尖彎向掌心但不碰到手掌，做出「勾子」的形狀。④ 完全握成拳頭。 ⑤ 指根伸直、其餘指節彎著，做出「直拳」。每個手勢停 3 秒，五個做完算一輪。
Avoid these errors: 做得很快像在甩手——每個手勢一定要停住，肌腱才會真的滑開。
Context precautions (do not add paragraph text): 手術後或剛受傷，請先確認醫師允許的活動範圍再做。
```

### `e_thumb_stretch`　拇指肌腱伸展（媽媽手）

**驗收重點**：⚠ **最重要的一張**。絕對不能畫成「大拇指包進拳頭裡、手腕往小指方向壓」——那是 Finkelstein 診斷手法，不是治療動作。正確的是手心朝上、另一手輕輕帶大拇指。

```text
Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. Equipment must support/contact correctly. Close-up of the hands and forearms ONLY: no full figure, no head, no face, no torso, no legs. Crop at mid-upper-arm or at the elbow as the movement requires. Hands of an older East Asian adult, natural proportions, same skin tone and line style as the rest of the set. Where a chair, table or prop is needed, show only the part the hands actually touch. Title:「拇指肌腱伸展（媽媽手）」.
Exercise source steps: 手心朝上平放在桌面，大拇指自然往外張開。 另一隻手輕輕把大拇指往手掌的方向帶，再往小指的方向慢慢帶一點點。 手腕拇指側有輕微拉緊感就停住，維持 20–30 秒。
Avoid these errors: 把大拇指包進拳頭裡、再把整個手腕用力往小指方向壓——那是醫師用來「誘發疼痛做診斷」的檢查手法，不是治療動作，這樣做只會讓發炎更嚴重。
Context precautions (do not add paragraph text): 紅腫熱痛的急性期請先用護具固定並減少使用，這時候不要伸展。
```

### `e_finger_ext`　手指撐開橡皮筋

**驗收重點**：橡皮筋套在**五根手指靠指尖處**，手指要能完整張開，不能畫成彎曲借力。

```text
Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. Equipment must support/contact correctly. Close-up of the hands and forearms ONLY: no full figure, no head, no face, no torso, no legs. Crop at mid-upper-arm or at the elbow as the movement requires. Hands of an older East Asian adult, natural proportions, same skin tone and line style as the rest of the set. Where a chair, table or prop is needed, show only the part the hands actually touch. Title:「手指撐開橡皮筋」.
Exercise source steps: 把一條橡皮筋（或手指專用的小彈力圈）套在五根手指靠指尖的位置。 五指慢慢往外撐開，撐到最開停 2 秒。 再用 3 秒慢慢收回來。
Avoid these errors: 橡皮筋套太緊或用太粗的，手指會彎起來借力。要能完整張開才算數。
```

### `e_desk`　桌面與滑鼠的位置（生活調整）

**驗收重點**：重點在**手肘 90 度、手腕打直不翹**。可以畫出桌面與鍵盤滑鼠的相對位置。

```text
Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. Equipment must support/contact correctly. Close-up of the hands and forearms ONLY: no full figure, no head, no face, no torso, no legs. Crop at mid-upper-arm or at the elbow as the movement requires. Hands of an older East Asian adult, natural proportions, same skin tone and line style as the rest of the set. Where a chair, table or prop is needed, show only the part the hands actually touch. Title:「桌面與滑鼠的位置（生活調整）」.
Exercise source steps: 手肘彎約 90 度、輕貼身體兩側，這個高度就是鍵盤該有的高度。 滑鼠放在鍵盤旁邊，不要往前伸太遠；打字時手腕保持打直，不要翹著撐在桌緣。 每 30–40 分鐘把手完全放開休息一下，張開手指、轉一轉手腕。
Avoid these errors: 手腕靠在桌緣或護腕墊上「翹著」打字——那個位置正好壓在腕隧道的正上方。
```

### `e_median_glide`　正中神經滑動（手麻適用）

**驗收重點**：⚠ **重畫版**：這張改成含頭頸的半身取景（其餘 11 張仍是手部特寫）。要看的是手臂側平舉、手心朝上、手腕後翹，**而且頭倒向同一側肩膀**——頭倒錯邊就變成 tensioner，正是會讓手麻加重的那種。頭一定要畫出來。

```text
Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. Equipment must support/contact correctly. Show the head, neck, shoulder and the whole arm of an older East Asian man with gray hair, teal #0f766e shirt, seen from the front or three-quarter view, cropped at the waist. The head tilt toward the SAME shoulder as the working arm is an essential part of this exercise and must be clearly visible and unmistakable in each pose. Do not crop the head out. CRITICAL geometry, both poses: the forearm stays SUPINATED the whole time — the palm faces UPWARD toward the ceiling in BOTH panels, and must never be shown rotated palm-down. The wrist motion is EXTENSION, not flexion: with the palm still facing up, the fingers point toward the floor because the wrist bends back. In the first pose the head must be side-bent TOWARD the same side as the outstretched working arm — if the working arm reaches to the viewer's right, the head must lean to the viewer's right, ear moving toward that shoulder. Tilting the head to the opposite side is medically WRONG and must not be drawn. In the second pose the head is upright and the wrist relaxed. Make the head tilt large enough to be obvious at a glance. Title:「正中神經滑動（手麻適用）」.
Exercise source steps: 坐著，手臂往身體側邊伸直、與肩同高，手心朝上（整個過程手心都不要翻過去）。 手心維持朝上，把手腕往下扳、讓手指指向地板；同時把頭倒向出力那隻手的那一側肩膀，停 2 秒。 再回到手腕放鬆、頭回正的位置。整組慢慢來回，像在讓神經滑動而不是拉扯。
Avoid these errors: 拉到底硬撐著不放。神經不是韌帶，不能當伸展拉——要的是來回「滑動」。
Context precautions (do not add paragraph text): 做的時候手麻或電感明顯加重、或麻的範圍變大，請立刻停止並回診。這個動作不該讓症狀變嚴重。
```

## 全身動作（6 張）

這 6 張沿用整套圖既有的人物設定（灰髮東亞男性、teal 上衣、灰短褲、站立走路時穿防滑運動鞋）。

### `a_march`　原地踏步

**驗收重點**：扶椅背、原地踏步。膝蓋不要抬太高（不是高抬腿）。

```text
Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. Equipment must support/contact correctly. Consistent older East Asian man with gray hair, teal #0f766e shirt, gray shorts, natural proportions. Barefoot on bed/mat or for foot detail; nonslip sneakers for standing/walking. Exactly two arms two legs per person. Title:「原地踏步」.
Exercise source steps: 站在椅背後面，手可以輕輕扶著椅背。 原地踏步，膝蓋抬到舒服的高度就好，不必抬很高。 用「還能講話、但有點喘」的速度，連續做 5–10 分鐘。
Avoid these errors: 越踏越快變成衝刺。有氧要的是持續，不是強度。
Context precautions (do not add paragraph text): 容易頭暈或站不穩的人請坐著做——坐姿踏步一樣有效。
```

### `a_bike`　固定式腳踏車

**驗收重點**：⚠ **座墊高度是重點**：踩到最低點時膝蓋要**微微彎著**，不能完全打直、也不能彎很多。

```text
Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. Equipment must support/contact correctly. Consistent older East Asian man with gray hair, teal #0f766e shirt, gray shorts, natural proportions. Barefoot on bed/mat or for foot detail; nonslip sneakers for standing/walking. Exactly two arms two legs per person. Title:「固定式腳踏車」.
Exercise source steps: 先調座墊：踩到最低點時膝蓋還要微微彎著，不能完全打直，也不能彎很多。 阻力調到最輕，用輕鬆的速度踩 5 分鐘暖身。 再用「還能講話、但有點喘」的強度踩 10–20 分鐘。
Avoid these errors: 座墊太低（踩到底時膝蓋還彎很多）——這是越騎膝蓋越痛最常見的原因。
Context precautions (do not add paragraph text): 騎完膝蓋前側更痛，多半是座墊太低或阻力太重，先調整再繼續。
```

### `a_interval`　間歇快走

**驗收重點**：要表達「快走／慢走交替」，可以用兩個並排的姿勢加箭頭表示節奏差異。

```text
Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. Equipment must support/contact correctly. Consistent older East Asian man with gray hair, teal #0f766e shirt, gray shorts, natural proportions. Barefoot on bed/mat or for foot detail; nonslip sneakers for standing/walking. Exactly two arms two legs per person. Title:「間歇快走」.
Exercise source steps: 先用平常的速度走 5 分鐘暖身。 接著「快走 1–2 分鐘、恢復慢走 2 分鐘」算一輪，重複 5–8 輪。 最後再用慢速走 5 分鐘緩和下來。
Avoid these errors: 快走那一段快到講不出話。標準是「講得出短句，但沒辦法唱歌」。
Context precautions (do not add paragraph text): 有心臟病或胸悶胸痛病史的人，開始間歇訓練前請先問過醫師。
```

### `a_arm`　坐姿手臂運動（上肢有氧）

**驗收重點**：坐姿、背打直、雙腳踩穩，兩手輪流前推。不要畫成舉啞鈴。

```text
Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. Equipment must support/contact correctly. Consistent older East Asian man with gray hair, teal #0f766e shirt, gray shorts, natural proportions. Barefoot on bed/mat or for foot detail; nonslip sneakers for standing/walking. Exactly two arms two legs per person. Title:「坐姿手臂運動（上肢有氧）」.
Exercise source steps: 坐在有靠背的椅子上，背打直、雙腳踩穩地面。 兩手輪流往前上方推出去再收回來，像慢動作跑步時的擺手。 保持一定節奏連續做 5–10 分鐘，全程正常呼吸。
Avoid these errors: 憋氣出力。上肢運動特別容易憋氣，血壓會跟著上去。
Context precautions (do not add paragraph text): 高血壓控制不良的人請先問過醫師；過程中出現頭暈或胸悶請立刻停下來。
```

### `a_water`　水中步行

**驗收重點**：人在水中，**水面到胸口**。要看得出是泳池。

```text
Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. Equipment must support/contact correctly. Consistent older East Asian man with gray hair, teal #0f766e shirt, gray shorts, natural proportions. Barefoot on bed/mat or for foot detail; nonslip sneakers for standing/walking. Exactly two arms two legs per person. Title:「水中步行」.
Exercise source steps: 站在水深及胸或及腰的泳池裡——水越深，關節的負擔越小。 在水中正常走路，來回走。習慣之後可以加上倒退走和側走。 從 10 分鐘開始，慢慢增加到 20–30 分鐘。
Avoid these errors: 想在水裡走得跟陸地上一樣快。水的阻力本來就大，慢慢走就夠了。
Context precautions (do not add paragraph text): 有開放性傷口、控制不良的癲癇、或嚴重心肺疾病者不適合。水溫太涼會讓肌肉更緊，建議溫水池。
```

### `a_daily`　把活動塞進生活裡

**驗收重點**：生活情境（走樓梯／提早下車走路），不是健身動作。

```text
Use case: scientific-educational. Create ONE standalone Traditional Chinese patient exercise illustration, landscape 3:2, white background, clean detailed medical editorial line drawing with light watercolor shading. Teal large title, orange small movement arrows, dark gray outlines. Show 1–2 clearly separated poses (not ghost limbs), choose camera view best showing essential motion, full relevant anatomy visible. No logo/watermark. Each illustration shows ONLY this exercise. Use the supplied steps as visual source, not extra medical claims. Keep text sparse: exact title plus 2 concise Traditional Chinese action captions derived from steps, no detailed repetitions/frequency, no invented words. Tiny motions must be shown subtly not exaggerated. Equipment must support/contact correctly. Consistent older East Asian man with gray hair, teal #0f766e shirt, gray shorts, natural proportions. Barefoot on bed/mat or for foot detail; nonslip sneakers for standing/walking. Exactly two arms two legs per person. Title:「把活動塞進生活裡」.
Exercise source steps: 提早一站下車走回家，或把車停遠一點。 能走樓梯就不搭電梯（膝蓋不舒服的人只走上樓那段，下樓搭電梯）。 講電話時站起來走動。每次至少要連續 10 分鐘才算進總量。
Avoid these errors: 覺得「沒換運動服、沒流汗就不算運動」。累積起來的活動量，心血管效益和特地去運動是一樣的。
```

---

## 畫完之後

檔案放進 `圖片原稿/待審/`，檔名＝動作 id。接下來的三步我可以代勞：

```bash
cd "tools/exercise-sheet/圖片原稿"
mv 待審/e_grip.png .        # 1. 驗收通過的搬到根目錄
./產生圖片.sh e_grip         # 2. 壓出 1200px 與 480px
#                           # 3. 在 exercises.js 那筆加上 img:'e_grip'
```

第 3 步沒做的話，圖有了但單張上不會出現。
