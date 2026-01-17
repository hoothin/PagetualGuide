# nextLinkByJs (doc)
>JavaScript 코드를 평가하고 로드된 모든 페이지의 문서(doc)를 사용하여 다음 페이지의 대상 URL을 반환하는 데 사용합니다.

예시:
--
```json
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\((\d+)'\);/,'$1_.html');"
```
>매개변수 `doc`는 로드된 모든 페이지의 문서를 의미하며, 이 코드는 "a.curr+a" 요소를 확인하고 해당 href에서 링크를 반환하며, 존재하지 않으면 중지합니다.

>`#p{x=1&y=2}` 방식을 사용하여 포스트 데이터 본문을 구성할 수 있습니다. 이는 `https://www.xxx.com/pageAjax#p{x=1&y=2}`를 반환하는 것과 같습니다.

```