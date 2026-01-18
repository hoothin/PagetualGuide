# exclude
>Selector o XPath del elemento que NO debe existir.

Ejemplo 1:
--
```json
"exclude": "div.content"
```
>Ignora la regla cuando el sitio incluye `div.content`.

Ejemplo 2:
--
```json
"exclude": "//a[contains(@href,'-') and text()='next']"
```
>Ignora la regla cuando el sitio incluye `//a[contains(@href,'-') and text()='next']`.

*A veces un sitio tiene contenido dinámico y el nextLink cambia; usa exclude en ese caso.*
