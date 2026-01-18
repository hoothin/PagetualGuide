# nextLink
>다음 페이지 링크의 selector 또는 XPath. 0으로 설정하면 비활성화됩니다. 배열로 여러 nextLink를 지정할 수 있으며, 비워두면 자동 생성됩니다.

예시 1:
--
```json
"nextLink": ".page-next>a"
```


예시 2:
--
```json
"nextLink": [
    ".page1-next>a",
    ".page2-next>a",
    ".page3-next>a"
]
```
>한 페이지에 여러 nextLink가 있으면 배열로 묶고 "switch next link"로 전환할 수 있습니다.
