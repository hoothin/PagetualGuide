# exclude
>Selector ou XPath do elemento que não deve existir.

Exemplo 1:
--
```json
"exclude": "div.content"
```
>Ignora a regra quando o site contém `div.content`.

Exemplo 2:
--
```json
"exclude": "//a[contains(@href,'-') and text()='next']"
```
>Ignora a regra quando o site contém `//a[contains(@href,'-') and text()='next']`.

*Em sites com conteúdo dinâmico onde o nextLink muda, use exclude.*
