# iframeInit (win, iframe)
>JavaScript chạy sớm nhất có thể trước mọi script trong iframe.

Ví dụ:
--
```json
"iframeInit": "win.self=win.top;"
```

*Một số site phát hiện iframe để chặn autopager. Bạn có thể viết mã vượt chặn tại đây.*
