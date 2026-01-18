# iframeInit (win, iframe)
>JavaScript, который выполняется как можно раньше до любых скриптов в iframe.

Пример:
--
```json
"iframeInit": "win.self=win.top;"
```

*Некоторые сайты детектят iframe, чтобы блокировать автопейджер. Здесь можно написать обход.*
