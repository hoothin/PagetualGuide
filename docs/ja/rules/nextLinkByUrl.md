# nextLinkByUrl
>nextLink がない場合、現在の URL から次ページのリンクを生成します。[0] は正規表現文字列、[1] は置換文字列、[2] は必須存在要素の selector/XPath、[3] は必須非存在要素の selector/XPath。{} で簡単な計算（+ - * /）が可能です。

例 1：
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)",
    "&page={$1+1}"
]
```
>現在の URL `http://abc.xxx/d?page=1` から `http://abc.xxx/d?page=2` を生成します。

例 2：
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)&pn=(\\d+)",
    "&page={$1+1}&pn={$2*10}",
    ".article>.item",
    ".disable>button"
]
```
> `http://abc.xxx/d?page=1&pn=1` から `http://abc.xxx/d?page=2&pn=10` を生成します。`.article>.item` が無い場合や `.disable>button` に当たった場合は停止します。
