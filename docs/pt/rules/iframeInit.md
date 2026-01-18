# iframeInit (win, iframe)
>Código JavaScript executado o mais cedo possível antes de qualquer script no iframe.

Exemplo:
--
```json
"iframeInit": "win.self=win.top;"
```

*Alguns sites detectam iframe para bloquear o autopager. Use isso para contornar.*
