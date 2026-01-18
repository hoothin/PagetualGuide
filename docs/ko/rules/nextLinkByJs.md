# nextLinkByJs (doc)
>JavaScript를 실행해 다음 페이지 URL을 반환합니다. `doc`는 각 로드된 페이지의 document입니다.

예시:
--
```json
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\\((\\d+)'\\);/,'$1_.html');"
```
>`doc`는 로드된 페이지의 document를 의미합니다. 이 코드는 `a.curr+a`를 확인해 있으면 href에서 링크를 만들고, 없으면 중지합니다.

>`#p{x=1&y=2}` 형식으로 POST 데이터 본문을 구성할 수 있습니다. 예: `https://www.xxx.com/pageAjax#p{x=1&y=2}`.
