# exclude
>Selector or xpath of the element which must not include

Example1:
--
```json
"exclude": "div.content"
```
>Ignore current rule when the site include the element `div.content`

Example2:
--
```json
"exclude": "//a[contains(@href,'-') and text()='next']"
```
>Ignore current rule when the site include the element `//a[contains(@href,'-') and text()='next']`

*Sometimes a site has dynamic content, the next link will be different. You can add the "exclude" on this situation.*