# nextLinkByJs (doc)
>Выполняет JavaScript и возвращает URL следующей страницы. `doc` — document каждой загруженной страницы.

Пример:
--
```json
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\\((\\d+)'\\);/,'$1_.html');"
```
>`doc` — document каждой загруженной страницы. Код проверяет `a.curr+a` и возвращает ссылку из href, если есть; иначе останавливается.

>Можно сформировать POST‑тело через `#p{x=1&y=2}`, например `https://www.xxx.com/pageAjax#p{x=1&y=2}`.
