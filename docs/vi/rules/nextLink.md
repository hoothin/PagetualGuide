# nextLink
>Selector hoặc XPath của link trang tiếp theo. Đặt 0 để tắt. Có thể là mảng nhiều nextLink. Có thể để trống vì sẽ tự tạo.

Ví dụ 1:
--
```json
"nextLink": ".page-next>a"
```


Ví dụ 2:
--
```json
"nextLink": [
    ".page1-next>a",
    ".page2-next>a",
    ".page3-next>a"
]
```
>Khi có nhiều nextLink trên một trang, bạn có thể đưa vào mảng và chuyển bằng "switch next link".
