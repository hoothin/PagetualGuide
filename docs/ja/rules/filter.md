# filter
>次ページから挿入する要素をフィルタします。

例：
--
```json
"filter": "20"
```
>要素の文字数が 20 未満なら削除します。

```json
"filter": "😈"
```
>要素の文字列に 😈 が含まれる場合は削除します。

```json
"filter": {
    "count": 20,
    "words": "spams\\d",
    "link": "^https://spams\\.xxx",
    "selector": "div#spam"
}
```
>文字列が `/spams\d/` に一致、または文字数が 20 未満、または挿入リンクが `/^https:\/\/spams\.xxx/` に一致、または子要素が `div#spam` に一致する場合に削除します。
