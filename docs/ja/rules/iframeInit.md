# iframeInit (win, iframe)
>iframe 内のあらゆるスクリプトよりも先に実行される JavaScript。

例：
--
```json
"iframeInit": "win.self=win.top;"
```

*iframe 検知で自動ページャを阻止するサイトがあります。回避用コードはここに書きます。*
