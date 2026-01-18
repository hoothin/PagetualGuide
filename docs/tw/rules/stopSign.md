# stopSign
>符合條件時停止載入下一頁。

範例 1：
--
```json
"stopSign": ["#pagenum", ".disable"] 
```
>`#pagenum` 不存在或 `.disable` 存在時停止。

範例 2：
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
>當 `#pagenum` 中匹配 `(\\d+)` 的第 1 組與匹配 `\\/(\\d+)` 的第 1 組數字相等時停止。

範例 3：
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
>符合規則 1 或規則 2 時停止。

範例 4：
--
```json
"stopSign": "if (doc.querySelector('.disable')) return true; if (nextLink.className === 'disable') return true; return false;" 
```
>當 stopSign(doc, nextLink) 回傳 true 時停止。
