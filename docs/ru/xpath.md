# Шпаргалка по Xpath

## Селекторы

### Селекторы потомков

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1`                         | `//h1`                                                   | [?](#prefixes)          |
| `div p`                      | `//div//p`                                               | [?](#axes)              |
| `ul > li`                    | `//ul/li`                                                | [?](#axes)              |
| `ul > li > a`                | `//ul/li/a`                                              |                         |
| `div > *`                    | `//div/*`                                                |                         |
| `:root`                      | `/`                                                      | [?](#prefixes)          |
| `:root > body`               | `/body`                                                  |                         |


### Селекторы атрибутов

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `#id`                        | `//*[@id="id"]`                                           | [?](#predicates)        |
| `.class`                     | `//*[@class="class"]` *...[вроде](#class-check)*          |                         |
| `input[type="submit"]`       | `//input[@type="submit"]`                                |                         |
| `a#abc[for="xyz"]`           | `//a[@id="abc"][@for="xyz"]`                             | [?](#chaining-order)    |
| `a[rel]`                     | `//a[@rel]`                                              |                         |
| `a[href^='/']`               | `//a[starts-with(@href, '/')]`                           | [?](#string-functions)  |
| `a[href$='pdf']`             | `//a[ends-with(@href, '.pdf')]`                          |                         |
| `a[href*='://']`             | `//a[contains(@href, '://')]`                            |                         |
| `a[rel~='help']`             | `//a[contains(@rel, 'help')]` *...[вроде](#class-check)* |                         |


### Селекторы порядка

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `ul > li:first-of-type`      | `//ul/li[1]`                                             | [?](#indexing)          |
| `ul > li:nth-of-type(2)`     | `//ul/li[2]`                                             |                         |
| `ul > li:last-of-type`       | `//ul/li[last()]`                                        |                         |
| `li#id:first-of-type`        | `//li[1][@id="id"]`                                      | [?](#chaining-order)    |
| `a:first-child`              | `//*[1][name()="a"]`                                     |                         |
| `a:last-child`               | `//*[last()][name()="a"]`                                |                         |


### Соседние элементы

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1 ~ ul`                    | `//h1/following-sibling::ul`                             | [?](#using-axes)        |
| `h1 + ul`                    | `//h1/following-sibling::ul[1]`                          |                         |
| `h1 ~ #id`                   | `//h1/following-sibling::[@id="id"]`                     |                         |


### jQuery

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `$('ul > li').parent()`      | `//ul/li/..`                                             | [?](#other-axes)        |
| `$('li').closest('section')` | `//li/ancestor-or-self::section`                         |                         |
| `$('a').attr('href')`        | `//a/@href`                                              | [?](#steps)             |
| `$('span').text()`           | `//span/text()`                                          |                         |


### Другие вещи

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1:not([id])`               | `//h1[not(@id)]`                                         | [?](#boolean-functions) |
| Совпадение текста            | `//button[text()="Submit"]`                              | [?](#operators)         |
| Совпадение текста (подстрока)| `//button[contains(text(),"Go")]`                        |                         |
| Арифметика                   | `//product[@price > 2.50]`                               |                         |
| Имеет дочерние элементы      | `//ul[*]`                                                |                         |
| Имеет дочерние элементы (специфичные)| `//ul[li]`                                               |                         |
| Логика ИЛИ                   | `//a[@name or @href]`                                    | [?](#operators)         |
| Объединение (объединяет результаты)| `//a \| //div`                                           | [?](#unions)            |


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

Xpath doesn't have the "check if part of space-separated list" operator, so this is the workaround.

Выражения
-----------

### Шаги и оси

| `//` | `ul` | `/`  | `a[@id='link']` |
| ---  | ---  | ---  | ---             |
| Ось  | Шаг  | Ось  | Шаг             |


Начинайте выражение с любого из них.

### Префиксы

| Префикс | Пример                | Что      |
| ---     | ---                   | ---      |
| `//`    | `//hr[@class='edge']` | Везде    |
| `./`    | `./a`                 | Относительно |
| `/`     | `/html/body/div`      | Корень   |


Начинайте выражение с любого из них.

### Оси

| Ось | Пример              | Что        |
| --- | ---                 | ---        |
| `/` | `//ul/li/a`         | Дочерний   |
| `//`| `//[@id="list"]//a` | Потомок    |


Разделяйте шаги с помощью `/`. Используйте два (`//`), если вы не хотите выбирать прямых потомков.

### Шаги

```bash
//div
//div[@name='box']
//[@id='link']
```

Шаг может иметь имя элемента (`div`) и [предикаты](#predicates) (`[...]`). Оба необязательны.
Они также могут быть следующими:

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

Ограничивает набор узлов только в том случае, если некоторое условие истинно. Их можно объединять в цепочки.

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

Используйте операторы сравнения и логические операторы для создания условий.

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

Вы можете использовать узлы внутри предикатов.

### Индексация

```bash
//a[1]                  # первый <a>
//a[last()]             # последний <a>
//ol/li[2]              # второй <li>
//ol/li[position()=2]   # то же, что и выше
//ol/li[position()>1]   # :not(:first-of-type)
```

Используйте `[]` с числом, или `last()` или `position()`.

### Порядок цепочки

```bash
a[1][@href='/']
a[@href='/'][1]
```

Порядок имеет значение, эти два выражения отличаются.

### Вложенные предикаты

```
//section[.//h1[@id='hi']]
```

Это возвращает `<section>`, если у него есть потомок `<h1>` с `id='hi'`.

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

### Логические функции

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

Шаги выражения разделяются символом `/`, обычно используемым для выбора дочерних узлов. Это не всегда так: вы можете указать другую "ось" с помощью `::`.

| `//` | `ul` | `/child::` | `li` |
| ---  | ---  | ---        | ---  |
| Ось  | Шаг  | Ось        | Шаг  |

### Дочерняя ось

```bash
# both the same
//ul/li/a
//child::ul/child::li/child::a
```

`child::` — это ось по умолчанию. Это позволяет работать `//a/b/c`.

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

### Ось потомок-или-сам

```bash
# both the same
//div//h4
//div/descendant-or-self::h4
```

`//` — это сокращение для оси `descendant-or-self::`.

```bash
# both the same
//ul//[last()]
//ul/descendant-or-self::[last()]
```

### Другие оси

| Ось                  | Сокращение | Примечания                                       |
| ---                  | ---        | ---                                              |
| `ancestor`           |            |                                                  |
| `ancestor-or-self`   |            |                                                  |
| `attribute`          | `@`        | `@href` — это сокращение от `attribute::href`    |
| `child`              |            | `div` — это сокращение от `child::div`           |
| `descendant`         |            |                                                  |
| `descendant-or-self` | `//`       | `//` — это сокращение от `/descendant-or-self::node()/` |
| `namespace`          |            |                                                  |
| `self`               | `.`        | `.` — это сокращение от `self::node()`           |
| `parent`             | `..`       | `..` — это сокращение от `parent::node()`        |
| `following`          |            |                                                  |
| `following-sibling`  |            |                                                  |
| `preceding`          |            |                                                  |
| `preceding-sibling`  |            |                                                  |

Вы можете использовать другие оси.

### Объединения

```bash
//a | //span
```

Используйте `|` для объединения двух выражений.

Больше примеров
-------------

### Примеры

```bash
//*                 # все элементы
count(//*)          # подсчитать все элементы
(//h1)[1]/text()    # текст первого заголовка h1
//li[span]          # найти <li> с <span> внутри него
                    # ...разворачивается в //li[child::span]
//ul/li/..          # использовать .. для выбора родителя
```

### Найти родителя

```bash
//section[h1[@id='section-name']]
```
Находит `<section>`, который непосредственно содержит `h1#section-name`.

```bash
//section[//h1[@id='section-name']]
```

Находит `<section>`, который содержит `h1#section-name`.
(То же самое, что и выше, но использует `descendant-or-self` вместо `child`)

### Ближайший

```bash
./ancestor-or-self::[@class="box"]
```

Работает как jQuery's `$().closest('.box')`.

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
