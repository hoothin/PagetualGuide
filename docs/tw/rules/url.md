# url
>目標站點 URL 的 RegExp。為確保效能，URL 僅截取前 500 個字元用於比對。

範例：
--
```json
"url": "^https://abc\\.com/\\d+"
```
>當 URL 符合 RegExp `/^https://abc\.com/\d+/` 時，該規則生效。
