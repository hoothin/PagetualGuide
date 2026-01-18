# nextLink
>次ページへのリンクの selector または XPath。0 を設定すると無効化。配列で複数の nextLink を指定できます。空なら自動生成されます。

例 1：
--
```json
"nextLink": ".page-next>a"
```


例 2：
--
```json
"nextLink": [
    ".page1-next>a",
    ".page2-next>a",
    ".page3-next>a"
]
```
>1ページ内に複数の nextLink がある場合は配列でまとめ、「switch next link」で切り替えます。
