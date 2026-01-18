# stopSign
>Arrête le chargement de la page suivante lorsque le signe correspond.

Exemple 1 :
--
```json
"stopSign": ["#pagenum", ".disable"] 
```
>Arrête quand "#pagenum" n’existe pas ou que ".disable" existe.

Exemple 2 :
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
>Arrête quand le nombre du 1er groupe `(\\d+)` correspond au 1er groupe de `\\/(\\d+)` dans "#pagenum".

Exemple 3 :
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
>Arrête quand la règle 1 ou la règle 2 correspond.

Exemple 4 :
--
```json
"stopSign": "if (doc.querySelector('.disable')) return true; if (nextLink.className === 'disable') return true; return false;" 
```
>Arrête quand stopSign(doc, nextLink) retourne true.
