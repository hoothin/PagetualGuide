# pageAction (doc, eles)
>JavaScript, das nach dem Einfügen jeder Seite ausgeführt wird, mit doc (document der geladenen Seite) und eles (Elemente aus der Regel). Hier kannst du click() usw. aufrufen.

Beispiel:
--
```json
"pageAction": "let j=document.querySelector('.lazy');eles.forEach(i=>{i.src=i.dataset.srcset;})"
```
