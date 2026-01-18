# include
>Selector ou XPath do elemento que deve existir.

Exemplo 1:
--
```json
"include": "div.content"
```
>Ignora a regra quando o site não contém `div.content`.

Exemplo 2:
--
```json
"include": "//a[contains(@href,'-') and text()='next']"
```
>Ignora a regra quando o site não contém `//a[contains(@href,'-') and text()='next']`.

*Em sites com conteúdo dinâmico onde o nextLink muda, use include.*
