# pageNum
>Đánh dấu số trang bằng $p trong URL hiện tại. Có thể dùng {} để tính toán chuỗi kết quả, ví dụ {$p*25+1}.

Ví dụ:
--
```json
"pageNum": "&start={15*($p-1)}"
```
>Đếm trang là 2 khi URL là "&start=15".
