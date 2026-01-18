# nextLinkByJs (doc)
>Führt JavaScript aus und gibt die Ziel‑URL der nächsten Seite zurück. `doc` ist das document jeder geladenen Seite.

Beispiel:
--
```json
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\\((\\d+)'\\);/,'$1_.html');"
```
>`doc` ist das document jeder geladenen Seite. Der Code prüft `a.curr+a` und erzeugt daraus einen Link, wenn vorhanden, sonst stoppt er.

>Du kannst einen POST‑Body mit `#p{x=1&y=2}` konstruieren, z. B. `https://www.xxx.com/pageAjax#p{x=1&y=2}`.
