# Xpath 早見表

## セレクタ

### 子孫セレクタ

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1`                         | `//h1`                                                   | [?](#前置き)            |
| `div p`                      | `//div//p`                                               | [?](#軸)                |
| `ul > li`                    | `//ul/li`                                                | [?](#軸)                |
| `ul > li > a`                | `//ul/li/a`                                              |                         |
| `div > *`                    | `//div/*`                                                |                         |
| `:root`                      | `/`                                                      | [?](#前置き)            |
| `:root > body`               | `/body`                                                  |                         |


### 属性セレクタ

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `#id`                        | `//*[@id="id"]`                                        | [?](#述語)              |
| `.class`                     | `//*[@class="class"]` *...[kinda](#class-check)*        |                         |
| `input[type="submit"]`       | `//input[@type="submit"]`                                |                         |
| `a#abc[for="xyz"]`           | `//a[@id="abc"][@for="xyz"]`                             | [?](#連結順序)          |
| `a[rel]`                     | `//a[@rel]`                                              |                         |
| `a[href^='/']`               | `//a[starts-with(@href, '/')]`                           | [?](#文字列関数)        |
| `a[href$='pdf']`             | `//a[ends-with(@href, '.pdf')]`                          |                         |
| `a[href*='://']`             | `//a[contains(@href, '://')]`                            |                         |
| `a[rel~='help']`             | `//a[contains(@rel, 'help')]` *...[kinda](#class-check)* |                         |


### 順序セレクタ

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `ul > li:first-of-type`      | `//ul/li[1]`                                             | [?](#インデックス)      |
| `ul > li:nth-of-type(2)`     | `//ul/li[2]`                                             |                         |
| `ul > li:last-of-type`       | `//ul/li[last()]`                                        |                         |
| `li#id:first-of-type`        | `//li[1][@id="id"]`                                      | [?](#連結順序)          |
| `a:first-child`              | `//*[1][name()="a"]`                                     |                         |
| `a:last-child`               | `//*[last()][name()="a"]`                                |                         |


### 兄弟要素

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1 ~ ul`                    | `//h1/following-sibling::ul`                             | [?](#軸の使い方)        |
| `h1 + ul`                    | `//h1/following-sibling::ul[1]`                          |                         |
| `h1 ~ #id`                   | `//h1/following-sibling::[@id="id"]`                     |                         |


### jQuery

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `$('ul > li').parent()`      | `//ul/li/..`                                             | [?](#その他の軸)        |
| `$('li').closest('section')` | `//li/ancestor-or-self::section`                         |                         |
| `$('a').attr('href')`        | `//a/@href`                                              | [?](#ステップ)          |
| `$('span').text()`           | `//span/text()`                                          |                         |


### その他

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1:not([id])`               | `//h1[not(@id)]`                                         | [?](#ブール関数)        |
| テキスト一致                 | `//button[text()="Submit"]`                              | [?](#演算子)            |
| テキスト一致（部分）         | `//button[contains(text(),"Go")]`                        |                         |
| 数値比較                     | `//product[@price > 2.50]`                               |                         |
| 子要素あり                   | `//ul[*]`                                                |                         |
| 特定子要素あり               | `//ul[li]`                                               |                         |
| OR ロジック                  | `//a[@name or @href]`                                    | [?](#演算子)            |
| 和集合（結果結合）           | `//a \| //div`                                           | [?](#和集合)            |


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

Xpath には「空白区切りのクラス名に含まれるか」を直接判定する演算子がないため、上記の書き方を使います。

式
-----------

### ステップと軸

| `//` | `ul` | `/`  | `a[@id='link']` |
| ---  | ---  | ---  | ---             |
| 軸   | ステップ | 軸 | ステップ         |

### 前置き

| 前置き | 例                     | 意味     |
| ---    | ---                   | ---      |
| `//`   | `//hr[@class='edge']` | 任意位置 |
| `./`   | `./a`                 | 相対     |
| `/`    | `/html/body/div`      | ルート   |


式はどの前置きから始めても構いません。

### 軸

| 軸  | 例                    | 意味      |
| --- | ---                  | ---       |
| `/` | `//ul/li/a`          | 子要素    |
| `//`| `//[@id="list"]//a` | 子孫要素  |


ステップは `/` で区切ります。直接の子だけを選びたくない場合は `//` を使います。

### ステップ

```bash
//div
//div[@name='box']
//[@id='link']
```

ステップは要素名（`div`）と[述語](#述語)（`[...]`）から成り、どちらも省略可能です。
以下のような形式も使えます：

```bash
//a/text()     #=> "Go home"
//a/@href      #=> "index.html"
//a/*          #=> All a's child elements
```

述語
----------

### 述語

```bash
//div[true()]
//div[@class="head"]
//div[@class="head"][@id="top"]
```

条件が真のときだけノードセットを残します。述語は連結できます。

### 演算子

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

比較・論理演算子で条件を作ります。

### ノードの利用

```bash
# Use them inside functions
//ul[count(li) > 2]
//ul[count(li[@class='hide']) > 0]
```

```bash
# This returns `<ul>` that has a `<li>` child
//ul[li]
```

ノードは述語内で直接使えます。

### インデックス

```bash
//a[1]                  # first <a>
//a[last()]             # last <a>
//ol/li[2]              # second <li>
//ol/li[position()=2]   # same as above
//ol/li[position()>1]   # :not(:first-of-type)
```

`[]` 内で数値、`last()`、`position()` を使って指定します。

### 連結順序

```bash
a[1][@href='/']
a[@href='/'][1]
```

順序によって結果が変わります。

### 入れ子述語

```
//section[.//h1[@id='hi']]
```

`<section>` が id='hi' の `<h1>` を子孫に持つ場合に一致します。

関数
---------

### ノード関数

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

### ブール関数

```bash
not(expr)                  # button[not(starts-with(text(),"Submit"))]
```

### 文字列関数

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

### 型変換

```bash
string()
number()
boolean()
```

軸
----

### 軸の使い方

```bash
//ul/li                       # ul > li
//ul/child::li                # ul > li (same)
//ul/following-sibling::li    # ul ~ li
//ul/descendant-or-self::li   # ul li
//ul/ancestor-or-self::li     # $('ul').closest('li')
```

ステップは通常 `/` で子要素を選びますが、`::` で別の軸を指定できます。

| `//` | `ul` | `/child::` | `li` |
| ---  | ---  | ---        | ---  |
| 軸   | ステップ | 軸      | ステップ |

### 子軸

```bash
# both the same
//ul/li/a
//child::ul/child::li/child::a
```

`child::` がデフォルト軸です。これにより `//a/b/c` が動作します。

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

### 子孫または自身の軸

```bash
# both the same
//div//h4
//div/descendant-or-self::h4
```

`//` は `descendant-or-self::` 軸の省略形です。

```bash
# both the same
//ul//[last()]
//ul/descendant-or-self::[last()]
```

### その他の軸

| 軸                   | 略記 | 備考                                            |
| ---                  | ---  | ---                                              |
| `ancestor`           |      |                                                  |
| `ancestor-or-self`   |      |                                                  |
| `attribute`          | `@`  | `@href` は `attribute::href` の省略形            |
| `child`              |      | `div` は `child::div` の省略形                   |
| `descendant`         |      |                                                  |
| `descendant-or-self` | `//` | `//` は `/descendant-or-self::node()/` の省略形  |
| `namespace`          |      |                                                  |
| `self`               | `.`  | `.` は `self::node()` の省略形                   |
| `parent`             | `..` | `..` は `parent::node()` の省略形                |
| `following`          |      |                                                  |
| `following-sibling`  |      |                                                  |
| `preceding`          |      |                                                  |
| `preceding-sibling`  |      |                                                  |

他にも軸があります。

### 和集合

```bash
//a | //span
```

`|` で 2 つの式結果を結合します。

さらに例
-------------

### 例

```bash
//*                 # all elements
count(//*)          # count all elements
(//h1)[1]/text()    # text of the first h1 heading
//li[span]          # find a <li> with an <span> inside it
                    # ...expands to //li[child::span]
//ul/li/..          # use .. to select a parent
```

### 親要素を探す

```bash
//section[h1[@id='section-name']]
```
`h1#section-name` を直接含む `<section>` を探します。

```bash
//section[//h1[@id='section-name']]
```

`h1#section-name` を含む `<section>` を探します。
（上と同じ結果ですが、child ではなく descendant-or-self を使います）

### 最も近い祖先

```bash
./ancestor-or-self::[@class="box"]
```

jQuery の `$().closest('.box')` と同等です。

### 属性

```bash
//item[@price > 2*@discount]
```

`<item>` を探し、その属性をチェックします。

## テスト

### ブラウザのコンソール

```js
$x("//div")
```
