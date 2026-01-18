# pageInit (doc, eles)
>JavaScript chạy trước khi chèn mỗi trang với doc (document của trang đã tải) và eles (các phần tử tìm được). Có thể kích hoạt event như onView().

Ví dụ:
--
```json
"pageInit": "let ops=doc.querySelectorAll('op');[].forEach.call(ops,op=>{img.src=op.value;imgCon.appendChild(img)})"
```
