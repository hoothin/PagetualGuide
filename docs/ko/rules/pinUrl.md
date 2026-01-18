# pinUrl
>nextLink나 pageElement가 없을 때 true로 설정하면 url만으로 규칙을 고정할 수 있습니다(자동 매칭을 사용하지 않음).

예시:
--
```json
"pinUrl": true
```
>URL이 미리 설정한 RegExp와 일치하면 요소가 일치하지 않아도 규칙이 적용됩니다.

*예: 스크롤 또는 클릭 후에만 nextLink가 표시되는 사이트에서는 true를 권장합니다.*
