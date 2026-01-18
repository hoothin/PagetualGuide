# nextLink
>Selector oder XPath des Links zur nächsten Seite. Mit 0 deaktiviert. Kann ein Array mit mehreren nextLink sein. Kann leer bleiben, dann wird er automatisch generiert.

Beispiel 1:
--
```json
"nextLink": ".page-next>a"
```


Beispiel 2:
--
```json
"nextLink": [
    ".page1-next>a",
    ".page2-next>a",
    ".page3-next>a"
]
```
>Wenn mehrere nextLink vorhanden sind, kannst du sie im Array bündeln und über "switch next link" umschalten.
