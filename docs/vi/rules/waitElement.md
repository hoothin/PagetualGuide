# waitElement
>Mảng `["exist", "not exist"]` gồm selector/XPath của phần tử phải tồn tại (lazyload) và phần tử không được tồn tại (placeholder cần biến mất).

Ví dụ:
--
```json
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```
>Lặp kiểm tra đến khi ".summary" xuất hiện và "#popular.fade:not(.in)" biến mất.

```json
"waitElement": ".summary"
```
>Lặp kiểm tra đến khi ".summary" xuất hiện.

```json
"waitElement": "!#popular.fade:not(.in)"

# same as

"waitElement": [
    "",
    "#popular.fade:not(.in)"
]
```
>Lặp kiểm tra đến khi "#popular.fade:not(.in)" biến mất.

*`waitElement` tương tự `wait`: quy tắc sẽ áp dụng khi URL khớp. Nếu không cần "exist", để "". Khi đặt "not exist", Pagetual sẽ cố kích hoạt lazyload của phần tử mục tiêu.*
