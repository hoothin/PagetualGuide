# wait (doc)
>페이지 준비가 될 때까지 대기하는 시간(ms). URL이 확실히 일치한다면, true/false를 반환하는 JavaScript로 준비 여부를 판단할 수 있습니다.

예시 1:
--
```json
"wait": 500
```
>500ms마다 검사해 매칭될 때까지 대기합니다.

예시 2:
--
```json
"wait": "await fetch('https://xxx.xxx');let img=doc.querySelector('ul.list img');return img!=null"
```
>코드가 true를 반환할 때까지 반복 확인합니다. `doc`는 사이트의 document를 의미하며, 이 예시는 `ul.list img` 존재 여부를 확인합니다.

*`wait`를 설정하면 URL이 매칭될 때 규칙이 적용됩니다.*
