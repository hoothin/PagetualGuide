# action
>0은 URL을 불러와 정적 HTML로 삽입, 1은 iframe으로 불러와 페이지의 동적 JavaScript를 실행, 2는 전체 iframe을 페이지 하단에 강제로 삽입합니다.

예시:
--
```json
"action": 1
```

+ action: 0
nextLink의 URL을 가져와 정적 HTML로 직접 삽입합니다. 동적 처리는 하지 않으며 기본값이자 가장 빠릅니다.
+ action: 1
iframe으로 URL을 불러오고 로드 완료 후 내용을 가져옵니다. 페이지가 열린 뒤 콘텐츠가 렌더링되는 경우에 적합합니다.
+ action: 2
nextLink에 해당하는 전체 페이지 iframe을 만들고, 잘라서 현재 페이지 하단에 삽입합니다.
