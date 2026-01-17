# Bảng tra cứu CSS Selectors

## Các bộ chọn cơ bản

```css
.css3-class {
  font-weight: bold;
}
```

| Bộ chọn           | Mô tả  |
| ----------------- | ------------ |
| `*`               | Tất cả các phần tử |
| `div`             | Tên thẻ = "div"      |
| `.class`          | Class = "class"        |
| `#id`             | ID = "id"         |
| `[disabled]`      | Có thuộc tính "disabled"    |
| `[role="dialog"]` | Thuộc tính role = "dialog"    |

## Các bộ kết hợp

| Bộ chọn             | Mô tả        |
| ------------------- | ------------------ |
| `.parent .child`    | Con cháu (nằm trong)         |
| `.parent > .child`  | Con trực tiếp  |
| `.child + .sibling` | Anh em liền kề   |
| `.child ~ .sibling` | Anh em ở xa (cùng cấp)        |
| `.class1.class2`    | Có cả hai class  |
| `.class1,.class2`   | .class1 hoặc .class2 |

## Các bộ chọn thuộc tính

| Bộ chọn            | Mô tả                         |
| ------------------ | ----------------------------------- |
| `[role="dialog"]`  | `=` Chính xác, role = "dialog"                          |
| `[class~="box"]`   | `~=` Chứa từ, class chứa từ "box"                   |
| `[class|="box"]`  | `|=` Chính xác hoặc có tiền tố (ví dụ, `value-`) |
| `[href$=".doc"]`   | `$=` Kết thúc bằng, href kết thúc bằng ".doc"                       |
| `[href^="/index"]` | `^=` Bắt đầu bằng, href bắt đầu bằng "/index"                    |
| `[class*="-is-"]`  | `*=` Chứa chuỗi, class chứa chuỗi "-is-"                      |

## Các lớp giả (Pseudo-classes)

| Bộ chọn              | Mô tả                                |
| -------------------- | ------------------------------------------ |
| `:target`            | Đại diện cho một phần tử duy nhất (phần tử đích) có id khớp với fragment của URL. Ví dụ, `h2#foo:target`                        |
| `:focus`             | Phần tử đang được focus                                           |
| `:active`            | Phần tử đang hoạt động (active)                                           |
| `:nth-child(3)`      | Phần tử con thứ 3.                                 |
| `:nth-child(3n+2)`   | Phần tử con thứ 2 trong các nhóm 3. Sử dụng công thức (an + b). Mô tả: a đại diện cho kích thước chu kỳ, n là một bộ đếm (bắt đầu từ 0), và b là một giá trị bù.                   |
| `:nth-child(-n+4)`   | 4, 3, 2, 1 nhỏ hơn 5.                   |
| `:nth-last-child(2)` | Các phần tử dựa trên vị trí của chúng trong một nhóm anh em, đếm từ cuối lên.                                           |
| `:nth-of-type(2)`    | Các phần tử dựa trên vị trí của chúng trong số các anh em cùng loại (cùng tên thẻ).                                           |
| `:checked`           | Các input đã được chọn (checked)                             |
| `:disabled`          | Các phần tử bị vô hiệu hóa                          |
| `:enabled`           | Các phần tử được kích hoạt                           |
| `:default`           | Phần tử mặc định trong một nhóm                 |
| `:empty`             | Các phần tử không có con                  |

## Các biến thể lớp giả

| Bộ chọn           | Mô tả                                |
| ----------------- | ------------------------------------------ |
| `:first-of-type`  | Đại diện cho phần tử đầu tiên của loại đó trong một nhóm các phần tử anh em. |
| `:last-of-type`   | Đại diện cho phần tử cuối cùng của loại đó trong một nhóm các phần tử anh em. |
| `:only-of-type`   | Đại diện cho một phần tử không có anh em cùng loại. |
| `:first-child`    | Đại diện cho phần tử đầu tiên trong một nhóm các phần tử anh em. |
| `:last-child`     | Đại diện cho phần tử cuối cùng trong một nhóm các phần tử anh em. |
| `:only-child`     | Đại diện cho một phần tử không có bất kỳ anh em nào. Điều này giống như :first-child:last-child hoặc :nth-child(1):nth-last-child(1), nhưng có độ ưu tiên thấp hơn. |
| `::first-letter`  | Áp dụng style cho chữ cái đầu tiên của dòng đầu tiên trong một khối chứa (block container), nhưng chỉ khi không có nội dung khác đứng trước (chẳng hạn như hình ảnh hoặc bảng nội tuyến). |
| `::first-line`    | Áp dụng style cho dòng đầu tiên của một khối chứa (block container). |

## <a href="#test-your-css-selector-skill-with-pagetual" data-pagetual-picker>Kiểm tra kỹ năng css selector của bạn với Pagetual</a>
![Picker](/img/picker.jpeg)