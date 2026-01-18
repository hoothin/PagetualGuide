# pageElement
>Selector or XPath of the main content to insert. Can be an array of multiple pageElement. You may leave it empty because it will be generated automatically.

Example 1:
--
```json
"pageElement": ".Context>.Article"
```

Example 2:
--
```json
"pageElement": [
    ".Context1>.Article",
    ".Context2>.Article",
    ".Context3>.Article"
]
```
>If there are multiple nextLink and pageElement on one page, put them in an array and switch using "switch next link".
