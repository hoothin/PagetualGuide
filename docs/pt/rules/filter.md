# filter
>Filtra os elementos inseridos da próxima página.

Exemplo:
--
```json
"filter": "20"
```
>Remove elementos quando o número de palavras internas é menor que 20.

```json
"filter": "😈"
```
>Remove elementos quando o texto interno contém 😈.

```json
"filter": {
    "count": 20,
    "words": "spams\\d",
    "link": "^https://spams\\.xxx",
    "selector": "div#spam"
}
```
>Remove elementos se o texto corresponder a `/spams\d/`, ou o número de palavras for menor que 20, ou os links inseridos corresponderem a `/^https:\/\/spams\.xxx/`, ou houver um filho que corresponda a `div#spam`.
