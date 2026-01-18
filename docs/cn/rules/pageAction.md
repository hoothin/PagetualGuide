# pageAction (doc, eles)
>每次插入页面后执行的 JavaScript。`doc` 为每次加载页面的 document，`eles` 为规则匹配的元素数组，可在此调用 click 等操作。

示例：
--
```json
"pageAction": "let j=document.querySelector('.lazy');eles.forEach(i=>{i.src=i.dataset.srcset;})"
```
