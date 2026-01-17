# css
>숨겨진 요소를 표시할 수 있도록 CSS를 추가하세요. "inIframe:"으로 시작하면 이 CSS는 다음 iframe 페이지에만 적용됩니다.

예시1:
--
```json
"css": ".card-lazy{display:none}"
```

예시2:
--
```json
"css": "inIframe:.card-lazy{display:none}"
```
>다음 iframe에만 CSS를 추가하세요.

예시3:
--
```json
"css": ".card-lazy{display:block}inIframe:.card-lazy{display:none}"
```
>현재 페이지에 `.card-lazy{display:block}`을 추가하고 다음 iframe에 `.card-lazy{display:none}`을 추가합니다.
