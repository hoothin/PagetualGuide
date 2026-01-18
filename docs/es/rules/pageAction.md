# pageAction (doc, eles)
>Código JavaScript que se ejecuta con cada página insertada, usando doc (documento de cada página cargada) y eles (elementos encontrados por la regla), se ejecuta después de insertar. Puedes añadir funciones como click().

Ejemplo:
--
```json
"pageAction": "let j=document.querySelector('.lazy');eles.forEach(i=>{i.src=i.dataset.srcset;})"
```
