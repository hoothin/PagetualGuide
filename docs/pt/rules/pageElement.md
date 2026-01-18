# pageElement
>Selector ou XPath do conteúdo principal a inserir. Pode ser um array com vários pageElement. Pode ficar vazio porque será gerado automaticamente.

Exemplo 1:
--
```json
"pageElement": ".Context>.Article"
```

Exemplo 2:
--
```json
"pageElement": [
    ".Context1>.Article",
    ".Context2>.Article",
    ".Context3>.Article"
]
```
>Quando há vários nextLink e pageElement em uma página, você pode incluí‑los em um array e alternar com "switch next link".
