# pageInit (doc, eles)
>doc:(로드된 모든 페이지의 문서)와 eles:(규칙으로 찾은 요소)와 함께 삽입되는 모든 페이지에서 실행되는 자바스크립트 코드입니다. 삽입 전에 실행되며, onView()와 같은 이벤트를 트리거할 수 있습니다.

예시:
---
```json
"pageInit": "let ops=doc.querySelectorAll('op');[].forEach.call(ops,op=>{img.src=op.value;imgCon.appendChild(img)})"
```