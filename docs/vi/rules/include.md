# include
>Selector hoặc XPath của phần tử bắt buộc phải tồn tại.

Ví dụ 1:
--
```json
"include": "div.content"
```
>Bỏ qua quy tắc khi trang không có `div.content`.

Ví dụ 2:
--
```json
"include": "//a[contains(@href,'-') and text()='next']"
```
>Bỏ qua quy tắc khi trang không có `//a[contains(@href,'-') and text()='next']`.

*Nếu nội dung động khiến nextLink thay đổi, dùng include.*
