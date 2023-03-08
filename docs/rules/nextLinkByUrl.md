# nextLinkByUrl
>If there is no next element, you can use this to generate a href from current url, [0] means RegExp string, [1] means replace string, [2] means selector or xpath of the element which must include, [3] means selector or xpath of the element which must not include, you can use {} to eval simple code like + - * /.

Example1:
--
```JSON
"nextLinkByUrl": [
    "page=(\\d+)",
    "page={$1+1}"
]
```
>Create a next link "http://abc.xxx/d?page=2" from URL of current page: "http://abc.xxx/d?page=1"

Example2:
--
```JSON
"nextLinkByUrl": [
    "page=(\\d+)&pn=(\\d+)",
    "page={$1+1}&pn={$2*10}",
    ".disable>button"
]
```
>Create a next link "http://abc.xxx/d?page=2&pn=10" from URL of current page: "http://abc.xxx/d?page=1&pn=1". Stop after a element matches ".disable>button" showed up.