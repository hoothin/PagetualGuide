# nextLinkByUrl
>当页面不存在 nextLink 时，可从当前 URL 生成下一页链接。[0] 为正则字符串，[1] 为替换字符串，[2] 为必须存在的元素 selector/XPath，[3] 为必须不存在的元素 selector/XPath。可用 {} 进行简单计算（+ - * /）。

示例 1：
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)",
    "&page={$1+1}"
]
```
>从当前 URL `http://abc.xxx/d?page=1` 生成下一页 `http://abc.xxx/d?page=2`。

示例 2：
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)&pn=(\\d+)",
    "&page={$1+1}&pn={$2*10}",
    ".article>.item",
    ".disable>button"
]
```
>从 `http://abc.xxx/d?page=1&pn=1` 生成 `http://abc.xxx/d?page=2&pn=10`。若未找到 `.article>.item` 或遇到 `.disable>button` 则停止。
