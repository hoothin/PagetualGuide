# nextLinkByUrl
>Если next‑элемента нет, можно сгенерировать href из текущего URL. [0] — строка RegExp, [1] — строка замены, [2] — selector/XPath, который должен существовать, [3] — selector/XPath, которого не должно быть. В {} можно делать простые вычисления (+ - * /).

Пример 1:
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)",
    "&page={$1+1}"
]
```
>Создаёт `http://abc.xxx/d?page=2` из `http://abc.xxx/d?page=1`.

Пример 2:
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)&pn=(\\d+)",
    "&page={$1+1}&pn={$2*10}",
    ".article>.item",
    ".disable>button"
]
```
>Создаёт `http://abc.xxx/d?page=2&pn=10` из `http://abc.xxx/d?page=1&pn=1`. Останавливается, если `.article>.item` не найден или встречен `.disable>button`.
