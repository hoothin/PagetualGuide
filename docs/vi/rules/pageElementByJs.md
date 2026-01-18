# pageElementByJs (over, pageNum)
>Chạy JavaScript và tạo các phần tử để chèn. Cần gọi over(eles) để trả về mảng phần tử. pageNum là số trang hiện tại.

Ví dụ:
--
```json
"pageElementByJs": "fetch(url.replace(/&offset=\\d+/,'') + '&offset=' + (pageNum + 1), {headers:{'X-Requested-With': 'XMLHttpRequest'}}).then(res => res.json()).then(res => {over(eles)})"
```
>Tạo phần tử và trả về qua `over` sau khi tải xong.

*Nếu trang hiện tại không có nextLink, dùng mục này để tạo phần tử mới cần chèn.*
