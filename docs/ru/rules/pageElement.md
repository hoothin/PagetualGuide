# pageElement
>Selector или XPath основного контента для вставки. Можно указать массив нескольких pageElement. Можно оставить пустым — будет сгенерировано автоматически.

Пример 1:
--
```json
"pageElement": ".Context>.Article"
```

Пример 2:
--
```json
"pageElement": [
    ".Context1>.Article",
    ".Context2>.Article",
    ".Context3>.Article"
]
```
>Если на странице несколько nextLink и pageElement, можно объединить их в массив и переключать через "switch next link".
