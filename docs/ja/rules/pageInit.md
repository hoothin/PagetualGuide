# pageInit (doc, eles)
>各ページ挿入前に実行する JavaScript。`doc` は読み込んだページの document、`eles` はルールに一致した要素配列。onView などのイベントを発火できます。

例：
--
```json
"pageInit": "let ops=doc.querySelectorAll('op');[].forEach.call(ops,op=>{img.src=op.value;imgCon.appendChild(img)})"
```
