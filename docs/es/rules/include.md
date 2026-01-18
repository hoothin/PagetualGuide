# include
>Selector o XPath del elemento que debe existir.

Ejemplo 1:
--
```json
"include": "div.content"
```
>Ignora la regla cuando el sitio NO incluye `div.content`.

Ejemplo 2:
--
```json
"include": "//a[contains(@href,'-') and text()='next']"
```
>Ignora la regla cuando el sitio NO incluye `//a[contains(@href,'-') and text()='next']`.

*A veces un sitio tiene contenido dinámico y el nextLink cambia; usa include en ese caso.*
