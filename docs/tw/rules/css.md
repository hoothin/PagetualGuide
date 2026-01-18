# css
>新增 CSS，用於顯示隱藏內容等；以 `inIframe:` 開頭時，僅對 next iframe 生效。

範例 1：
--
```json
"css": ".card-lazy{display:none}"
```

範例 2：
--
```json
"css": "inIframe:.card-lazy{display:none}"
```
>只對後續 iframe 新增 CSS。

範例 3：
--
```json
"css": ".card-lazy{display:block}inIframe:.card-lazy{display:none}"
```
>對目前頁新增 `.card-lazy{display:block}`，對後續 iframe 新增 `.card-lazy{display:none}`。
