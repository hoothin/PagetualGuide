# pageElement
>挿入したい主要コンテンツの selector または XPath。配列で複数指定できます。空なら自動生成されます。

例 1：
--
```json
"pageElement": ".Context>.Article"
```

例 2：
--
```json
"pageElement": [
    ".Context1>.Article",
    ".Context2>.Article",
    ".Context3>.Article"
]
```
>同一ページに複数の nextLink と pageElement がある場合、配列でまとめて「switch next link」で切り替えます。
