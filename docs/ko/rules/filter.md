# filter
>다음 페이지에서 삽입되는 요소를 필터링합니다.

예시:
--
```json
"filter": "20"
```
>요소 텍스트 길이가 20 미만이면 제거합니다.

```json
"filter": "😈"
```
>요소 텍스트에 😈가 포함되어 있으면 제거합니다.

```json
"filter": {
    "count": 20,
    "words": "spams\\d",
    "link": "^https://spams\\.xxx",
    "selector": "div#spam"
}
```
>텍스트가 `/spams\d/`에 매칭되거나, 텍스트 길이가 20 미만이거나, 삽입 링크가 `/^https:\/\/spams\.xxx/`에 매칭되거나, 자식 요소가 `div#spam`에 매칭되면 제거합니다.
