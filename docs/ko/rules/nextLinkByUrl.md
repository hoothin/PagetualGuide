# nextLinkByUrl
>nextLink가 없을 때 현재 URL에서 다음 링크를 생성합니다.[0]은 정규식 문자열, [1]은 치환 문자열, [2]는 반드시 존재해야 하는 요소 selector/XPath, [3]은 반드시 존재하지 않아야 하는 요소 selector/XPath입니다. {} 안에서 간단한 계산(+ - * /)이 가능합니다.

예시 1:
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)",
    "&page={$1+1}"
]
```
>현재 URL `http://abc.xxx/d?page=1`에서 `http://abc.xxx/d?page=2`를 생성합니다.

예시 2:
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)&pn=(\\d+)",
    "&page={$1+1}&pn={$2*10}",
    ".article>.item",
    ".disable>button"
]
```
> `http://abc.xxx/d?page=1&pn=1`에서 `http://abc.xxx/d?page=2&pn=10`을 생성합니다. `.article>.item`이 없거나 `.disable>button`을 만나면 중지합니다.
