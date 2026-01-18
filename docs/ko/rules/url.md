# url
>대상 사이트 URL의 RegExp. 성능을 위해 URL은 처음 500자만 비교합니다.

예시:
--
```json
"url": "^https://abc\\.com/\\d+"
```
>URL이 RegExp `/^https://abc\.com/\d+/`에 매칭되면 규칙이 적용됩니다.
