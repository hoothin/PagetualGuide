# pinUrl
>Đôi khi không có nextLink hoặc pageElement. Đặt true để ghim quy tắc chỉ theo url thay vì tìm phần tử bằng quy tắc thông minh.

Ví dụ:
--
```json
"pinUrl": true
```
>Khi URL khớp RegExp đã đặt, quy tắc sẽ áp dụng dù phần tử không khớp.

*Ví dụ: site chỉ hiện nextLink sau khi cuộn hoặc click — nên đặt pinUrl=true.*
