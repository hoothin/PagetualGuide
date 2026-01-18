# pageElement
>삽입할 주요 콘텐츠의 selector 또는 XPath. 배열로 여러 pageElement를 지정할 수 있습니다. 비워두면 자동 생성됩니다.

예시 1:
--
```json
"pageElement": ".Context>.Article"
```

예시 2:
--
```json
"pageElement": [
    ".Context1>.Article",
    ".Context2>.Article",
    ".Context3>.Article"
]
```
>한 페이지에 여러 nextLink와 pageElement가 있으면 배열로 묶고 "switch next link"로 전환합니다.
