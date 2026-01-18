# init (doc, win, iframe, click, enter, input, sleep)
>只執行一次的 JavaScript，作用於主頁或鏡像 iframe。可用於只跑一次的初始化邏輯，或把主頁狀態同步到 iframe。

範例：
--
```json
"init": "if (iframe == null) return; await click('#btn'); await input('#input', 'here you are'); await enter('#input');"
```
>在鏡像 iframe 中擷取內容時，先點擊 `#btn`，再向 `#input` 輸入 `here you are`，最後在 `#input` 上按 Enter。

*此程式只會執行一次，用於一次性操作。*
