# nextLink
>Selector ou XPath do link da próxima página. Desativado quando definido como 0. Pode ser um array com vários nextLink. Pode ficar vazio porque será gerado automaticamente.

Exemplo 1:
--
```json
"nextLink": ".page-next>a"
```


Exemplo 2:
--
```json
"nextLink": [
    ".page1-next>a",
    ".page2-next>a",
    ".page3-next>a"
]
```
>Quando há vários nextLink em uma página, você pode incluí‑los em um array e alternar com "switch next link".
