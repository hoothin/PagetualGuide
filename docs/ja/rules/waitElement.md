# waitElement
>配列 `["exist", "not exist"]` で指定します。「必須で存在する要素 selector/XPath（遅延ロード向け）」と「必須で存在しない要素 selector/XPath（プレースホルダー消滅待ち）」を組み合わせます。

例：
--
```json
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```
>`.summary` が出現し、`#popular.fade:not(.in)` が消えるまで繰り返しチェックします。

```json
"waitElement": ".summary"
```
>`.summary` が出現するまで繰り返しチェックします。

```json
"waitElement": "!#popular.fade:not(.in)"

# same as

"waitElement": [
    "",
    "#popular.fade:not(.in)"
]
```
>`#popular.fade:not(.in)` が消えるまで繰り返しチェックします。

*`waitElement` は `wait` と同様に、URL 一致時にルールが有効になります。「存在しない」を指定するだけの場合は「存在する」を "" にできます。「存在しない」を指定すると、Pagetual は対象の遅延ロードを誘発しようとします。*
