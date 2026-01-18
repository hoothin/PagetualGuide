# url
>RegExp cho URL của site mục tiêu. Để đảm bảo hiệu năng, URL chỉ được cắt 500 ký tự đầu để so sánh.

Ví dụ:
--
```json
"url": "^https://abc\\.com/\\d+"
```
>Khi URL khớp RegExp `/^https://abc\.com/\d+/`, quy tắc sẽ có hiệu lực.
