# nextLinkByJs (doc)
>Évalue du JavaScript et renvoie l’URL cible de la page suivante avec doc (document de chaque page chargée).

Exemple :
--
```json
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\\((\\d+)'\\);/,'$1_.html');"
```
>`doc` correspond au document de chaque page chargée. Ce code vérifie `a.curr+a` et renvoie un lien depuis son href si présent, sinon s’arrête.

>Vous pouvez construire un corps POST avec `#p{x=1&y=2}`, par exemple `https://www.xxx.com/pageAjax#p{x=1&y=2}`.
