# pageElementByJs (over, pageNum)
>자바스크립트 코드를 평가하고 삽입하려는 요소를 생성하는 데 사용합니다. 삽입을 위해 요소 배열로 콜백하려면 over(eles)가 필요합니다. pageNum은 현재 페이지 번호를 의미합니다.

예시:
--
```json
"pageElementByJs": "fetch(url.replace(/&offset=\\d+/,'') + '&offset=' + (pageNum + 1), {headers:{'X-Requested-With': 'XMLHttpRequest'}}).then(res => res.json()).then(res => {over(eles)})"
```
>요소를 생성하고 로드된 후 `over`를 사용하여 반환합니다.

*현재 페이지에 다음 링크가 없을 때, 이 속성을 설정하여 삽입할 새 요소를 생성할 수 있습니다.*
