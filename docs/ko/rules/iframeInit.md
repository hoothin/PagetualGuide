# iframeInit (win, iframe)
>iframe 내의 어떤 코드보다도 빠르게 실행되는 JavaScript 코드.

예시:
---
```json
"iframeInit": "win.self=win.top;"
```

*일부 사이트는 자동 페이저를 방지하기 위해 현재 페이지가 iframe에서 실행 중인지 감지하려고 시도합니다. 이를 사용하여 문제를 해결하기 위한 해킹 코드를 만들 수 있습니다.*