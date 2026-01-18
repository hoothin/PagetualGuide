# wait (doc)
>Thời gian chờ để trang sẵn sàng. Nếu chắc chắn URL khớp, bạn cũng có thể dùng JavaScript trả về boolean để kiểm tra.

Ví dụ 1:
--
```json
"wait": 500
```
>Kiểm tra mỗi 500ms trước khi áp dụng quy tắc.

Ví dụ 2:
--
```json
"wait": "await fetch('https://xxx.xxx');let img=doc.querySelector('ul.list img');return img!=null"
```
>Lặp kiểm tra đến khi code trả về true. `doc` là document của site; ví dụ kiểm tra `ul.list img`.

*Khi đặt `wait`, quy tắc sẽ áp dụng khi URL khớp.*
