# pageAction (doc, eles)
>每次插入頁面後執行的 JavaScript。`doc` 為每次載入頁面的 document，`eles` 為規則匹配的元素陣列，可在此呼叫 click 等操作。

範例：
--
```json
"pageAction": "let j=document.querySelector('.lazy');eles.forEach(i=>{i.src=i.dataset.srcset;})"
```
