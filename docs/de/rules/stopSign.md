# stopSign
>Stoppt das Laden der nächsten Seite, wenn das Zeichen passt.

Beispiel 1:
--
```json
"stopSign": ["#pagenum", ".disable"] 
```
>Stoppt, wenn "#pagenum" nicht existiert oder ".disable" existiert.

Beispiel 2:
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
>Stoppt, wenn die Zahl der 1. Gruppe `(\\d+)` der Zahl der 1. Gruppe `\\/(\\d+)` entspricht.

Beispiel 3:
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
>Stoppt, wenn Regel 1 oder Regel 2 zutrifft.

Beispiel 4:
--
```json
"stopSign": "if (doc.querySelector('.disable')) return true; if (nextLink.className === 'disable') return true; return false;" 
```
>Stoppt, wenn stopSign(doc, nextLink) true zurückgibt.
