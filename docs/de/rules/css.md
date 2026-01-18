# css
>Fügt CSS hinzu, z. B. um versteckte Elemente zu zeigen. Beginnt es mit `inIframe:`, wirkt es nur im next iframe.

Beispiel 1:
--
```json
"css": ".card-lazy{display:none}"
```

Beispiel 2:
--
```json
"css": "inIframe:.card-lazy{display:none}"
```
>Fügt CSS nur in den folgenden iframes hinzu.

Beispiel 3:
--
```json
"css": ".card-lazy{display:block}inIframe:.card-lazy{display:none}"
```
>Fügt `.card-lazy{display:block}` auf der aktuellen Seite und `.card-lazy{display:none}` in den folgenden iframes hinzu.
