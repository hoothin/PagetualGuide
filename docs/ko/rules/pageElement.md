# pageElement
>삽입할 메인 콘텐츠의 선택자 또는 xpath입니다. 여러 페이지 요소를 포함하는 배열로 설정할 수 있습니다. 자동으로 생성되므로 비워둘 수 있습니다.

예시1:
--
```json
"pageElement": ".Context>.Article"
```

예시2:
--
```json
"pageElement": [
    ".Context1>.Article",
    ".Context2>.Article",
    ".Context3>.Article"
]
```
>하나의 페이지에 여러 개의 nextLink와 여러 개의 pageElement가 있는 경우, 배열을 사용하여 모든 것을 포함할 수 있습니다. 그리고 "다음 링크 전환"을 클릭하여 전환할 수 있습니다.
