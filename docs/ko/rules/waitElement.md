# waitElement
>배열["exist", "not exist"]에는 "존재해야 하는 요소의 선택자 또는 xpath (일부 지연 로드 요소의 경우)" 및 "존재하지 않아야 하는 요소의 선택자 또는 xpath (로드하기 위해 뷰로 스크롤해야 하는 일부 로딩 플레이스홀더의 경우)"가 포함됩니다.

예시:
--
```json
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```
>".summary"가 나타나고 "#popular.fade:not(.in)"이 사라지기 전에 반복적으로 확인합니다.

```json
"waitElement": ".summary"
```
>".summary"가 나타나기 전까지 반복 확인

```json
"waitElement": "!#popular.fade:not(.in)"

# same as

"waitElement": [
    "",
    "#popular.fade:not(.in)"
]
```
>"#popular.fade:not(.in)"가 사라지기 전까지 반복 확인.

*`waitElement`를 설정하면 `wait`와 동일하며, 이는 URL이 일치할 때 현재 규칙이 적용됨을 의미합니다. `exist` 또는 `not exist`를 설정하지 않으려면 ""를 비워둘 수 있으며, `not exist`를 설정하면 pagetual은 대상 요소의 지연 로드를 트리거하려고 시도합니다.*