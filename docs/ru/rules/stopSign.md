# stopSign
>Останавливает загрузку следующей страницы при совпадении условия.

Пример 1:
--
```json
"stopSign": ["#pagenum", ".disable"] 
```
>Останавливается, если "#pagenum" не существует или ".disable" существует.

Пример 2:
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
>Останавливается, если число из 1‑й группы `(\\d+)` равно числу из 1‑й группы `\\/(\\d+)` в "#pagenum".

Пример 3:
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
>Останавливается при совпадении правила 1 или 2.

Пример 4:
--
```json
"stopSign": "if (doc.querySelector('.disable')) return true; if (nextLink.className === 'disable') return true; return false;" 
```
>Останавливается, если stopSign(doc, nextLink) возвращает true.
