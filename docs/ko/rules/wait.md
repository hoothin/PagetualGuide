# wait (doc)
>사이트와 URL이 일치한다고 확신할 때 페이지 준비를 기다리는 시간입니다. 페이지가 준비되었는지 확인하기 위해 부울 값을 반환하는 JavaScript 코드를 사용할 수도 있습니다.

예시1:
--
```json
"wait": 500
```
>규칙이 일치하기 전에 500ms마다 확인합니다.

예시2:
--
```json
"wait": "await fetch('https://xxx.xxx');let img=doc.querySelector('ul.list img');return img!=null"
```
>코드가 true를 반환하기 전에 반복적으로 확인합니다. `doc`은 사이트의 문서를 의미하며, 이 코드는 "ul.list img" 요소의 존재 여부를 확인합니다.

*`wait`를 설정하면 현재 규칙이 URL과 일치할 때 적용됩니다.*