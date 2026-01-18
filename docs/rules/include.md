# include
>Selector or XPath of an element that must exist.

Example 1:
--
```json
"include": "div.content"
```
>Ignore the rule when the page does NOT contain `div.content`.

Example 2:
--
```json
"include": "//a[contains(@href,'-') and text()='next']"
```
>Ignore the rule when the page does NOT contain `//a[contains(@href,'-') and text()='next']`.

*Use include when a site is dynamic and nextLink can change.*
