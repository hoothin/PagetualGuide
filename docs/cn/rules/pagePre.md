# pagePre (response, doc)
>从 nextLink 获取响应后执行的 JavaScript。可修改响应文本并返回，也可直接返回 pageElement 数组。

示例：
--
```json
"pagePre": "return decodeURI(response).replace(/[\\\\]/g,'')"
```

*仅在 `action`==0 或 `action`==1 时生效*
