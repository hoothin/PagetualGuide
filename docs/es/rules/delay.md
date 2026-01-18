# delay
>Código JavaScript para retrasar la siguiente acción hasta que devuelva true. Úsalo para obtener elementos completos con carga perezosa.

Ejemplo:
--
```json
"delay": "return document.querySelector('#feed_pagenation>li.cur').innerText>=curpage"
```

*A veces la siguiente página no termina de cargar el contenido (por ejemplo, hasta hacer scroll). Usa esto para comprobar que está completa; solo se verifica al llegar al final.*
