# pinUrl
>有時 nextLink 或 pageElement 不存在，可設為 true，只依 url 命中規則，而不依賴智慧匹配。

範例：
--
```json
"pinUrl": true
```
>當 URL 符合先前設定的 RegExp 時，即使元素不符合規則也會啟用該規則。

*例如：站點只在捲動或點擊後才顯示 nextLink 時，建議設為 true。*
