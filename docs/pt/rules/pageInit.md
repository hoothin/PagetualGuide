# pageInit (doc, eles)
>Código JavaScript executado antes de inserir cada página com doc (documento de cada página carregada) e eles (elementos encontrados). Você pode disparar eventos como onView().

Exemplo:
--
```json
"pageInit": "let ops=doc.querySelectorAll('op');[].forEach.call(ops,op=>{img.src=op.value;imgCon.appendChild(img)})"
```
