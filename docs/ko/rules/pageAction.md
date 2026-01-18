# pageAction (doc, eles)
>각 페이지를 삽입한 뒤 실행되는 JavaScript. `doc`는 로드된 페이지의 document, `eles`는 규칙에 매칭된 요소 배열입니다. click() 등의 함수를 호출할 수 있습니다.

예시:
--
```json
"pageAction": "let j=document.querySelector('.lazy');eles.forEach(i=>{i.src=i.dataset.srcset;})"
```
