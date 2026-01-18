# nextLinkByJs (doc)
>Executa JavaScript e retorna a URL alvo da próxima página com doc (documento de cada página carregada).

Exemplo:
--
```json
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\\((\\d+)'\\);/,'$1_.html');"
```
>`doc` é o documento de cada página carregada. Este código verifica `a.curr+a` e retorna um link do href quando existe; caso contrário, para.

>Você pode construir um corpo POST usando `#p{x=1&y=2}`, por exemplo `https://www.xxx.com/pageAjax#p{x=1&y=2}`.
