# css
>Thêm CSS để hiển thị phần tử ẩn, v.v. Nếu bắt đầu bằng `inIframe:` thì CSS chỉ áp dụng cho next iframe.

Ví dụ 1:
--
```json
"css": ".card-lazy{display:none}"
```

Ví dụ 2:
--
```json
"css": "inIframe:.card-lazy{display:none}"
```
>Chỉ thêm CSS cho các iframe tiếp theo.

Ví dụ 3:
--
```json
"css": ".card-lazy{display:block}inIframe:.card-lazy{display:none}"
```
>Thêm `.card-lazy{display:block}` cho trang hiện tại và `.card-lazy{display:none}` cho các iframe tiếp theo.
