# stopSign
>Stop to load next page when matching this sign

Example1:
--
```json
"stopSign": ["#pagenum", ".disable"] 
```
>Stop when "#pagenum" don't exist or ".disable" exist.

Example2:
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
>Stop when number in "#pagenum" matching 1st group of `(\\d+)` by RegExp == number matching 1st group of `\\/(\\d+)`

Example3:
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
>Stop when matching rule-1 or rule-2

Example4:
--
```json
"stopSign": "if (doc.querySelector('.disable')) return true; if (nextLink.className === 'disable') return true; return false;" 
```
>Stop when stopSign(doc, nextLink) return true

