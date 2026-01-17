# delay
>다음 동작을 true를 반환할 때까지 지연시키는 JavaScript 코드입니다. 이 속성을 사용하여 지연 로딩을 통해 완전한 페이지 요소를 가져올 수 있습니다.

예시:
--
```json
"delay": "return document.querySelector('#feed_pagenation>li.cur').innerText>=curpage"
```

*때로는 다음 페이지가 스크롤하기 전에 절반만 로드되고 완전히 로드되지 않을 수 있습니다. 이 속성을 사용하여 페이지가 완전히 로드되었는지 확인할 수 있습니다. 바닥까지 스크롤했을 때만 확인하세요.*