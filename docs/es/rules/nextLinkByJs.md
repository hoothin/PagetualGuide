# nextLinkByJs (doc)
>Usa esto para evaluar JavaScript y devolver la URL objetivo de la siguiente página con doc (documento de cada página cargada).

Ejemplo:
--
```json
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\\((\\d+)'\\);/,'$1_.html');"
```
>`doc` significa el documento de cada página cargada. Este código comprueba `a.curr+a` y devuelve un enlace desde su href si existe; de lo contrario, se detiene.

>Puedes construir un cuerpo POST usando el formato `#p{x=1&y=2}`, como devolver `https://www.xxx.com/pageAjax#p{x=1&y=2}`.
