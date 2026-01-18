# pageElement
>Selector o XPath del contenido principal a insertar. Puede ser un arreglo con varios pageElement. Puedes dejarlo vacío porque se generará automáticamente.

Ejemplo 1:
--
```json
"pageElement": ".Context>.Article"
```

Ejemplo 2:
--
```json
"pageElement": [
    ".Context1>.Article",
    ".Context2>.Article",
    ".Context3>.Article"
]
```
>Cuando hay múltiples nextLink y pageElement en una misma página, puedes incluirlos en un arreglo y cambiar usando "switch next link".
