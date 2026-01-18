# Xpath 選擇器速查表

## 選擇器

### 後代選擇器

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1`                         | `//h1`                                                   | [?](#前綴)              |
| `div p`                      | `//div//p`                                               | [?](#軸)                |
| `ul > li`                    | `//ul/li`                                                | [?](#軸)                |
| `ul > li > a`                | `//ul/li/a`                                              |                         |
| `div > *`                    | `//div/*`                                                |                         |
| `:root`                      | `/`                                                      | [?](#前綴)              |
| `:root > body`               | `/body`                                                  |                         |


### 屬性選擇器

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `#id`                        | `//*[@id="id"]`                                        | [?](#謂詞)              |
| `.class`                     | `//*[@class="class"]` *...[kinda](#class-check)*        |                         |
| `input[type="submit"]`       | `//input[@type="submit"]`                                |                         |
| `a#abc[for="xyz"]`           | `//a[@id="abc"][@for="xyz"]`                             | [?](#鏈式順序)          |
| `a[rel]`                     | `//a[@rel]`                                              |                         |
| `a[href^='/']`               | `//a[starts-with(@href, '/')]`                           | [?](#字串函數)          |
| `a[href$='pdf']`             | `//a[ends-with(@href, '.pdf')]`                          |                         |
| `a[href*='://']`             | `//a[contains(@href, '://')]`                            |                         |
| `a[rel~='help']`             | `//a[contains(@rel, 'help')]` *...[kinda](#class-check)* |                         |


### 順序選擇器

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `ul > li:first-of-type`      | `//ul/li[1]`                                             | [?](#索引)              |
| `ul > li:nth-of-type(2)`     | `//ul/li[2]`                                             |                         |
| `ul > li:last-of-type`       | `//ul/li[last()]`                                        |                         |
| `li#id:first-of-type`        | `//li[1][@id="id"]`                                      | [?](#鏈式順序)          |
| `a:first-child`              | `//*[1][name()="a"]`                                     |                         |
| `a:last-child`               | `//*[last()][name()="a"]`                                |                         |


### 兄弟節點

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1 ~ ul`                    | `//h1/following-sibling::ul`                             | [?](#使用軸)            |
| `h1 + ul`                    | `//h1/following-sibling::ul[1]`                          |                         |
| `h1 ~ #id`                   | `//h1/following-sibling::[@id="id"]`                     |                         |


### jQuery

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `$('ul > li').parent()`      | `//ul/li/..`                                             | [?](#其他軸)            |
| `$('li').closest('section')` | `//li/ancestor-or-self::section`                         |                         |
| `$('a').attr('href')`        | `//a/@href`                                              | [?](#步驟)              |
| `$('span').text()`           | `//span/text()`                                          |                         |


### 其他

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1:not([id])`               | `//h1[not(@id)]`                                         | [?](#布林函數)          |
| 文字匹配                     | `//button[text()="Submit"]`                              | [?](#運算子)            |
| 文字匹配（包含）             | `//button[contains(text(),"Go")]`                        |                         |
| 數值比較                     | `//product[@price > 2.50]`                               |                         |
| 含子元素                     | `//ul[*]`                                                |                         |
| 含特定子元素                 | `//ul[li]`                                               |                         |
| 或邏輯                       | `//a[@name or @href]`                                    | [?](#運算子)            |
| 聯集（合併結果）             | `//a \| //div`                                           | [?](#聯集)              |


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

Xpath 沒有「判斷是否包含空白分隔列表項」的內建運算子，這是常用替代寫法。

表達式
-----------

### 步驟與軸

| `//` | `ul` | `/`  | `a[@id='link']` |
| ---  | ---  | ---  | ---             |
| 軸   | 步驟 | 軸   | 步驟            |

### 前綴

| 前綴 | 示例                    | 含義     |
| ---  | ---                    | ---      |
| `//` | `//hr[@class='edge']`  | 任意位置 |
| `./` | `./a`                  | 相對路徑 |
| `/`  | `/html/body/div`       | 根節點   |


表達式可以從任意前綴開始。

### 軸

| 軸  | 示例                  | 含義      |
| --- | ---                  | ---       |
| `/` | `//ul/li/a`          | 子節點    |
| `//`| `//[@id="list"]//a` | 後代節點  |


用 `/` 分隔步驟；若不想只選直接子節點，使用 `//`。

### 步驟

```bash
//div
//div[@name='box']
//[@id='link']
```

一個步驟可以包含元素名（如 `div`）與[謂詞](#謂詞)（`[...]`），兩者都可省略。
也可以是以下形式：

```bash
//a/text()     #=> "Go home"
//a/@href      #=> "index.html"
//a/*          #=> All a's child elements
```

謂詞
----------

### 謂詞

```bash
//div[true()]
//div[@class="head"]
//div[@class="head"][@id="top"]
```

只有條件為真時才保留節點集。謂詞可鏈式疊加。

### 運算子

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

用比較與邏輯運算子建立條件。

### 使用節點

```bash
# Use them inside functions
//ul[count(li) > 2]
//ul[count(li[@class='hide']) > 0]
```

```bash
# This returns `<ul>` that has a `<li>` child
//ul[li]
```

節點可直接用於謂詞判斷。

### 索引

```bash
//a[1]                  # first <a>
//a[last()]             # last <a>
//ol/li[2]              # second <li>
//ol/li[position()=2]   # same as above
//ol/li[position()>1]   # :not(:first-of-type)
```

在 `[]` 中使用數字、`last()` 或 `position()` 進行索引。

### 鏈式順序

```bash
a[1][@href='/']
a[@href='/'][1]
```

順序不同，結果也不同。

### 巢狀謂詞

```
//section[.//h1[@id='hi']]
```

當 `<section>` 含有 id='hi' 的 `<h1>` 後代時匹配。

函數
---------

### 節點函數

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

### 布林函數

```bash
not(expr)                  # button[not(starts-with(text(),"Submit"))]
```

### 字串函數

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

### 型別轉換

```bash
string()
number()
boolean()
```

軸
----

### 使用軸

```bash
//ul/li                       # ul > li
//ul/child::li                # ul > li (same)
//ul/following-sibling::li    # ul ~ li
//ul/descendant-or-self::li   # ul li
//ul/ancestor-or-self::li     # $('ul').closest('li')
```

表達式的步驟通常用 `/` 分隔來選擇子節點，但也可以用 `::` 指定不同的軸。

| `//` | `ul` | `/child::` | `li` |
| ---  | ---  | ---        | ---  |
| 軸   | 步驟 | 軸         | 步驟 |

### 子軸

```bash
# both the same
//ul/li/a
//child::ul/child::li/child::a
```

`child::` 是預設軸，因此 `//a/b/c` 能正常工作。

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

### 後代或自身軸

```bash
# both the same
//div//h4
//div/descendant-or-self::h4
```

`//` 是 `descendant-or-self::` 軸的簡寫。

```bash
# both the same
//ul//[last()]
//ul/descendant-or-self::[last()]
```

### 其他軸

| 軸                   | 縮寫 | 說明                                            |
| ---                  | ---  | ---                                              |
| `ancestor`           |      |                                                  |
| `ancestor-or-self`   |      |                                                  |
| `attribute`          | `@`  | `@href` 是 `attribute::href` 的簡寫              |
| `child`              |      | `div` 是 `child::div` 的簡寫                     |
| `descendant`         |      |                                                  |
| `descendant-or-self` | `//` | `//` 是 `/descendant-or-self::node()/` 的簡寫    |
| `namespace`          |      |                                                  |
| `self`               | `.`  | `.` 是 `self::node()` 的簡寫                     |
| `parent`             | `..` | `..` 是 `parent::node()` 的簡寫                  |
| `following`          |      |                                                  |
| `following-sibling`  |      |                                                  |
| `preceding`          |      |                                                  |
| `preceding-sibling`  |      |                                                  |

還有更多軸可用。

### 聯集

```bash
//a | //span
```

使用 `|` 合併兩個表達式結果。

更多範例
-------------

### 範例

```bash
//*                 # all elements
count(//*)          # count all elements
(//h1)[1]/text()    # text of the first h1 heading
//li[span]          # find a <li> with an <span> inside it
                    # ...expands to //li[child::span]
//ul/li/..          # use .. to select a parent
```

### 尋找父層

```bash
//section[h1[@id='section-name']]
```
尋找直接包含 `h1#section-name` 的 `<section>`。

```bash
//section[//h1[@id='section-name']]
```

尋找包含 `h1#section-name` 的 `<section>`。
（與上面類似，但使用 descendant-or-self 而不是 child）

### 最近祖先

```bash
./ancestor-or-self::[@class="box"]
```

類似於 jQuery 的 `$().closest('.box')`。

### 屬性

```bash
//item[@price > 2*@discount]
```

尋找 `<item>` 並檢查其屬性。

## 測試

### 瀏覽器主控台

```js
$x("//div")
```
