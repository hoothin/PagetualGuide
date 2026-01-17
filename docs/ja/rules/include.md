# include
>Selector or xpath of the element which must include

Example1:
--
```json
"include": "div.content"
```
>Ignore current rule when the site don't include the element `div.content`

Example2:
--
```json
"include": "//a[contains(@href,'-') and text()='next']"
```
>Ignore current rule when the site don't include the element `//a[contains(@href,'-') and text()='next']`

*Sometimes a site has dynamic content, the next link will be different. You can add the "include" on this situation.*