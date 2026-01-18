# exclude
>존재하면 안 되는 요소(selector 또는 XPath).

예시 1:
--
```json
"exclude": "div.content"
```
>페이지에 `div.content`가 포함되어 있으면 이 규칙을 무시합니다.

예시 2:
--
```json
"exclude": "//a[contains(@href,'-') and text()='next']"
```
>페이지에 `//a[contains(@href,'-') and text()='next']`가 포함되어 있으면 이 규칙을 무시합니다.

*동적 콘텐츠로 nextLink가 바뀌는 사이트에서는 exclude가 유용합니다.*
