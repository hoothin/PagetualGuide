# pageElement
>要插入的主要內容 selector 或 XPath。可設為陣列以包含多個 pageElement，也可留空由系統自動產生。

範例 1：
--
```json
"pageElement": ".Context>.Article"
```

範例 2：
--
```json
"pageElement": [
    ".Context1>.Article",
    ".Context2>.Article",
    ".Context3>.Article"
]
```
>當同一頁存在多個 nextLink 與 pageElement 時，可用陣列包含它們，並透過「切換 next link」進行切換。
