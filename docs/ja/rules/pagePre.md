# pagePre (response, doc)
>nextLink から取得したレスポンス後に実行する JavaScript。レスポンス文字列を加工して返すか、pageElement 配列を直接返せます。

例：
--
```json
"pagePre": "return decodeURI(response).replace(/[\\\\]/g,'')"
```

*`action`==0 または `action`==1 のときのみ有効*
