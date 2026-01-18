# delay
>JavaScript để trì hoãn hành động tiếp theo cho đến khi trả về true. Dùng để chờ nội dung lazyload đầy đủ.

Ví dụ:
--
```json
"delay": "return document.querySelector('#feed_pagenation>li.cur').innerText>=curpage"
```

*Đôi khi trang tiếp theo không tải đầy đủ ngay (chỉ sau khi cuộn). Dùng mục này để kiểm tra tải hoàn tất; chỉ kiểm tra khi đã cuộn xuống cuối.*
