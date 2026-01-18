# exclude
>存在してはいけない要素（selector または XPath）。

例 1：
--
```json
"exclude": "div.content"
```
>ページに `div.content` が含まれる場合はこのルールを無視します。

例 2：
--
```json
"exclude": "//a[contains(@href,'-') and text()='next']"
```
>ページに `//a[contains(@href,'-') and text()='next']` が含まれる場合はこのルールを無視します。

*動的コンテンツで nextLink が変化するサイトでは exclude が有効です。*
