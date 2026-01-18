# filter
>Lọc các phần tử chèn từ trang tiếp theo.

Ví dụ:
--
```json
"filter": "20"
```
>Xoá phần tử nếu số từ nhỏ hơn 20.

```json
"filter": "😈"
```
>Xoá phần tử nếu nội dung chứa 😈.

```json
"filter": {
    "count": 20,
    "words": "spams\\d",
    "link": "^https://spams\\.xxx",
    "selector": "div#spam"
}
```
>Xoá phần tử nếu chuỗi khớp `/spams\d/`, hoặc số từ < 20, hoặc link chèn khớp `/^https:\/\/spams\.xxx/`, hoặc có con khớp `div#spam`.
