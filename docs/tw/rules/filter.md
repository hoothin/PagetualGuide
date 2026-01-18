# filter
>過濾從下一頁插入的元素。

範例：
--
```json
"filter": "20"
```
>當元素文字字數少於 20 時移除。

```json
"filter": "😈"
```
>當元素文字包含 😈 時移除。

```json
"filter": {
    "count": 20,
    "words": "spams\\d",
    "link": "^https://spams\\.xxx",
    "selector": "div#spam"
}
```
>當文字符合 `/spams\d/`，或文字字數少於 20，或插入連結符合 `/^https:\/\/spams\.xxx/`，或存在子元素符合 `div#spam` 時移除。
