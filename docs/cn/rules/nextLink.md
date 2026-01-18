# nextLink
>下一页链接的 selector 或 XPath。设为 0 表示禁用。可设置为数组以包含多个 nextLink。也可留空，系统会自动生成。

示例 1：
--
```json
"nextLink": ".page-next>a"
```


示例 2：
--
```json
"nextLink": [
    ".page1-next>a",
    ".page2-next>a",
    ".page3-next>a"
]
```
>当一个页面存在多个 nextLink 时，可用数组包含它们，并通过“切换 next link”进行切换。
