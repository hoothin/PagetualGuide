# pageInit (doc, eles)
>각 페이지를 삽입하기 전에 실행되는 JavaScript. `doc`는 로드된 페이지의 document, `eles`는 규칙에 매칭된 요소 배열입니다. onView 같은 이벤트를 트리거할 수 있습니다.

예시:
--
```json
"pageInit": "let ops=doc.querySelectorAll('op');[].forEach.call(ops,op=>{img.src=op.value;imgCon.appendChild(img)})"
```
