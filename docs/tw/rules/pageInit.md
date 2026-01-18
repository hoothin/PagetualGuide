# pageInit (doc, eles)
>每次插入頁面前執行的 JavaScript。`doc` 為每次載入頁面的 document，`eles` 為規則匹配的元素陣列，可在此觸發 onView 等事件。

範例：
--
```json
"pageInit": "let ops=doc.querySelectorAll('op');[].forEach.call(ops,op=>{img.src=op.value;imgCon.appendChild(img)})"
```
