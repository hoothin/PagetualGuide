# nextLinkByUrl
>Si no hay un elemento next, puedes generar un href desde la URL actual. [0] es la cadena RegExp, [1] la cadena de reemplazo, [2] el selector/XPath que debe existir, [3] el selector/XPath que NO debe existir. Puedes usar {} para evaluar expresiones simples (+ - * /).

Ejemplo 1:
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)",
    "&page={$1+1}"
]
```
>Crea el siguiente enlace `http://abc.xxx/d?page=2` a partir de la URL actual `http://abc.xxx/d?page=1`.

Ejemplo 2:
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)&pn=(\\d+)",
    "&page={$1+1}&pn={$2*10}",
    ".article>.item",
    ".disable>button"
]
```
>Crea el siguiente enlace `http://abc.xxx/d?page=2&pn=10` a partir de `http://abc.xxx/d?page=1&pn=1`. Se detiene si no se encuentra `.article>.item` o si aparece `.disable>button`.
