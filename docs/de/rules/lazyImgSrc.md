# lazyImgSrc
>Attribut des Bildes, das auf das echte src zeigt. Kann als ["lazysrc", "removeProp1,removeProp2"] gesetzt werden, um Bild‑Props zu entfernen.

Beispiel 1:
--
```json
"lazyImgSrc": "data-cfsrc"
```
>Holt die URL aus "data-cfsrc" und setzt sie als src des Bildes.

Beispiel 2:
--
```json
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```
>Manchmal überschreibt eine Eigenschaft das gesetzte src; diese muss entfernt werden.
