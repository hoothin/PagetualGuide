# nextLink
>Selector or XPath of the next page link. Disabled when set to 0. Can be an array of multiple nextLink. You may leave it empty because it will be generated automatically.

Example 1:
--
```json
"nextLink": ".page-next>a"
```


Example 2:
--
```json
"nextLink": [
    ".page1-next>a",
    ".page2-next>a",
    ".page3-next>a"
]
```
>If there are multiple nextLink on one page, put them in an array and switch using "switch next link".
