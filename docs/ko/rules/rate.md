# rate
>다음 페이지 로드를 시작하는 거리 임계값(windowHeight 배수). 로드가 느린 사이트는 2 또는 3을 설정합니다.

예시:
--
```json
"rate": 3
```
>페이지의 scrollTop과 하단 사이 거리가 `3 * windowHeight`보다 작아지면 다음 페이지를 로드합니다.
