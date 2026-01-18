# filter
>Filtert die aus der nächsten Seite eingefügten Elemente.

Beispiel:
--
```json
"filter": "20"
```
>Entfernt Elemente, wenn die Wortanzahl unter 20 liegt.

```json
"filter": "😈"
```
>Entfernt Elemente, wenn der Text 😈 enthält.

```json
"filter": {
    "count": 20,
    "words": "spams\\d",
    "link": "^https://spams\\.xxx",
    "selector": "div#spam"
}
```
>Entfernt Elemente, wenn der Text `/spams\d/` entspricht, oder die Wortanzahl unter 20 liegt, oder eingefügte Links `/^https:\/\/spams\.xxx/` entsprechen, oder ein Kindelement `div#spam` entspricht.
