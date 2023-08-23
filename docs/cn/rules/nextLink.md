# nextLink
>Selector or xpath of next page link, disable when set to 0, you can let it to be a array to contains multiple next links. You may leave it empty because it will be generated automatically.

Example1:
--
```JSON
"nextLink": ".page-next>a"
```


Example2:
--
```JSON
"nextLink": [
    ".page1-next>a",
    ".page2-next>a",
    ".page3-next>a"
]
```
>When there are multiple nextLinks on one page, you can use a array to include all of them. And switch them by click "switch next link"