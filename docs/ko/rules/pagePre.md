# pagePre (response, doc)
>nextLink에서 응답을 받은 뒤 실행되는 JavaScript. 응답 텍스트를 수정해 반환하거나 pageElement 배열을 직접 반환할 수 있습니다.

예시:
--
```json
"pagePre": "return decodeURI(response).replace(/[\\\\]/g,'')"
```

*`action`==0 또는 `action`==1일 때만 적용*
