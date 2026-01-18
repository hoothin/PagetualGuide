# nextLinkByJs (doc)
>Chạy JavaScript và trả về URL của trang tiếp theo. `doc` là document của mỗi trang đã tải.

Ví dụ:
--
```json
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\\((\\d+)'\\);/,'$1_.html');"
```
>`doc` là document của từng trang. Mã này kiểm tra `a.curr+a` và trả về link từ href nếu có; nếu không thì dừng.

>Bạn có thể tạo POST body bằng `#p{x=1&y=2}`, ví dụ `https://www.xxx.com/pageAjax#p{x=1&y=2}`.
