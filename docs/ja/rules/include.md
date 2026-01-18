# include
>必ず存在してほしい要素（selector または XPath）。

例 1：
--
```json
"include": "div.content"
```
>ページに `div.content` が含まれない場合はこのルールを無視します。

例 2：
--
```json
"include": "//a[contains(@href,'-') and text()='next']"
```
>ページに `//a[contains(@href,'-') and text()='next']` が含まれない場合はこのルールを無視します。

*動的コンテンツで nextLink が変化するサイトでは include で条件を絞れます。*
