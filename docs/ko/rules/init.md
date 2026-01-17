# init (doc, win, iframe, click, enter, input, sleep)
>현재 메인 페이지 또는 미러 iframe과 함께 doc:(메인 페이지 또는 미러 iframe의 문서)로 한 번만 실행되는 JavaScript 코드입니다. 특정 코드를 한 번만 실행하거나 메인 페이지의 상태를 iframe에 미러링하려면 이 기능을 사용하십시오.

예시:
--
```json
"init": "if (iframe == null) return; await click('#btn'); await input('#input', 'here you are'); await enter('#input');"
```
>미러 iframe에서 콘텐츠를 추출하는 동안, 먼저 '#btn'을 클릭한 다음 '#input'에 'here you are'를 입력하고 마지막으로 '#input'에서 'enter'를 누릅니다.

*이 코드는 한 번만 실행되므로, 한 번만 실행하고 싶은 작업을 완료하는 데 사용하십시오.*