# pinUrl
>Manchmal fehlen nextLink oder pageElement. Auf true setzen, um die Regel nur anhand der url zu erzwingen, statt über intelligente Erkennung.

Beispiel:
--
```json
"pinUrl": true
```
>Wenn die URL dem gesetzten RegExp entspricht, gilt die Regel auch ohne passende Elemente.

*Beispiel: Wenn nextLink erst nach Scroll/Klick erscheint, sollte pinUrl true sein.*
