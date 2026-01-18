# waitElement
>Arreglo `["exist", "not exist"]` que contiene el selector/XPath de elementos que deben existir (para lazyload) y el de elementos que no deben existir (placeholders que deben desaparecer).

Ejemplo:
--
```json
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```
>Repite la comprobación hasta que aparezca ".summary" y desaparezca "#popular.fade:not(.in)".

```json
"waitElement": ".summary"
```
>Repite la comprobación hasta que aparezca ".summary".

```json
"waitElement": "!#popular.fade:not(.in)"

# same as

"waitElement": [
    "",
    "#popular.fade:not(.in)"
]
```
>Repite la comprobación hasta que desaparezca "#popular.fade:not(.in)".

*Configurar `waitElement` es igual que `wait`: la regla se activa cuando la URL coincide. Si no quieres definir "exist", deja "". Al definir "not exist", Pagetual intentará disparar la carga perezosa del elemento objetivo.*
