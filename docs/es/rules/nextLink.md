# nextLink
>Selector o XPath del enlace a la siguiente página. Se desactiva si se establece en 0. Puede ser un arreglo con varios nextLink. Puedes dejarlo vacío porque se generará automáticamente.

Ejemplo 1:
--
```json
"nextLink": ".page-next>a"
```


Ejemplo 2:
--
```json
"nextLink": [
    ".page1-next>a",
    ".page2-next>a",
    ".page3-next>a"
]
```
>Cuando hay múltiples nextLink en una página, puedes incluirlos en un arreglo y cambiar usando "switch next link".
