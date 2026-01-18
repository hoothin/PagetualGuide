# Быстрый справочник XPath

## Селекторы

### Селекторы потомков

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1`                         | `//h1`                                                   | [?](#префиксы)          |
| `div p`                      | `//div//p`                                               | [?](#оси)               |
| `ul > li`                    | `//ul/li`                                                | [?](#оси)               |
| `ul > li > a`                | `//ul/li/a`                                              |                         |
| `div > *`                    | `//div/*`                                                |                         |
| `:root`                      | `/`                                                      | [?](#префиксы)          |
| `:root > body`               | `/body`                                                  |                         |


### Атрибутные селекторы

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `#id`                        | `//*[@id="id"]`                                        | [?](#предикаты)         |
| `.class`                     | `//*[@class="class"]` *...[kinda](#class-check)*        |                         |
| `input[type="submit"]`       | `//input[@type="submit"]`                                |                         |
| `a#abc[for="xyz"]`           | `//a[@id="abc"][@for="xyz"]`                             | [?](#порядок-цепочек)    |
| `a[rel]`                     | `//a[@rel]`                                              |                         |
| `a[href^='/']`               | `//a[starts-with(@href, '/')]`                           | [?](#строковые-функции) |
| `a[href$='pdf']`             | `//a[ends-with(@href, '.pdf')]`                          |                         |
| `a[href*='://']`             | `//a[contains(@href, '://')]`                            |                         |
| `a[rel~='help']`             | `//a[contains(@rel, 'help')]` *...[kinda](#class-check)* |                         |


### Селекторы порядка

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `ul > li:first-of-type`      | `//ul/li[1]`                                             | [?](#индексация)        |
| `ul > li:nth-of-type(2)`     | `//ul/li[2]`                                             |                         |
| `ul > li:last-of-type`       | `//ul/li[last()]`                                        |                         |
| `li#id:first-of-type`        | `//li[1][@id="id"]`                                      | [?](#порядок-цепочек)    |
| `a:first-child`              | `//*[1][name()="a"]`                                     |                         |
| `a:last-child`               | `//*[last()][name()="a"]`                                |                         |


### Соседи

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1 ~ ul`                    | `//h1/following-sibling::ul`                             | [?](#использование-осей) |
| `h1 + ul`                    | `//h1/following-sibling::ul[1]`                          |                         |
| `h1 ~ #id`                   | `//h1/following-sibling::[@id="id"]`                     |                         |


### jQuery

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `$('ul > li').parent()`      | `//ul/li/..`                                             | [?](#другие-оси)         |
| `$('li').closest('section')` | `//li/ancestor-or-self::section`                         |                         |
| `$('a').attr('href')`        | `//a/@href`                                              | [?](#шаги)               |
| `$('span').text()`           | `//span/text()`                                          |                         |


### Прочее

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1:not([id])`               | `//h1[not(@id)]`                                         | [?](#булевы-функции)     |
| Точное совпадение текста     | `//button[text()="Submit"]`                              | [?](#операторы)         |
| Совпадение текста (часть)    | `//button[contains(text(),"Go")]`                        |                         |
| Арифметика                   | `//product[@price > 2.50]`                               |                         |
| Есть дети                    | `//ul[*]`                                                |                         |
| Есть конкретные дети         | `//ul[li]`                                               |                         |
| Логика OR                    | `//a[@name or @href]`                                    | [?](#операторы)         |
| Объединение (union)          | `//a \| //div`                                           | [?](#объединения)       |


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

В XPath нет оператора «проверить вхождение в список, разделённый пробелами». Это стандартный обходной вариант.

Выражения
-----------

### Шаги и оси

| `//` | `ul` | `/`  | `a[@id='link']` |
| ---  | ---  | ---  | ---             |
| Ось  | Шаг  | Ось  | Шаг             |

### Префиксы

| Префикс | Пример                | Значение  |
| ---     | ---                   | ---       |
| `//`    | `//hr[@class='edge']` | Где угодно |
| `./`    | `./a`                 | Относительный |
| `/`     | `/html/body/div`      | Корень    |


Начинать выражение можно с любого из этих префиксов.

### Оси

| Ось | Пример               | Значение   |
| --- | ---                  | ---        |
| `/` | `//ul/li/a`          | Дочерний   |
| `//`| `//[@id="list"]//a` | Потомок    |


Разделяйте шаги с помощью `/`. Используйте `//`, если не нужны только прямые дети.

### Шаги

```bash
//div
//div[@name='box']
//[@id='link']
```

Шаг может иметь имя элемента (`div`) и [предикаты](#предикаты) (`[...]`). Оба необязательны.
Также можно использовать:

```bash
//a/text()     #=> "Go home"
//a/@href      #=> "index.html"
//a/*          #=> All a's child elements
```

Предикаты
----------

### Предикаты

```bash
//div[true()]
//div[@class="head"]
//div[@class="head"][@id="top"]
```

Ограничивают набор узлов, если условие истинно. Предикаты можно цепочить.

### Операторы

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

Используйте сравнение и логические операторы для условий.

### Использование узлов

```bash
# Use them inside functions
//ul[count(li) > 2]
//ul[count(li[@class='hide']) > 0]
```

```bash
# This returns `<ul>` that has a `<li>` child
//ul[li]
```

Узлы можно использовать внутри предикатов.

### Индексация

```bash
//a[1]                  # first <a>
//a[last()]             # last <a>
//ol/li[2]              # second <li>
//ol/li[position()=2]   # same as above
//ol/li[position()>1]   # :not(:first-of-type)
```

Используйте `[]` с числом, `last()` или `position()`.

### Порядок цепочек

```bash
a[1][@href='/']
a[@href='/'][1]
```

Порядок важен: эти выражения разные.

### Вложенные предикаты

```
//section[.//h1[@id='hi']]
```

Возвращает `<section>`, если внутри есть потомок `<h1>` с id='hi'.

Функции
---------

### Функции узлов

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

### Булевы функции

```bash
not(expr)                  # button[not(starts-with(text(),"Submit"))]
```

### Строковые функции

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

### Преобразование типов

```bash
string()
number()
boolean()
```

Оси
----

### Использование осей

```bash
//ul/li                       # ul > li
//ul/child::li                # ul > li (same)
//ul/following-sibling::li    # ul ~ li
//ul/descendant-or-self::li   # ul li
//ul/ancestor-or-self::li     # $('ul').closest('li')
```

Шаги обычно разделяются `/` и выбирают детей, но можно указать другую ось через `::`.

| `//` | `ul` | `/child::` | `li` |
| ---  | ---  | ---        | ---  |
| Ось  | Шаг  | Ось        | Шаг  |

### Дочерняя ось

```bash
# both the same
//ul/li/a
//child::ul/child::li/child::a
```

`child::` — ось по умолчанию. Поэтому `//a/b/c` работает.

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

### Ось descendant-or-self

```bash
# both the same
//div//h4
//div/descendant-or-self::h4
```

`//` — сокращение для оси `descendant-or-self::`.

```bash
# both the same
//ul//[last()]
//ul/descendant-or-self::[last()]
```

### Другие оси

| Ось                 | Сокр | Примечания                                      |
| ---                 | ---  | ---                                              |
| `ancestor`          |      |                                                  |
| `ancestor-or-self`  |      |                                                  |
| `attribute`         | `@`  | `@href` — сокращение `attribute::href`           |
| `child`             |      | `div` — сокращение `child::div`                  |
| `descendant`        |      |                                                  |
| `descendant-or-self`| `//` | `//` — сокращение `/descendant-or-self::node()/` |
| `namespace`         |      |                                                  |
| `self`              | `.`  | `.` — сокращение `self::node()`                  |
| `parent`            | `..` | `..` — сокращение `parent::node()`               |
| `following`         |      |                                                  |
| `following-sibling` |      |                                                  |
| `preceding`         |      |                                                  |
| `preceding-sibling` |      |                                                  |

Есть и другие оси.

### Объединения

```bash
//a | //span
```

`|` объединяет два выражения.

Больше примеров
-------------

### Примеры

```bash
//*                 # all elements
count(//*)          # count all elements
(//h1)[1]/text()    # text of the first h1 heading
//li[span]          # find a <li> with an <span> inside it
                    # ...expands to //li[child::span]
//ul/li/..          # use .. to select a parent
```

### Найти родителя

```bash
//section[h1[@id='section-name']]
```
Находит `<section>`, который напрямую содержит `h1#section-name`.

```bash
//section[//h1[@id='section-name']]
```

Находит `<section>`, содержащий `h1#section-name`.
(То же самое, но с descendant-or-self вместо child)

### Closest

```bash
./ancestor-or-self::[@class="box"]
```

Похоже на `$().closest('.box')` в jQuery.

### Атрибуты

```bash
//item[@price > 2*@discount]
```

Находит `<item>` и проверяет его атрибуты.

## Тестирование

### Консоль браузера

```js
$x("//div")
```
