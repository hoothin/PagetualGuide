# lazyImgSrc
>Thuộc tính ảnh trỏ tới src thật. Có thể đặt dạng ["lazysrc", "removeProp1,removeProp2"] để xoá thuộc tính ảnh.

Ví dụ 1:
--
```json
"lazyImgSrc": "data-cfsrc"
```
>Lấy URL từ "data-cfsrc" và đặt vào src của ảnh.

Ví dụ 2:
--
```json
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```
>Đôi khi src đúng bị ghi đè bởi một thuộc tính cần xoá.
