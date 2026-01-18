# stopSign
>满足条件时停止加载下一页。

示例 1：
--
```json
"stopSign": ["#pagenum", ".disable"] 
```
>`#pagenum` 不存在或 `.disable` 存在时停止。

示例 2：
--
```json
"stopSign": [
    [
        "#pagenum",
        "(\\d+)"
    ],
    [
        "#pagenum",
        "\\/(\\d+)"
    ]
]
```
>当 `#pagenum` 中匹配 `(\\d+)` 的第 1 组与匹配 `\\/(\\d+)` 的第 1 组数字相等时停止。

示例 3：
--
```json
"stopSign": ["#pagenum", ".disable",
    [
        "#pagenum",
        "(\\d+)"
    ],
    [
        "#pagenum",
        "\\/(\\d+)"
    ]
] 

# same as

"stopSign": {
    "include": "#pagenum",
    "exclude": ".disable",
    "pageNum": [
        "#pagenum",
        "(\\d+)",
        "#pagenum",
        "\\/(\\d+)"
    ]
}
```
>匹配规则 1 或规则 2 时停止。

示例 4：
--
```json
"stopSign": "if (doc.querySelector('.disable')) return true; if (nextLink.className === 'disable') return true; return false;" 
```
>当 stopSign(doc, nextLink) 返回 true 时停止。
