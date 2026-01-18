# waitElement
>Массив `["exist", "not exist"]` со selector/XPath элемента, который должен существовать (lazyload), и элемента, который не должен существовать (placeholder должен исчезнуть).

Пример:
--
```json
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```
>Повторяет проверку, пока ".summary" не появится и "#popular.fade:not(.in)" не исчезнет.

```json
"waitElement": ".summary"
```
>Повторяет проверку, пока ".summary" не появится.

```json
"waitElement": "!#popular.fade:not(.in)"

# same as

"waitElement": [
    "",
    "#popular.fade:not(.in)"
]
```
>Повторяет проверку, пока "#popular.fade:not(.in)" не исчезнет.

*`waitElement` работает как `wait`: правило применяется при совпадении URL. Если не нужно "exist", оставьте "". При "not exist" Pagetual попытается вызвать lazyload целевого элемента.*
