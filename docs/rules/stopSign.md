# stopSign
>Stop loading the next page when this condition matches.

Example 1:
--
```json
"stopSign": ["#pagenum", ".disable"] 
```
>Stop when "#pagenum" does not exist or ".disable" exists.

Example 2:
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
>Stop when the number in the first group of `(\\d+)` equals the first group of `\\/(\\d+)` in "#pagenum".

Example 3:
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
>Stop when rule 1 or rule 2 matches.

Example 4:
--
```json
"stopSign": "if (doc.querySelector('.disable')) return true; if (nextLink.className === 'disable') return true; return false;" 
```
>Stop when stopSign(doc, nextLink) returns true.
