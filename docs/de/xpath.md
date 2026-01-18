# XPath‑Spickzettel

## Selektoren

### Nachfahren‑Selektoren

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1`                         | `//h1`                                                   | [?](#präfixe)           |
| `div p`                      | `//div//p`                                               | [?](#achsen)            |
| `ul > li`                    | `//ul/li`                                                | [?](#achsen)            |
| `ul > li > a`                | `//ul/li/a`                                              |                         |
| `div > *`                    | `//div/*`                                                |                         |
| `:root`                      | `/`                                                      | [?](#präfixe)           |
| `:root > body`               | `/body`                                                  |                         |


### Attribut‑Selektoren

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `#id`                        | `//*[@id="id"]`                                        | [?](#prädikate)         |
| `.class`                     | `//*[@class="class"]` *...[kinda](#class-check)*        |                         |
| `input[type="submit"]`       | `//input[@type="submit"]`                                |                         |
| `a#abc[for="xyz"]`           | `//a[@id="abc"][@for="xyz"]`                             | [?](#verkettungsreihenfolge) |
| `a[rel]`                     | `//a[@rel]`                                              |                         |
| `a[href^='/']`               | `//a[starts-with(@href, '/')]`                           | [?](#string-funktionen) |
| `a[href$='pdf']`             | `//a[ends-with(@href, '.pdf')]`                          |                         |
| `a[href*='://']`             | `//a[contains(@href, '://')]`                            |                         |
| `a[rel~='help']`             | `//a[contains(@rel, 'help')]` *...[kinda](#class-check)* |                         |


### Reihenfolge‑Selektoren

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `ul > li:first-of-type`      | `//ul/li[1]`                                             | [?](#indexierung)       |
| `ul > li:nth-of-type(2)`     | `//ul/li[2]`                                             |                         |
| `ul > li:last-of-type`       | `//ul/li[last()]`                                        |                         |
| `li#id:first-of-type`        | `//li[1][@id="id"]`                                      | [?](#verkettungsreihenfolge) |
| `a:first-child`              | `//*[1][name()="a"]`                                     |                         |
| `a:last-child`               | `//*[last()][name()="a"]`                                |                         |


### Geschwister

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1 ~ ul`                    | `//h1/following-sibling::ul`                             | [?](#achsen-verwenden)  |
| `h1 + ul`                    | `//h1/following-sibling::ul[1]`                          |                         |
| `h1 ~ #id`                   | `//h1/following-sibling::[@id="id"]`                     |                         |


### jQuery

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `$('ul > li').parent()`      | `//ul/li/..`                                             | [?](#andere-achsen)     |
| `$('li').closest('section')` | `//li/ancestor-or-self::section`                         |                         |
| `$('a').attr('href')`        | `//a/@href`                                              | [?](#schritte)          |
| `$('span').text()`           | `//span/text()`                                          |                         |


### Sonstiges

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1:not([id])`               | `//h1[not(@id)]`                                         | [?](#boolesche-funktionen) |
| Textabgleich                 | `//button[text()="Submit"]`                              | [?](#operatoren)        |
| Textabgleich (Teilstring)    | `//button[contains(text(),"Go")]`                        |                         |
| Arithmetik                   | `//product[@price > 2.50]`                               |                         |
| Hat Kinder                   | `//ul[*]`                                                |                         |
| Hat bestimmte Kinder         | `//ul[li]`                                               |                         |
| ODER‑Logik                   | `//a[@name or @href]`                                    | [?](#operatoren)        |
| Vereinigung (Ergebnisse)     | `//a \| //div`                                           | [?](#vereinigungen)     |


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

Xpath hat keinen Operator „Teil einer leerzeichen‑getrennten Liste“. Das ist der übliche Workaround.

Ausdrücke
-----------

### Schritte und Achsen

| `//` | `ul` | `/`  | `a[@id='link']` |
| ---  | ---  | ---  | ---             |
| Achse | Schritt | Achse | Schritt      |

### Präfixe

| Präfix | Beispiel              | Bedeutung |
| ---    | ---                   | ---       |
| `//`   | `//hr[@class='edge']` | Überall   |
| `./`   | `./a`                 | Relativ   |
| `/`    | `/html/body/div`      | Root      |


Beginne den Ausdruck mit einem dieser Präfixe.

### Achsen

| Achse | Beispiel             | Bedeutung  |
| ---   | ---                  | ---        |
| `/`   | `//ul/li/a`          | Child      |
| `//`  | `//[@id="list"]//a` | Descendant |


Trenne Schritte mit `/`. Nutze `//`, wenn es nicht nur direkte Kinder sein sollen.

### Schritte

```bash
//div
//div[@name='box']
//[@id='link']
```

Ein Schritt kann einen Elementnamen (`div`) und [Prädikate](#prädikate) (`[...]`) haben. Beides ist optional.
Auch möglich:

```bash
//a/text()     #=> "Go home"
//a/@href      #=> "index.html"
//a/*          #=> All a's child elements
```

Prädikate
----------

### Prädikate

```bash
//div[true()]
//div[@class="head"]
//div[@class="head"][@id="top"]
```

Begrenzt den Node‑Satz nur, wenn die Bedingung wahr ist. Prädikate können verkettet werden.

### Operatoren

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

Nutze Vergleichs‑ und Logikoperatoren für Bedingungen.

### Nodes verwenden

```bash
# Use them inside functions
//ul[count(li) > 2]
//ul[count(li[@class='hide']) > 0]
```

```bash
# This returns `<ul>` that has a `<li>` child
//ul[li]
```

Nodes können direkt in Prädikaten genutzt werden.

### Indexierung

```bash
//a[1]                  # first <a>
//a[last()]             # last <a>
//ol/li[2]              # second <li>
//ol/li[position()=2]   # same as above
//ol/li[position()>1]   # :not(:first-of-type)
```

Verwende `[]` mit Zahl, `last()` oder `position()`.

### Verkettungsreihenfolge

```bash
a[1][@href='/']
a[@href='/'][1]
```

Die Reihenfolge ist wichtig; diese beiden unterscheiden sich.

### Verschachtelte Prädikate

```
//section[.//h1[@id='hi']]
```

Gibt `<section>` zurück, wenn es einen `<h1>`‑Nachfahren mit id='hi' hat.

Funktionen
---------

### Node‑Funktionen

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

### Boolesche Funktionen

```bash
not(expr)                  # button[not(starts-with(text(),"Submit"))]
```

### String‑Funktionen

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

### Typumwandlung

```bash
string()
number()
boolean()
```

Achsen
----

### Achsen verwenden

```bash
//ul/li                       # ul > li
//ul/child::li                # ul > li (same)
//ul/following-sibling::li    # ul ~ li
//ul/descendant-or-self::li   # ul li
//ul/ancestor-or-self::li     # $('ul').closest('li')
```

Schritte werden mit `/` getrennt, können aber mit `::` einen anderen Axis nutzen.

| `//` | `ul` | `/child::` | `li` |
| ---  | ---  | ---        | ---  |
| Achse | Schritt | Achse   | Schritt |

### Child‑Achse

```bash
# both the same
//ul/li/a
//child::ul/child::li/child::a
```

`child::` ist die Standardachse. Deshalb funktioniert `//a/b/c`.

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

### Descendant‑or‑self‑Achse

```bash
# both the same
//div//h4
//div/descendant-or-self::h4
```

`//` ist die Kurzform der `descendant-or-self::`‑Achse.

```bash
# both the same
//ul//[last()]
//ul/descendant-or-self::[last()]
```

### Andere Achsen

| Achse                | Kürzel | Hinweise                                         |
| ---                  | ---    | ---                                              |
| `ancestor`           |        |                                                  |
| `ancestor-or-self`   |        |                                                  |
| `attribute`          | `@`    | `@href` ist Kurzform von `attribute::href`       |
| `child`              |        | `div` ist Kurzform von `child::div`              |
| `descendant`         |        |                                                  |
| `descendant-or-self` | `//`   | `//` ist Kurzform von `/descendant-or-self::node()/` |
| `namespace`          |        |                                                  |
| `self`               | `.`    | `.` ist Kurzform von `self::node()`              |
| `parent`             | `..`   | `..` ist Kurzform von `parent::node()`           |
| `following`          |        |                                                  |
| `following-sibling`  |        |                                                  |
| `preceding`          |        |                                                  |
| `preceding-sibling`  |        |                                                  |

Es gibt weitere Achsen.

### Vereinigungen

```bash
//a | //span
```

`|` verbindet zwei Ausdrücke.

Weitere Beispiele
-------------

### Beispiele

```bash
//*                 # all elements
count(//*)          # count all elements
(//h1)[1]/text()    # text of the first h1 heading
//li[span]          # find a <li> with an <span> inside it
                    # ...expands to //li[child::span]
//ul/li/..          # use .. to select a parent
```

### Parent finden

```bash
//section[h1[@id='section-name']]
```
Findet ein `<section>`, das `h1#section-name` direkt enthält.

```bash
//section[//h1[@id='section-name']]
```

Findet ein `<section>`, das `h1#section-name` enthält.
(Gleiches Ergebnis, aber mit descendant-or-self statt child)

### Nächstes Eltern‑Element

```bash
./ancestor-or-self::[@class="box"]
```

Entspricht jQuerys `$().closest('.box')`.

### Attribute

```bash
//item[@price > 2*@discount]
```

Findet `<item>` und prüft Attribute.

## Testen

### Browser‑Konsole

```js
$x("//div")
```
