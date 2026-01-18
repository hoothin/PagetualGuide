# iframeInit (win, iframe)
>Code JavaScript exécuté le plus tôt possible avant tout script dans l’iframe.

Exemple :
--
```json
"iframeInit": "win.self=win.top;"
```

*Certains sites détectent l’exécution dans un iframe pour bloquer l’autopager. Utilisez ceci pour contourner.*
