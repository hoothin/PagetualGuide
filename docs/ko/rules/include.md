# include
>반드시 포함해야 하는 요소의 선택자 또는 xpath

예시1:
--
```json
"include": "div.content"
```
>사이트에 `div.content` 요소가 포함되어 있지 않으면 현재 규칙을 무시합니다.

예시2:
--
```json
"include": "//a[contains(@href,'-') and text()='next']"
```
>사이트에 `//a[contains(@href,'-') and text()='next']` 요소가 포함되어 있지 않으면 현재 규칙을 무시합니다.

*때로는 사이트에 동적 콘텐츠가 있어 다음 링크가 달라질 수 있습니다. 이러한 상황에서는 "include"를 추가할 수 있습니다.*