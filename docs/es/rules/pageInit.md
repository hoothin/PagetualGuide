# pageInit (doc, eles)
>Código JavaScript que se ejecuta antes de insertar cada página, usando doc (documento de cada página cargada) y eles (elementos encontrados). Puedes disparar eventos como onView().

Ejemplo:
--
```json
"pageInit": "let ops=doc.querySelectorAll('op');[].forEach.call(ops,op=>{img.src=op.value;imgCon.appendChild(img)})"
```
