# url
>対象サイトの URL 用 RegExp。性能のため、URL は先頭 500 文字のみ比較します。

例：
--
```json
"url": "^https://abc\\.com/\\d+"
```
>URL が RegExp `/^https://abc\.com/\d+/` に一致するとルールが有効になります。
