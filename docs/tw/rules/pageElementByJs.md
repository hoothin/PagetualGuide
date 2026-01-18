# pageElementByJs (over, pageNum)
>執行 JavaScript 並建立要插入的元素。需要呼叫 `over(eles)` 回傳元素陣列。`pageNum` 為目前頁碼。

範例：
--
```json
"pageElementByJs": "fetch(url.replace(/&offset=\\d+/,'') + '&offset=' + (pageNum + 1), {headers:{'X-Requested-With': 'XMLHttpRequest'}}).then(res => res.json()).then(res => {over(eles)})"
```
>建立元素並在載入完成後透過 `over` 回傳。

*當目前頁沒有 nextLink 時，可用此項產生要插入的新元素。*
