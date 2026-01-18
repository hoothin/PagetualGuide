# exclude
>必須不存在的元素（selector 或 XPath）。

範例 1：
--
```json
"exclude": "div.content"
```
>當頁面包含元素 `div.content` 時忽略此規則。

範例 2：
--
```json
"exclude": "//a[contains(@href,'-') and text()='next']"
```
>當頁面包含元素 `//a[contains(@href,'-') and text()='next']` 時忽略此規則。

*有些站點內容是動態的，nextLink 會變化，可用 exclude 進行排除。*
