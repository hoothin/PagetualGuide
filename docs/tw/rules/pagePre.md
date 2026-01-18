# pagePre (response, doc)
>從 nextLink 取得回應後執行的 JavaScript。可修改回應文字並回傳，也可直接回傳 pageElement 陣列。

範例：
--
```json
"pagePre": "return decodeURI(response).replace(/[\\\\]/g,'')"
```

*僅在 `action`==0 或 `action`==1 時生效*
