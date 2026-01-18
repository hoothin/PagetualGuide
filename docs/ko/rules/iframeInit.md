# iframeInit (win, iframe)
>iframe 안의 어떤 스크립트보다 먼저 실행되는 JavaScript.

예시:
--
```json
"iframeInit": "win.self=win.top;"
```

*iframe 감지로 자동 페이지를 막는 사이트가 있습니다. 회피용 코드를 여기에 작성합니다.*
