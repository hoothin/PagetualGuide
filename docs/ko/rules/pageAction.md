# pageAction (doc, eles)
>doc:(로드된 모든 페이지의 문서)와 eles:(규칙으로 찾은 요소)와 함께 삽입된 모든 페이지에서 실행할 JavaScript 코드입니다. 삽입 후 실행되며, click()과 같은 함수를 추가할 수 있습니다.

예시:
```json
"pageAction": "let j=document.querySelector('.lazy');eles.forEach(i=>{i.src=i.dataset.srcset;})"
```