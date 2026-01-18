# iframeInit (win, iframe)
>JavaScript that runs as early as possible before any script inside the iframe.

Example:
--
```json
"iframeInit": "win.self=win.top;"
```

*Some sites detect if they run in an iframe and block autopager. Use this for a workaround.*
