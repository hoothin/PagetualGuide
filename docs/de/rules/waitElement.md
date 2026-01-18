# waitElement
>Array `["exist", "not exist"]` mit „muss existieren“ (Lazyload) und „darf nicht existieren“ (Platzhalter verschwinden).

Beispiel:
--
```json
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```
>Prüft, bis ".summary" erscheint und "#popular.fade:not(.in)" verschwindet.

```json
"waitElement": ".summary"
```
>Prüft, bis ".summary" erscheint.

```json
"waitElement": "!#popular.fade:not(.in)"

# same as

"waitElement": [
    "",
    "#popular.fade:not(.in)"
]
```
>Prüft, bis "#popular.fade:not(.in)" verschwindet.

*`waitElement` verhält sich wie `wait`: Die Regel gilt, sobald die URL passt. Wenn du „exist“ nicht brauchst, lass es leer "". Bei „not exist“ versucht Pagetual, das Lazyload des Ziels auszulösen.*
