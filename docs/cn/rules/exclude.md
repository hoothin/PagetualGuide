# exclude
>必须不存在的元素（selector 或 XPath）。

示例 1：
--
```json
"exclude": "div.content"
```
>当页面包含元素 `div.content` 时忽略此规则。

示例 2：
--
```json
"exclude": "//a[contains(@href,'-') and text()='next']"
```
>当页面包含元素 `//a[contains(@href,'-') and text()='next']` 时忽略此规则。

*有些站点内容是动态的，nextLink 会变化，可用 exclude 进行排除。*
