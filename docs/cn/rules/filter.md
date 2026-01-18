# filter
>过滤从下一页插入的元素。

示例：
--
```json
"filter": "20"
```
>当元素文本字数少于 20 时移除。

```json
"filter": "😈"
```
>当元素文本包含 😈 时移除。

```json
"filter": {
    "count": 20,
    "words": "spams\\d",
    "link": "^https://spams\\.xxx",
    "selector": "div#spam"
}
```
>当文本匹配 `/spams\d/`，或文本字数少于 20，或插入链接匹配 `/^https:\/\/spams\.xxx/`，或存在子元素匹配 `div#spam` 时移除。
