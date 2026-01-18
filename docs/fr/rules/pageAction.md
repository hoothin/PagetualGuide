# pageAction (doc, eles)
>Code JavaScript exécuté à chaque insertion de page avec doc (document de chaque page chargée) et eles (éléments trouvés par la règle). S’exécute après insertion ; vous pouvez appeler click(), etc.

Exemple :
--
```json
"pageAction": "let j=document.querySelector('.lazy');eles.forEach(i=>{i.src=i.dataset.srcset;})"
```
