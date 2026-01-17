# pagePre (response, doc)
>다음 링크의 URL에서 응답을 받은 후 실행할 JavaScript 코드입니다. 텍스트 응답 내용을 수정하여 반환할 수 있으며, pageElement 배열을 직접 반환할 수도 있습니다.

예시:
--
```json
"pagePre": "return decodeURI(response).replace(/[\\]/g,'')"
```

*`action`==0 또는 `action`==1일 때만 적용됩니다.*
