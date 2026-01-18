# stopSign
>条件に一致したら次ページの読み込みを停止します。

例 1：
--
```json
"stopSign": ["#pagenum", ".disable"] 
```
>`#pagenum` が存在しない、または `.disable` が存在する場合に停止します。

例 2：
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
>`#pagenum` の `(\\d+)` の 1 つ目のグループと `\\/(\\d+)` の 1 つ目のグループが一致したら停止します。

例 3：
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
>ルール 1 またはルール 2 に一致したら停止します。

例 4：
--
```json
"stopSign": "if (doc.querySelector('.disable')) return true; if (nextLink.className === 'disable') return true; return false;" 
```
>stopSign(doc, nextLink) が true を返したら停止します。
