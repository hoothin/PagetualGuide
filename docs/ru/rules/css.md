# css
>Добавляет CSS, чтобы показать скрытые элементы и т. п. Если начинается с `inIframe:`, CSS применяется только в next iframe.

Пример 1:
--
```json
"css": ".card-lazy{display:none}"
```

Пример 2:
--
```json
"css": "inIframe:.card-lazy{display:none}"
```
>Добавляет CSS только в последующие iframe.

Пример 3:
--
```json
"css": ".card-lazy{display:block}inIframe:.card-lazy{display:none}"
```
>Добавляет `.card-lazy{display:block}` на текущую страницу и `.card-lazy{display:none}` в последующие iframe.
