# pinUrl
>A veces nextLink o pageElement no existen. Establécelo en true para fijar la regla solo con url en lugar de buscar elementos con reglas inteligentes.

Ejemplo:
--
```json
"pinUrl": true
```
>Cuando la URL coincide con el RegExp que configuraste, la regla se aplica aunque los elementos no coincidan.

*Por ejemplo, si el sitio muestra nextLink solo después de hacer scroll o clic, configura pinUrl en true.*
