# nextLink
>下一頁連結的 selector 或 XPath。設為 0 代表停用。可設為陣列以包含多個 nextLink，也可留空由系統自動產生。

範例 1：
--
```json
"nextLink": ".page-next>a"
```


範例 2：
--
```json
"nextLink": [
    ".page1-next>a",
    ".page2-next>a",
    ".page3-next>a"
]
```
>當同一頁存在多個 nextLink 時，可用陣列包含它們，並透過「切換 next link」進行切換。
