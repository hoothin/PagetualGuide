# iframeInit (win, iframe)
>Código JavaScript que se ejecuta lo antes posible antes de cualquier script en el iframe.

Ejemplo:
--
```json
"iframeInit": "win.self=win.top;"
```

*Algunos sitios detectan si la página corre en un iframe para bloquear el autopager. Usa esto para aplicar un hack de corrección.*
