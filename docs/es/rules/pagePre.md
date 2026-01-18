# pagePre (response, doc)
>Código JavaScript que se ejecuta tras obtener la respuesta de la URL de nextLink. Puedes modificar el texto de respuesta y devolverlo, o devolver directamente un arreglo de pageElement.

Ejemplo:
--
```json
"pagePre": "return decodeURI(response).replace(/[\\\\]/g,'')"
```

*Solo tiene efecto cuando `action`==0 o `action`==1*
