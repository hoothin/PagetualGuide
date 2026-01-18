# init (doc, win, iframe, click, enter, input, sleep)
>JavaScript chỉ chạy một lần trên trang chính hoặc iframe mirror. Dùng cho thao tác một lần hoặc đồng bộ trạng thái sang iframe.

Ví dụ:
--
```json
"init": "if (iframe == null) return; await click('#btn'); await input('#input', 'here you are'); await enter('#input');"
```
>Khi trích xuất trong iframe mirror, click `#btn`, nhập `here you are` vào `#input` rồi nhấn Enter.

*Mã này chỉ chạy một lần.*
