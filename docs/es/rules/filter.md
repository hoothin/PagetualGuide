# filter
>Filtra los elementos insertados desde la siguiente página.

Ejemplo:
--
```json
"filter": "20"
```
>Elimina elementos cuando el número de palabras internas es menor que 20.

```json
"filter": "😈"
```
>Elimina elementos cuando el texto interno contiene 😈.

```json
"filter": {
    "count": 20,
    "words": "spams\\d",
    "link": "^https://spams\\.xxx",
    "selector": "div#spam"
}
```
>Elimina elementos si el texto coincide con `/spams\d/`, o el conteo es menor que 20, o los enlaces insertados coinciden con `/^https:\/\/spams\.xxx/`, o existe un hijo que coincida con `div#spam`.
