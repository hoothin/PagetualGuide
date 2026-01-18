# stopSign
>Detiene la carga de la siguiente página cuando coincide esta señal.

Ejemplo 1:
--
```json
"stopSign": ["#pagenum", ".disable"] 
```
>Se detiene cuando "#pagenum" no existe o ".disable" existe.

Ejemplo 2:
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
>Se detiene cuando el número del primer grupo de `(\\d+)` coincide con el del primer grupo de `\\/(\\d+)` en "#pagenum".

Ejemplo 3:
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
>Se detiene cuando coincide la regla 1 o la regla 2.

Ejemplo 4:
--
```json
"stopSign": "if (doc.querySelector('.disable')) return true; if (nextLink.className === 'disable') return true; return false;" 
```
>Se detiene cuando stopSign(doc, nextLink) devuelve true.
