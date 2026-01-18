# pageElementByJs (over, pageNum)
>Evaluate JavaScript to create elements to insert. You must call over(eles) to return the element array. pageNum is the current page number.

Example:
--
```json
"pageElementByJs": "fetch(url.replace(/&offset=\\d+/,'') + '&offset=' + (pageNum + 1), {headers:{'X-Requested-With': 'XMLHttpRequest'}}).then(res => res.json()).then(res => {over(eles)})"
```
>Create elements and return them via `over` after loading.

*If there is no nextLink on the current page, use this to create new elements to insert.*
