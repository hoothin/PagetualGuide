# 제외
>포함해서는 안 되는 요소의 Selector 또는 xpath

예시1:
--
```json
"exclude": "div.content"
```
>사이트에 `div.content` 요소가 포함된 경우 현재 규칙을 무시합니다.

예시2:
--
```json
"exclude": "//a[contains(@href,'-') and text()='next']"
```
>사이트에 `//a[contains(@href,'-') and text()='next']` 요소가 포함된 경우 현재 규칙을 무시합니다.

*가끔 사이트에는 동적 콘텐츠가 있어서 다음 링크가 달라질 수 있습니다. 이럴 때 "exclude"를 추가할 수 있습니다.*