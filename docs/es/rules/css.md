# css
>Añade CSS para mostrar elementos ocultos. Si empieza con `inIframe:`, ese CSS solo afecta al next iframe.

Ejemplo 1:
--
```json
"css": ".card-lazy{display:none}"
```

Ejemplo 2:
--
```json
"css": "inIframe:.card-lazy{display:none}"
```
>Solo añade CSS a los iframes siguientes.

Ejemplo 3:
--
```json
"css": ".card-lazy{display:block}inIframe:.card-lazy{display:none}"
```
>Añade `.card-lazy{display:block}` a la página actual y `.card-lazy{display:none}` a los iframes siguientes.
