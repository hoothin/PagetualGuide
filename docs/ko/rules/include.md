# include
>반드시 존재해야 하는 요소(selector 또는 XPath).

예시 1:
--
```json
"include": "div.content"
```
>페이지에 `div.content`가 없으면 이 규칙을 무시합니다.

예시 2:
--
```json
"include": "//a[contains(@href,'-') and text()='next']"
```
>페이지에 `//a[contains(@href,'-') and text()='next']`가 없으면 이 규칙을 무시합니다.

*동적 콘텐츠로 nextLink가 바뀌는 사이트에서는 include로 조건을 좁힐 수 있습니다.*
