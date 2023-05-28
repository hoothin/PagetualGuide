# iframeInit (win, iframe)
>The javaScript code to run as fast as it can before any code in iframe is running.

Example:
--
```JSON
"init": "iframeInit": "win.self=win.top;"
```

*Some site will try to detect if current page is running in a iframe to prevent auto pager. You can use this to make some hack code to fix that.*