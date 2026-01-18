# Bảng tra nhanh XPath

## Bộ chọn

### Bộ chọn hậu duệ

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1`                         | `//h1`                                                   | [?](#tiền-tố)           |
| `div p`                      | `//div//p`                                               | [?](#trục)              |
| `ul > li`                    | `//ul/li`                                                | [?](#trục)              |
| `ul > li > a`                | `//ul/li/a`                                              |                         |
| `div > *`                    | `//div/*`                                                |                         |
| `:root`                      | `/`                                                      | [?](#tiền-tố)           |
| `:root > body`               | `/body`                                                  |                         |


### Bộ chọn thuộc tính

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `#id`                        | `//*[@id="id"]`                                        | [?](#mệnh-đề)          |
| `.class`                     | `//*[@class="class"]` *...[kinda](#class-check)*        |                         |
| `input[type="submit"]`       | `//input[@type="submit"]`                                |                         |
| `a#abc[for="xyz"]`           | `//a[@id="abc"][@for="xyz"]`                             | [?](#thứ-tự-chaining)  |
| `a[rel]`                     | `//a[@rel]`                                              |                         |
| `a[href^='/']`               | `//a[starts-with(@href, '/')]`                           | [?](#hàm-chuỗi)         |
| `a[href$='pdf']`             | `//a[ends-with(@href, '.pdf')]`                          |                         |
| `a[href*='://']`             | `//a[contains(@href, '://')]`                            |                         |
| `a[rel~='help']`             | `//a[contains(@rel, 'help')]` *...[kinda](#class-check)* |                         |


### Bộ chọn thứ tự

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `ul > li:first-of-type`      | `//ul/li[1]`                                             | [?](#đánh-số)           |
| `ul > li:nth-of-type(2)`     | `//ul/li[2]`                                             |                         |
| `ul > li:last-of-type`       | `//ul/li[last()]`                                        |                         |
| `li#id:first-of-type`        | `//li[1][@id="id"]`                                      | [?](#thứ-tự-chaining)  |
| `a:first-child`              | `//*[1][name()="a"]`                                     |                         |
| `a:last-child`               | `//*[last()][name()="a"]`                                |                         |


### Anh em (siblings)

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1 ~ ul`                    | `//h1/following-sibling::ul`                             | [?](#dùng-trục)         |
| `h1 + ul`                    | `//h1/following-sibling::ul[1]`                          |                         |
| `h1 ~ #id`                   | `//h1/following-sibling::[@id="id"]`                     |                         |


### jQuery

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `$('ul > li').parent()`      | `//ul/li/..`                                             | [?](#các-trục-khác)     |
| `$('li').closest('section')` | `//li/ancestor-or-self::section`                         |                         |
| `$('a').attr('href')`        | `//a/@href`                                              | [?](#bước)              |
| `$('span').text()`           | `//span/text()`                                          |                         |


### Khác

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1:not([id])`               | `//h1[not(@id)]`                                         | [?](#hàm-bool)          |
| So khớp văn bản              | `//button[text()="Submit"]`                              | [?](#toán-tử)           |
| So khớp (chuỗi con)          | `//button[contains(text(),"Go")]`                        |                         |
| So sánh số                   | `//product[@price > 2.50]`                               |                         |
| Có con                       | `//ul[*]`                                                |                         |
| Có con (cụ thể)              | `//ul[li]`                                               |                         |
| OR logic                     | `//a[@name or @href]`                                    | [?](#toán-tử)           |
| Union (gộp kết quả)          | `//a \| //div`                                           | [?](#hợp)               |


<style>
/* ensure tables align */
table.xp {table-layout: fixed;}
table.xp tr>:nth-child(1) {width: 35%;}
table.xp tr>:nth-child(2) {width: auto;}
table.xp tr>:nth-child(3) {width: 10%; text-align:right;}
</style>

### Class check

```bash
//div[contains(concat(' ',normalize-space(@class),' '),' foobar ')]
```

Xpath không có toán tử “kiểm tra phần tử trong danh sách phân tách bằng khoảng trắng”, nên đây là cách thường dùng.

Biểu thức
-----------

### Bước và trục

| `//` | `ul` | `/`  | `a[@id='link']` |
| ---  | ---  | ---  | ---             |
| Trục | Bước | Trục | Bước            |

### Tiền tố

| Tiền tố | Ví dụ                 | Ý nghĩa   |
| ---     | ---                   | ---       |
| `//`    | `//hr[@class='edge']` | Bất kỳ đâu |
| `./`    | `./a`                 | Tương đối |
| `/`     | `/html/body/div`      | Gốc       |


Bạn có thể bắt đầu biểu thức bằng bất kỳ tiền tố nào ở trên.

### Trục

| Trục | Ví dụ                | Ý nghĩa   |
| ---  | ---                  | ---       |
| `/`  | `//ul/li/a`          | Con       |
| `//` | `//[@id="list"]//a` | Hậu duệ   |


Tách các bước bằng `/`. Dùng `//` nếu không muốn chỉ chọn con trực tiếp.

### Bước

```bash
//div
//div[@name='box']
//[@id='link']
```

Một bước có thể gồm tên phần tử (`div`) và [mệnh đề](#mệnh-đề) (`[...]`). Cả hai đều có thể bỏ.
Cũng có thể là:

```bash
//a/text()     #=> "Go home"
//a/@href      #=> "index.html"
//a/*          #=> All a's child elements
```

Mệnh đề
----------

### Mệnh đề

```bash
//div[true()]
//div[@class="head"]
//div[@class="head"][@id="top"]
```

Chỉ giữ nodeset khi điều kiện đúng. Có thể xếp chuỗi nhiều mệnh đề.

### Toán tử

```bash
# Comparison
//a[@id = "xyz"]
//a[@id != "xyz"]
//a[@price > 25]
```

```bash
# Logic (and/or)
//div[@id="head" and position()=2]
//div[(x and y) or not(z)]
```

Dùng toán tử so sánh và logic để tạo điều kiện.

### Dùng node

```bash
# Use them inside functions
//ul[count(li) > 2]
//ul[count(li[@class='hide']) > 0]
```

```bash
# This returns `<ul>` that has a `<li>` child
//ul[li]
```

Có thể dùng node trực tiếp trong mệnh đề.

### Đánh số

```bash
//a[1]                  # first <a>
//a[last()]             # last <a>
//ol/li[2]              # second <li>
//ol/li[position()=2]   # same as above
//ol/li[position()>1]   # :not(:first-of-type)
```

Dùng `[]` với số, `last()` hoặc `position()`.

### Thứ tự chaining

```bash
a[1][@href='/']
a[@href='/'][1]
```

Thứ tự quan trọng; hai biểu thức này khác nhau.

### Lồng mệnh đề

```
//section[.//h1[@id='hi']]
```

Trả về `<section>` nếu có hậu duệ `<h1>` với id='hi'.

Hàm
---------

### Hàm node

```bash
name()                     # //[starts-with(name(), 'h')]
text()                     # //button[text()="Submit"]
                           # //button/text()
lang(str)
namespace-uri()
```

```bash
count()                    # //table[count(tr)=1]
position()                 # //ol/li[position()=2]
```

### Hàm bool

```bash
not(expr)                  # button[not(starts-with(text(),"Submit"))]
```

### Hàm chuỗi

```bash
contains()                 # font[contains(@class,"head")]
starts-with()              # font[starts-with(@class,"head")]
ends-with()                # font[ends-with(@class,"head")]
```

```bash
concat(x,y)
substring(str, start, len)
substring-before("01/02", "/")  #=> 01
substring-after("01/02", "/")   #=> 02
translate()
normalize-space()
string-length()
```

### Chuyển kiểu

```bash
string()
number()
boolean()
```

Trục
----

### Dùng trục

```bash
//ul/li                       # ul > li
//ul/child::li                # ul > li (same)
//ul/following-sibling::li    # ul ~ li
//ul/descendant-or-self::li   # ul li
//ul/ancestor-or-self::li     # $('ul').closest('li')
```

Các bước thường dùng `/` để chọn con, nhưng có thể chỉ định trục khác với `::`.

| `//` | `ul` | `/child::` | `li` |
| ---  | ---  | ---        | ---  |
| Trục | Bước | Trục       | Bước |

### Trục child

```bash
# both the same
//ul/li/a
//child::ul/child::li/child::a
```

`child::` là trục mặc định. Vì vậy `//a/b/c` hoạt động.

```bash
# both the same
# this works because `child::li` is truthy, so the predicate succeeds
//ul[li]
//ul[child::li]
```

```bash
# both the same
//ul[count(li) > 2]
//ul[count(child::li) > 2]
```

### Trục descendant-or-self

```bash
# both the same
//div//h4
//div/descendant-or-self::h4
```

`//` là dạng rút gọn của trục `descendant-or-self::`.

```bash
# both the same
//ul//[last()]
//ul/descendant-or-self::[last()]
```

### Các trục khác

| Trục                | Viết tắt | Ghi chú                                           |
| ---                 | ---      | ---                                              |
| `ancestor`          |          |                                                  |
| `ancestor-or-self`  |          |                                                  |
| `attribute`         | `@`      | `@href` là viết tắt của `attribute::href`       |
| `child`             |          | `div` là viết tắt của `child::div`              |
| `descendant`        |          |                                                  |
| `descendant-or-self`| `//`     | `//` là viết tắt của `/descendant-or-self::node()/` |
| `namespace`         |          |                                                  |
| `self`              | `.`      | `.` là viết tắt của `self::node()`               |
| `parent`            | `..`     | `..` là viết tắt của `parent::node()`            |
| `following`         |          |                                                  |
| `following-sibling` |          |                                                  |
| `preceding`         |          |                                                  |
| `preceding-sibling` |          |                                                  |

Còn có nhiều trục khác có thể dùng.

### Hợp

```bash
//a | //span
```

Dùng `|` để gộp hai biểu thức.

Ví dụ thêm
-------------

### Ví dụ

```bash
//*                 # all elements
count(//*)          # count all elements
(//h1)[1]/text()    # text of the first h1 heading
//li[span]          # find a <li> with an <span> inside it
                    # ...expands to //li[child::span]
//ul/li/..          # use .. to select a parent
```

### Tìm phần tử cha

```bash
//section[h1[@id='section-name']]
```
Tìm `<section>` chứa trực tiếp `h1#section-name`.

```bash
//section[//h1[@id='section-name']]
```

Tìm `<section>` chứa `h1#section-name`.
(Giống ở trên, nhưng dùng descendant-or-self thay vì child)

### Closest

```bash
./ancestor-or-self::[@class="box"]
```

Tương tự `$().closest('.box')` của jQuery.

### Thuộc tính

```bash
//item[@price > 2*@discount]
```

Tìm `<item>` và kiểm tra thuộc tính.

## Kiểm thử

### Console trình duyệt

```js
$x("//div")
```
