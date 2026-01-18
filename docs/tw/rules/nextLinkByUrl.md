# nextLinkByUrl
>當頁面不存在 nextLink 時，可由目前 URL 產生下一頁連結。[0] 為正則字串，[1] 為取代字串，[2] 為必須存在的元素 selector/XPath，[3] 為必須不存在的元素 selector/XPath。可用 {} 進行簡單運算（+ - * /）。

範例 1：
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)",
    "&page={$1+1}"
]
```
>由目前 URL `http://abc.xxx/d?page=1` 產生下一頁 `http://abc.xxx/d?page=2`。

範例 2：
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)&pn=(\\d+)",
    "&page={$1+1}&pn={$2*10}",
    ".article>.item",
    ".disable>button"
]
```
>由 `http://abc.xxx/d?page=1&pn=1` 產生 `http://abc.xxx/d?page=2&pn=10`。若找不到 `.article>.item` 或遇到 `.disable>button` 則停止。
