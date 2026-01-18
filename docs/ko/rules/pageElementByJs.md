# pageElementByJs (over, pageNum)
>JavaScript를 실행해 삽입할 요소를 생성합니다. `over(eles)`를 호출해 요소 배열을 반환해야 합니다. `pageNum`은 현재 페이지 번호입니다.

예시:
--
```json
"pageElementByJs": "fetch(url.replace(/&offset=\\d+/,'') + '&offset=' + (pageNum + 1), {headers:{'X-Requested-With': 'XMLHttpRequest'}}).then(res => res.json()).then(res => {over(eles)})"
```
>요소를 생성하고 로드 완료 후 `over`로 반환합니다。

*현재 페이지에 nextLink가 없을 때 이 항목으로 삽입 요소를 생성할 수 있습니다.*
