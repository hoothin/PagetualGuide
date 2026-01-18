# pageElementByJs (over, pageNum)
>执行 JavaScript 并创建要插入的元素。需要调用 `over(eles)` 回传元素数组。`pageNum` 为当前页号。

示例：
--
```json
"pageElementByJs": "fetch(url.replace(/&offset=\\d+/,'') + '&offset=' + (pageNum + 1), {headers:{'X-Requested-With': 'XMLHttpRequest'}}).then(res => res.json()).then(res => {over(eles)})"
```
>创建元素并在加载完成后通过 `over` 返回。

*当当前页没有 nextLink 时，可用此项生成要插入的新元素。*
