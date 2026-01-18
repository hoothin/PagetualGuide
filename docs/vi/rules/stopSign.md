# stopSign
>Dừng tải trang tiếp theo khi điều kiện khớp.

Ví dụ 1:
--
```json
"stopSign": ["#pagenum", ".disable"] 
```
>Dừng khi "#pagenum" không tồn tại hoặc ".disable" tồn tại.

Ví dụ 2:
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
>Dừng khi số trong nhóm 1 của `(\\d+)` bằng số trong nhóm 1 của `\\/(\\d+)` ở "#pagenum".

Ví dụ 3:
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
>Dừng khi khớp quy tắc 1 hoặc quy tắc 2.

Ví dụ 4:
--
```json
"stopSign": "if (doc.querySelector('.disable')) return true; if (nextLink.className === 'disable') return true; return false;" 
```
>Dừng khi stopSign(doc, nextLink) trả về true.
