# init (doc, win, iframe, click, enter, input, sleep)
>한 번만 실행되는 JavaScript입니다. 메인 페이지 또는 미러 iframe에 대해 동작합니다. 한 번만 필요한 초기화나 메인 페이지 상태를 iframe에 반영할 때 사용합니다.

예시:
--
```json
"init": "if (iframe == null) return; await click('#btn'); await input('#input', 'here you are'); await enter('#input');"
```
>미러 iframe에서 콘텐츠를 추출할 때 `#btn`을 클릭하고 `#input`에 `here you are`를 입력한 뒤 Enter를 실행합니다.

*이 코드는 한 번만 실행됩니다.*
