# pageInit (doc, eles)
>Code JavaScript exécuté avant l’insertion de chaque page avec doc (document de chaque page chargée) et eles (éléments trouvés). Vous pouvez déclencher des événements comme onView().

Exemple :
--
```json
"pageInit": "let ops=doc.querySelectorAll('op');[].forEach.call(ops,op=>{img.src=op.value;imgCon.appendChild(img)})"
```
