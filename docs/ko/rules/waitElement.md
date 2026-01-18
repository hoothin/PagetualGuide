# waitElement
>배열 `["exist", "not exist"]`로 지정합니다. “반드시 존재해야 하는 요소 selector/XPath(지연 로딩용)”와 “반드시 존재하지 않아야 하는 요소 selector/XPath(플레이스홀더 제거 대기)”를 함께 사용합니다.

예시:
--
```json
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```
>`.summary`가 나타나고 `#popular.fade:not(.in)`이 사라질 때까지 반복 확인합니다.

```json
"waitElement": ".summary"
```
>`.summary`가 나타날 때까지 반복 확인합니다.

```json
"waitElement": "!#popular.fade:not(.in)"

# same as

"waitElement": [
    "",
    "#popular.fade:not(.in)"
]
```
>`#popular.fade:not(.in)`이 사라질 때까지 반복 확인합니다.

*`waitElement`는 `wait`와 동일하게 URL 매칭 시 규칙이 적용됩니다. “존재하지 않음”만 지정하려면 “존재함”을 ""로 비워둘 수 있습니다. “존재하지 않음”을 지정하면 Pagetual이 대상 요소의 지연 로딩을 유도하려고 합니다.*
