# stopSign
>조건에 일치하면 다음 페이지 로드를 중지합니다.

예시 1:
--
```json
"stopSign": ["#pagenum", ".disable"] 
```
>`#pagenum`이 없거나 `.disable`이 있으면 중지합니다.

예시 2:
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
>`#pagenum`의 `(\\d+)` 1번 그룹과 `\\/(\\d+)` 1번 그룹이 같으면 중지합니다.

예시 3:
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
>규칙 1 또는 규칙 2에 해당하면 중지합니다.

예시 4:
--
```json
"stopSign": "if (doc.querySelector('.disable')) return true; if (nextLink.className === 'disable') return true; return false;" 
```
>stopSign(doc, nextLink)이 true를 반환하면 중지합니다.
