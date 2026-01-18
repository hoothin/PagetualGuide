# css
>CSS를 추가해 숨겨진 요소를 표시하는 데 사용합니다. `inIframe:`으로 시작하면 next iframe에만 적용됩니다.

예시 1:
--
```json
"css": ".card-lazy{display:none}"
```

예시 2:
--
```json
"css": "inIframe:.card-lazy{display:none}"
```
>후속 iframe에만 CSS를 추가합니다.

예시 3:
--
```json
"css": ".card-lazy{display:block}inIframe:.card-lazy{display:none}"
```
>현재 페이지에는 `.card-lazy{display:block}`을, 후속 iframe에는 `.card-lazy{display:none}`을 추가합니다.
