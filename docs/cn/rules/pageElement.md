# pageElement
>Selector or xpath of main content which need to insert, you can let it to be a array to contains multiple page elements.

Example1:
--
```JSON
"pageElement": ".Context>.Article"
```

Example2:
--
```JSON
"pageElement": [
    ".Context1>.Article",
    ".Context2>.Article",
    ".Context3>.Article"
]
```
>When there are multiple nextLinks and multiple pageElements on one page, you can use a array to include all of them. And switch them by click "switch next link".