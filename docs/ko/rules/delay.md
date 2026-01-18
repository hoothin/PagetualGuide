# delay
>다음 동작을 지연시키는 JavaScript입니다. true를 반환할 때까지 진행하지 않습니다. 지연 로딩 콘텐츠가 완전히 로드될 때까지 기다리는 용도입니다.

예시:
--
```json
"delay": "return document.querySelector('#feed_pagenation>li.cur').innerText>=curpage"
```

*다음 페이지 콘텐츠가 한 번에 로드되지 않는 경우(스크롤 후 로드 등) 완전 로드를 판별할 때 사용합니다. 확인은 하단까지 스크롤한 뒤에만 수행됩니다.*
