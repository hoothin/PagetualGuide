# css
>CSS を追加して非表示要素を表示するなどに使います。`inIframe:` で始めると next iframe のみに適用されます。

例 1：
--
```json
"css": ".card-lazy{display:none}"
```

例 2：
--
```json
"css": "inIframe:.card-lazy{display:none}"
```
>後続 iframe のみに CSS を追加します。

例 3：
--
```json
"css": ".card-lazy{display:block}inIframe:.card-lazy{display:none}"
```
>現在のページに `.card-lazy{display:block}` を追加し、後続 iframe に `.card-lazy{display:none}` を追加します。
