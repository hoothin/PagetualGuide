# pageInit (doc, eles)
>JavaScript, das vor dem Einfügen jeder Seite ausgeführt wird, mit doc (document der geladenen Seite) und eles (gefundene Elemente). Du kannst Events wie onView() auslösen.

Beispiel:
--
```json
"pageInit": "let ops=doc.querySelectorAll('op');[].forEach.call(ops,op=>{img.src=op.value;imgCon.appendChild(img)})"
```
