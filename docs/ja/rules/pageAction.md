# pageAction (doc, eles)
>各ページ挿入後に実行する JavaScript。`doc` は読み込んだページの document、`eles` はルールに一致した要素配列。click() などを呼び出せます。

例：
--
```json
"pageAction": "let j=document.querySelector('.lazy');eles.forEach(i=>{i.src=i.dataset.srcset;})"
```
