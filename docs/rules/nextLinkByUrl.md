# nextLinkByUrl
>If there is no next element, you can generate a href from the current URL. [0] is the RegExp string, [1] is the replace string, [2] is a selector/XPath that must exist, [3] is a selector/XPath that must NOT exist. You can use {} for simple math (+ - * /).

Example 1:
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)",
    "&page={$1+1}"
]
```
>Create the next link `http://abc.xxx/d?page=2` from the current URL `http://abc.xxx/d?page=1`.

Example 2:
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)&pn=(\\d+)",
    "&page={$1+1}&pn={$2*10}",
    ".article>.item",
    ".disable>button"
]
```
>Create `http://abc.xxx/d?page=2&pn=10` from `http://abc.xxx/d?page=1&pn=1`. Stop if `.article>.item` is missing or `.disable>button` is found.
