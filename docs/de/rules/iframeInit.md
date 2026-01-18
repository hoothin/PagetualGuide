# iframeInit (win, iframe)
>JavaScript, das so früh wie möglich vor allen Skripten im iframe ausgeführt wird.

Beispiel:
--
```json
"iframeInit": "win.self=win.top;"
```

*Einige Sites erkennen iframes, um Autopager zu blockieren. Hier kannst du dagegensteuern.*
