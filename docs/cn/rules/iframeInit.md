# iframeInit (win, iframe)
>在 iframe 内任何脚本运行之前尽早执行的 JavaScript。

示例：
--
```json
"iframeInit": "win.self=win.top;"
```

*部分站点会检测是否运行在 iframe 中并阻止自动翻页，可在此处写入修正代码。*
