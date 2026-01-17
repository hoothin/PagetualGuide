# nextLink
>다음 페이지 링크의 선택자 또는 xpath입니다. 0으로 설정하면 비활성화되며, 여러 다음 링크를 포함하는 배열로 설정할 수 있습니다. 자동으로 생성되므로 비워둘 수 있습니다.

예시1:
--
```json
"nextLink": ".page-next>a"
```


예시2:
--
```json
"nextLink": [
    ".page1-next>a",
    ".page2-next>a",
    ".page3-next>a"
]
```
>한 페이지에 여러 nextLink가 있는 경우, 배열을 사용하여 모두 포함할 수 있습니다. 그리고 "switch next link"를 클릭하여 전환할 수 있습니다.
