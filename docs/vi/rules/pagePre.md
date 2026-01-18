# pagePre (response, doc)
>JavaScript chạy sau khi nhận response từ URL của nextLink. Bạn có thể chỉnh sửa văn bản response và trả về, hoặc trả về trực tiếp mảng pageElement.

Ví dụ:
--
```json
"pagePre": "return decodeURI(response).replace(/[\\\\]/g,'')"
```

*Chỉ có hiệu lực khi `action`==0 hoặc `action`==1*
