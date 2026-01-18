# action
>0 là tải URL và chèn HTML tĩnh; 1 là tải bằng iframe để chạy JavaScript động của trang; 2 là ép chèn iframe đầy đủ xuống cuối trang.

Ví dụ:
--
```json
"action": 1
```

+ action: 0
Lấy URL của nextLink và chèn HTML tĩnh, không xử lý động. Đây là mặc định và nhanh nhất.
+ action: 1
Tải URL trong iframe, lấy nội dung sau khi tải xong. Phù hợp khi nội dung được render sau khi mở trang.
+ action: 2
Tạo iframe toàn trang của nextLink, cắt gọn và chèn vào cuối trang hiện tại.
