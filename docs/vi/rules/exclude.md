# exclude
>Selector hoặc XPath của phần tử không được tồn tại.

Ví dụ 1:
--
```json
"exclude": "div.content"
```
>Bỏ qua quy tắc khi trang có `div.content`.

Ví dụ 2:
--
```json
"exclude": "//a[contains(@href,'-') and text()='next']"
```
>Bỏ qua quy tắc khi trang có `//a[contains(@href,'-') and text()='next']`.

*Nếu nội dung động khiến nextLink thay đổi, dùng exclude.*
