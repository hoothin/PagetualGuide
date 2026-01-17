# stopSign
>이 표시에 일치하면 다음 페이지 로드를 중지합니다.

예시1:
--
```json
"stopSign": ["#pagenum", ".disable"]
```
>"#pagenum"이 없거나 ".disable"이 있으면 중지합니다.

예시2:
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
>RegExp에 의해 `(\\d+)`의 첫 번째 그룹과 일치하는 "#pagenum"의 숫자가 `\\/(\\d+)`의 첫 번째 그룹과 일치하는 숫자와 같을 때 중지합니다.

예시3:
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

# 동일

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
>규칙-1 또는 규칙-2와 일치할 때 중지

예시4:
--
```json
"stopSign": "if (doc.querySelector('.disable')) return true; if (nextLink.className === 'disable') return true; return false;"
```
>stopSign(doc, nextLink)가 true를 반환하면 중지합니다.

```