# nextLinkByUrl
>If there is no next element, you can use this to generate a href from current url, [0] means RegExp string, [1] means replace string, [2] means selector or xpath of the element which must include, [3] means selector or xpath of the element which must not include, you can use {} to eval simple code like + - * /.

Example1:
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)",
    "&page={$1+1}"
]
```
>Create a next link "http://abc.xxx/d?page=2" from URL of current page: "http://abc.xxx/d?page=1"

Example2:
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)&pn=(\\d+)",
    "&page={$1+1}&pn={$2*10}",
    ".article>.item",
    ".disable>button"
]
```
>Create a next link "http://abc.xxx/d?page=2&pn=10" from URL of current page: "http://abc.xxx/d?page=1&pn=1". Stop if element '.article>.item' is not found or '.disable>button' is encountered.