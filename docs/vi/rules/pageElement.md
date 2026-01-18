# pageElement
>Selector hoặc XPath của nội dung chính cần chèn. Có thể là mảng nhiều pageElement. Có thể để trống vì sẽ tự tạo.

Ví dụ 1:
--
```json
"pageElement": ".Context>.Article"
```

Ví dụ 2:
--
```json
"pageElement": [
    ".Context1>.Article",
    ".Context2>.Article",
    ".Context3>.Article"
]
```
>Khi có nhiều nextLink và pageElement trên cùng trang, bạn có thể đưa vào mảng và chuyển bằng "switch next link".
