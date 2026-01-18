# pageInit (doc, eles)
>每次插入页面前执行的 JavaScript。`doc` 为每次加载页面的 document，`eles` 为规则匹配的元素数组，可在此触发 onView 等事件。

示例：
--
```json
"pageInit": "let ops=doc.querySelectorAll('op');[].forEach.call(ops,op=>{img.src=op.value;imgCon.appendChild(img)})"
```
