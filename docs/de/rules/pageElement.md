# pageElement
>Selector oder XPath des Hauptinhalts, der eingefügt werden soll. Kann ein Array mit mehreren pageElement sein. Leer lassen, wenn automatisch erzeugt werden soll.

Beispiel 1:
--
```json
"pageElement": ".Context>.Article"
```

Beispiel 2:
--
```json
"pageElement": [
    ".Context1>.Article",
    ".Context2>.Article",
    ".Context3>.Article"
]
```
>Wenn mehrere nextLink und pageElement vorhanden sind, kannst du sie im Array bündeln und über "switch next link" umschalten.
