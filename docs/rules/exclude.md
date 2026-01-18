# exclude
>Selector or XPath of an element that must NOT exist.

Example 1:
--
```json
"exclude": "div.content"
```
>Ignore the rule when the page contains `div.content`.

Example 2:
--
```json
"exclude": "//a[contains(@href,'-') and text()='next']"
```
>Ignore the rule when the page contains `//a[contains(@href,'-') and text()='next']`.

*Use exclude when a site is dynamic and nextLink can change.*
