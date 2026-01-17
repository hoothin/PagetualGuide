# nextLinkByUrl
>다음 요소가 없는 경우, 현재 URL에서 href를 생성하는 데 사용할 수 있습니다.은 정규식 문자열을 의미하고,은 대체 문자열을 의미하며,는 반드시 포함해야 하는 요소의 선택자 또는 xpath를 의미하고,은 포함해서는 안 되는 요소의 선택자 또는 xpath를 의미합니다. + - * /와 같은 간단한 코드를 평가하려면 {}를 사용할 수 있습니다.

예시1:
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)",
    "&page={$1+1}"
]
```
>현재 페이지의 URL "http://abc.xxx/d?page=1"에서 다음 링크 "http://abc.xxx/d?page=2"를 생성합니다.

예시2:
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)&pn=(\\d+)",
    "&page={$1+1}&pn={$2*10}",
    ".article>.item",
    ".disable>button"
]
```
>현재 페이지 URL "http://abc.xxx/d?page=1&pn=1"에서 다음 링크 "http://abc.xxx/d?page=2&pn=10"를 생성합니다. '.article>.item' 요소가 없거나 '.disable>button'이 발견되면 중지합니다.

