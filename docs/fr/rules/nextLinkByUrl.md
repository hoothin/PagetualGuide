# nextLinkByUrl
>S’il n’y a pas d’élément next, vous pouvez générer un href à partir de l’URL actuelle. [0] = RegExp, [1] = remplacement, [2] = selector/XPath devant exister, [3] = selector/XPath ne devant pas exister. {} permet des calculs simples (+ - * /).

Exemple 1 :
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)",
    "&page={$1+1}"
]
```
>Crée le lien `http://abc.xxx/d?page=2` à partir de `http://abc.xxx/d?page=1`.

Exemple 2 :
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)&pn=(\\d+)",
    "&page={$1+1}&pn={$2*10}",
    ".article>.item",
    ".disable>button"
]
```
>Crée `http://abc.xxx/d?page=2&pn=10` à partir de `http://abc.xxx/d?page=1&pn=1`. S’arrête si `.article>.item` est absent ou si `.disable>button` est rencontré.
