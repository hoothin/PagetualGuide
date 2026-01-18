# Xpath 选择器速查表

## 选择器

### 后代选择器

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1`                         | `//h1`                                                   | [?](#前缀)              |
| `div p`                      | `//div//p`                                               | [?](#轴)                |
| `ul > li`                    | `//ul/li`                                                | [?](#轴)                |
| `ul > li > a`                | `//ul/li/a`                                              |                         |
| `div > *`                    | `//div/*`                                                |                         |
| `:root`                      | `/`                                                      | [?](#前缀)              |
| `:root > body`               | `/body`                                                  |                         |


### 属性选择器

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `#id`                        | `//*[@id="id"]`                                        | [?](#谓词)              |
| `.class`                     | `//*[@class="class"]` *...[kinda](#class-check)*        |                         |
| `input[type="submit"]`       | `//input[@type="submit"]`                                |                         |
| `a#abc[for="xyz"]`           | `//a[@id="abc"][@for="xyz"]`                             | [?](#链式顺序)          |
| `a[rel]`                     | `//a[@rel]`                                              |                         |
| `a[href^='/']`               | `//a[starts-with(@href, '/')]`                           | [?](#字符串函数)        |
| `a[href$='pdf']`             | `//a[ends-with(@href, '.pdf')]`                          |                         |
| `a[href*='://']`             | `//a[contains(@href, '://')]`                            |                         |
| `a[rel~='help']`             | `//a[contains(@rel, 'help')]` *...[kinda](#class-check)* |                         |


### 顺序选择器

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `ul > li:first-of-type`      | `//ul/li[1]`                                             | [?](#索引)              |
| `ul > li:nth-of-type(2)`     | `//ul/li[2]`                                             |                         |
| `ul > li:last-of-type`       | `//ul/li[last()]`                                        |                         |
| `li#id:first-of-type`        | `//li[1][@id="id"]`                                      | [?](#链式顺序)          |
| `a:first-child`              | `//*[1][name()="a"]`                                     |                         |
| `a:last-child`               | `//*[last()][name()="a"]`                                |                         |


### 兄弟节点

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1 ~ ul`                    | `//h1/following-sibling::ul`                             | [?](#使用轴)            |
| `h1 + ul`                    | `//h1/following-sibling::ul[1]`                          |                         |
| `h1 ~ #id`                   | `//h1/following-sibling::[@id="id"]`                     |                         |


### jQuery

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `$('ul > li').parent()`      | `//ul/li/..`                                             | [?](#其他轴)            |
| `$('li').closest('section')` | `//li/ancestor-or-self::section`                         |                         |
| `$('a').attr('href')`        | `//a/@href`                                              | [?](#步骤)              |
| `$('span').text()`           | `//span/text()`                                          |                         |


### 其他

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1:not([id])`               | `//h1[not(@id)]`                                         | [?](#布尔函数)          |
| 文本匹配                     | `//button[text()="Submit"]`                              | [?](#运算符)            |
| 文本匹配（包含）             | `//button[contains(text(),"Go")]`                        |                         |
| 数值比较                     | `//product[@price > 2.50]`                               |                         |
| 含子元素                     | `//ul[*]`                                                |                         |
| 含特定子元素                 | `//ul[li]`                                               |                         |
| 或逻辑                       | `//a[@name or @href]`                                    | [?](#运算符)            |
| 并集（合并结果）             | `//a \| //div`                                           | [?](#并集)              |


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

Xpath 没有“判断是否包含空格分隔列表项”的内置运算符，这是常用的替代写法。

表达式
-----------

### 步骤与轴

| `//` | `ul` | `/`  | `a[@id='link']` |
| ---  | ---  | ---  | ---             |
| 轴   | 步骤 | 轴   | 步骤            |

### 前缀

| 前缀 | 示例                    | 含义     |
| ---  | ---                    | ---      |
| `//` | `//hr[@class='edge']`  | 任意位置 |
| `./` | `./a`                  | 相对路径 |
| `/`  | `/html/body/div`       | 根节点   |


表达式可以从任意前缀开始。

### 轴

| 轴  | 示例                  | 含义      |
| --- | ---                  | ---       |
| `/` | `//ul/li/a`          | 子节点    |
| `//`| `//[@id="list"]//a` | 后代节点  |


用 `/` 分隔步骤；如果不想只选直接子节点，用 `//`。

### 步骤

```bash
//div
//div[@name='box']
//[@id='link']
```

一个步骤可以包含元素名（如 `div`）和[谓词](#谓词)（`[...]`），二者都可省略。
还可以是以下形式：

```bash
//a/text()     #=> "Go home"
//a/@href      #=> "index.html"
//a/*          #=> All a's child elements
```

谓词
----------

### 谓词

```bash
//div[true()]
//div[@class="head"]
//div[@class="head"][@id="top"]
```

只有条件为真时才保留节点集。谓词可以链式叠加。

### 运算符

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

用比较和逻辑运算符构造条件。

### 使用节点

```bash
# Use them inside functions
//ul[count(li) > 2]
//ul[count(li[@class='hide']) > 0]
```

```bash
# This returns `<ul>` that has a `<li>` child
//ul[li]
```

节点可以直接用于谓词判断。

### 索引

```bash
//a[1]                  # first <a>
//a[last()]             # last <a>
//ol/li[2]              # second <li>
//ol/li[position()=2]   # same as above
//ol/li[position()>1]   # :not(:first-of-type)
```

在 `[]` 中使用数字、`last()` 或 `position()` 进行索引。

### 链式顺序

```bash
a[1][@href='/']
a[@href='/'][1]
```

顺序不同，结果也不同。

### 嵌套谓词

```
//section[.//h1[@id='hi']]
```

当 `<section>` 含有 id='hi' 的 `<h1>` 后代时匹配。

函数
---------

### 节点函数

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

### 布尔函数

```bash
not(expr)                  # button[not(starts-with(text(),"Submit"))]
```

### 字符串函数

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

### 类型转换

```bash
string()
number()
boolean()
```

轴
----

### 使用轴

```bash
//ul/li                       # ul > li
//ul/child::li                # ul > li (same)
//ul/following-sibling::li    # ul ~ li
//ul/descendant-or-self::li   # ul li
//ul/ancestor-or-self::li     # $('ul').closest('li')
```

表达式的步骤通常用 `/` 分隔来选择子节点，但也可以用 `::` 指定不同的轴。

| `//` | `ul` | `/child::` | `li` |
| ---  | ---  | ---        | ---  |
| 轴   | 步骤 | 轴         | 步骤 |

### 子轴

```bash
# both the same
//ul/li/a
//child::ul/child::li/child::a
```

`child::` 是默认轴，因此 `//a/b/c` 能正常工作。

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

### 后代或自身轴

```bash
# both the same
//div//h4
//div/descendant-or-self::h4
```

`//` 是 `descendant-or-self::` 轴的简写。

```bash
# both the same
//ul//[last()]
//ul/descendant-or-self::[last()]
```

### 其他轴

| 轴                   | 缩写 | 说明                                            |
| ---                  | ---  | ---                                              |
| `ancestor`           |      |                                                  |
| `ancestor-or-self`   |      |                                                  |
| `attribute`          | `@`  | `@href` 是 `attribute::href` 的简写              |
| `child`              |      | `div` 是 `child::div` 的简写                     |
| `descendant`         |      |                                                  |
| `descendant-or-self` | `//` | `//` 是 `/descendant-or-self::node()/` 的简写    |
| `namespace`          |      |                                                  |
| `self`               | `.`  | `.` 是 `self::node()` 的简写                     |
| `parent`             | `..` | `..` 是 `parent::node()` 的简写                  |
| `following`          |      |                                                  |
| `following-sibling`  |      |                                                  |
| `preceding`          |      |                                                  |
| `preceding-sibling`  |      |                                                  |

还有更多轴可用。

### 并集

```bash
//a | //span
```

使用 `|` 合并两个表达式结果。

更多示例
-------------

### 示例

```bash
//*                 # all elements
count(//*)          # count all elements
(//h1)[1]/text()    # text of the first h1 heading
//li[span]          # find a <li> with an <span> inside it
                    # ...expands to //li[child::span]
//ul/li/..          # use .. to select a parent
```

### 查找父级

```bash
//section[h1[@id='section-name']]
```
查找直接包含 `h1#section-name` 的 `<section>`。

```bash
//section[//h1[@id='section-name']]
```

查找包含 `h1#section-name` 的 `<section>`。
（与上面类似，但使用 descendant-or-self 而不是 child）

### 最近祖先

```bash
./ancestor-or-self::[@class="box"]
```

类似于 jQuery 的 `$().closest('.box')`。

### 属性

```bash
//item[@price > 2*@discount]
```

查找 `<item>` 并检查其属性。

## 测试

### 浏览器控制台

```js
$x("//div")
```
