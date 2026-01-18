# action
>0 代表載入 URL 並以靜態 HTML 插入；1 代表用 iframe 載入以執行頁面中的動態 JavaScript；2 代表強制把完整 iframe 插到頁面底部。

範例：
--
```json
"action": 1
```

+ action: 0
取得 nextLink 的 URL 並直接插入靜態 HTML，不做動態處理，預設值且速度最快。
+ action: 1
用 iframe 載入 URL，等待載入完成後再取內容，適合內容在頁面開啟後才渲染的情況。
+ action: 2
建立 nextLink 對應頁面的完整 iframe，裁切後插入到目前頁面底部。
