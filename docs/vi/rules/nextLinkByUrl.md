# nextLinkByUrl
>Nếu không có nextLink, bạn có thể tạo href từ URL hiện tại. [0] là RegExp, [1] là chuỗi thay thế, [2] là selector/XPath bắt buộc tồn tại, [3] là selector/XPath bắt buộc không tồn tại. Có thể dùng {} để tính toán đơn giản (+ - * /).

Ví dụ 1:
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)",
    "&page={$1+1}"
]
```
>Tạo `http://abc.xxx/d?page=2` từ URL hiện tại `http://abc.xxx/d?page=1`.

Ví dụ 2:
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)&pn=(\\d+)",
    "&page={$1+1}&pn={$2*10}",
    ".article>.item",
    ".disable>button"
]
```
>Tạo `http://abc.xxx/d?page=2&pn=10` từ `http://abc.xxx/d?page=1&pn=1`. Dừng nếu không có `.article>.item` hoặc gặp `.disable>button`.
