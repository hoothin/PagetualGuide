# pageInit (doc, eles)
>JavaScript, выполняемый перед вставкой каждой страницы, с doc (document загруженной страницы) и eles (найденные элементы). Можно вызывать события вроде onView().

Пример:
--
```json
"pageInit": "let ops=doc.querySelectorAll('op');[].forEach.call(ops,op=>{img.src=op.value;imgCon.appendChild(img)})"
```
