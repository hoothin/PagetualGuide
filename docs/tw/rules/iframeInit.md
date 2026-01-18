# iframeInit (win, iframe)
>在 iframe 內任何腳本執行前盡可能早執行的 JavaScript。

範例：
--
```json
"iframeInit": "win.self=win.top;"
```

*部分站點會偵測是否在 iframe 中並阻止自動翻頁，可在此處寫入修正程式。*
