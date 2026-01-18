# stopSign
>Para de carregar a próxima página quando esta condição for atendida.

Exemplo 1:
--
```json
"stopSign": ["#pagenum", ".disable"] 
```
>Para quando "#pagenum" não existe ou ".disable" existe.

Exemplo 2:
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
>Para quando o número do 1º grupo `(\\d+)` corresponde ao 1º grupo de `\\/(\\d+)` em "#pagenum".

Exemplo 3:
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
>Para quando a regra 1 ou a regra 2 corresponder.

Exemplo 4:
--
```json
"stopSign": "if (doc.querySelector('.disable')) return true; if (nextLink.className === 'disable') return true; return false;" 
```
>Para quando stopSign(doc, nextLink) retorna true.
