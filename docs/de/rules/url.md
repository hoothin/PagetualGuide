# url
>RegExp für die URL der Ziel‑Site. Aus Performance‑Gründen werden nur die ersten 500 Zeichen verglichen.

Beispiel:
--
```json
"url": "^https://abc\\.com/\\d+"
```
>Wenn die URL dem RegExp `/^https://abc\.com/\d+/` entspricht, gilt die Regel.
