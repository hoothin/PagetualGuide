# include
>必须存在的元素（selector 或 XPath）。

示例 1：
--
```json
"include": "div.content"
```
>当页面不包含元素 `div.content` 时忽略此规则。

示例 2：
--
```json
"include": "//a[contains(@href,'-') and text()='next']"
```
>当页面不包含元素 `//a[contains(@href,'-') and text()='next']` 时忽略此规则。

*有些站点内容是动态的，nextLink 会变化，可用 include 进行限定。*
