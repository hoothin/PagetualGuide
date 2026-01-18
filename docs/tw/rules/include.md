# include
>必須存在的元素（selector 或 XPath）。

範例 1：
--
```json
"include": "div.content"
```
>當頁面不包含元素 `div.content` 時忽略此規則。

範例 2：
--
```json
"include": "//a[contains(@href,'-') and text()='next']"
```
>當頁面不包含元素 `//a[contains(@href,'-') and text()='next']` 時忽略此規則。

*有些站點內容是動態的，nextLink 會變化，可用 include 進行限定。*
