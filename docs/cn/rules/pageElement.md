# pageElement
>要插入的主要内容 selector 或 XPath。可设置为数组以包含多个 pageElement。也可留空，系统会自动生成。

示例 1：
--
```json
"pageElement": ".Context>.Article"
```

示例 2：
--
```json
"pageElement": [
    ".Context1>.Article",
    ".Context2>.Article",
    ".Context3>.Article"
]
```
>当同一页面存在多个 nextLink 与 pageElement 时，可用数组包含它们，并通过“切换 next link”进行切换。
