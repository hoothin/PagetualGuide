# Aide‑mémoire XPath

## Sélecteurs

### Sélecteurs descendants

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1`                         | `//h1`                                                   | [?](#préfixes)          |
| `div p`                      | `//div//p`                                               | [?](#axes)              |
| `ul > li`                    | `//ul/li`                                                | [?](#axes)              |
| `ul > li > a`                | `//ul/li/a`                                              |                         |
| `div > *`                    | `//div/*`                                                |                         |
| `:root`                      | `/`                                                      | [?](#préfixes)          |
| `:root > body`               | `/body`                                                  |                         |


### Sélecteurs d’attribut

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `#id`                        | `//*[@id="id"]`                                        | [?](#prédicats)         |
| `.class`                     | `//*[@class="class"]` *...[kinda](#class-check)*        |                         |
| `input[type="submit"]`       | `//input[@type="submit"]`                                |                         |
| `a#abc[for="xyz"]`           | `//a[@id="abc"][@for="xyz"]`                             | [?](#ordre-denchaînement) |
| `a[rel]`                     | `//a[@rel]`                                              |                         |
| `a[href^='/']`               | `//a[starts-with(@href, '/')]`                           | [?](#fonctions-de-chaîne) |
| `a[href$='pdf']`             | `//a[ends-with(@href, '.pdf')]`                          |                         |
| `a[href*='://']`             | `//a[contains(@href, '://')]`                            |                         |
| `a[rel~='help']`             | `//a[contains(@rel, 'help')]` *...[kinda](#class-check)* |                         |


### Sélecteurs d’ordre

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `ul > li:first-of-type`      | `//ul/li[1]`                                             | [?](#indexation)        |
| `ul > li:nth-of-type(2)`     | `//ul/li[2]`                                             |                         |
| `ul > li:last-of-type`       | `//ul/li[last()]`                                        |                         |
| `li#id:first-of-type`        | `//li[1][@id="id"]`                                      | [?](#ordre-denchaînement) |
| `a:first-child`              | `//*[1][name()="a"]`                                     |                         |
| `a:last-child`               | `//*[last()][name()="a"]`                                |                         |


### Frères (siblings)

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1 ~ ul`                    | `//h1/following-sibling::ul`                             | [?](#utiliser-les-axes) |
| `h1 + ul`                    | `//h1/following-sibling::ul[1]`                          |                         |
| `h1 ~ #id`                   | `//h1/following-sibling::[@id="id"]`                     |                         |


### jQuery

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `$('ul > li').parent()`      | `//ul/li/..`                                             | [?](#autres-axes)       |
| `$('li').closest('section')` | `//li/ancestor-or-self::section`                         |                         |
| `$('a').attr('href')`        | `//a/@href`                                              | [?](#étapes)            |
| `$('span').text()`           | `//span/text()`                                          |                         |


### Autres

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1:not([id])`               | `//h1[not(@id)]`                                         | [?](#fonctions-booléennes) |
| Correspondance texte         | `//button[text()="Submit"]`                              | [?](#opérateurs)        |
| Correspondance (sous‑chaîne) | `//button[contains(text(),"Go")]`                        |                         |
| Comparaison numérique        | `//product[@price > 2.50]`                               |                         |
| A des enfants                | `//ul[*]`                                                |                         |
| A un enfant spécifique       | `//ul[li]`                                               |                         |
| Logique OU                   | `//a[@name or @href]`                                    | [?](#opérateurs)        |
| Union (fusionne les résultats)| `//a \| //div`                                          | [?](#unions)            |


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

Xpath n’a pas d’opérateur pour « vérifier l’appartenance à une liste séparée par espaces ». Cette forme est le contournement courant.

Expressions
-----------

### Étapes et axes

| `//` | `ul` | `/`  | `a[@id='link']` |
| ---  | ---  | ---  | ---             |
| Axe  | Étape | Axe | Étape           |

### Préfixes

| Préfixe | Exemple               | Signification |
| ---     | ---                   | ---          |
| `//`    | `//hr[@class='edge']` | N’importe où |
| `./`    | `./a`                 | Relatif      |
| `/`     | `/html/body/div`      | Racine       |


Commencez votre expression par l’un de ces préfixes.

### Axes

| Axe | Exemple               | Signification |
| --- | ---                   | ---          |
| `/` | `//ul/li/a`           | Enfant       |
| `//`| `//[@id="list"]//a`  | Descendant   |


Séparez les étapes avec `/`. Utilisez `//` si vous ne voulez pas seulement les enfants directs.

### Étapes

```bash
//div
//div[@name='box']
//[@id='link']
```

Une étape peut avoir un nom d’élément (`div`) et des [prédicats](#prédicats) (`[...]`). Les deux sont optionnels.
Elle peut aussi être :

```bash
//a/text()     #=> "Go home"
//a/@href      #=> "index.html"
//a/*          #=> All a's child elements
```

Prédicats
----------

### Prédicats

```bash
//div[true()]
//div[@class="head"]
//div[@class="head"][@id="top"]
```

Restreint le nodeset uniquement si la condition est vraie. Les prédicats peuvent être chaînés.

### Opérateurs

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

Utilisez les opérateurs de comparaison et de logique pour construire des conditions.

### Utiliser des nœuds

```bash
# Use them inside functions
//ul[count(li) > 2]
//ul[count(li[@class='hide']) > 0]
```

```bash
# This returns `<ul>` that has a `<li>` child
//ul[li]
```

Vous pouvez utiliser des nœuds dans les prédicats.

### Indexation

```bash
//a[1]                  # first <a>
//a[last()]             # last <a>
//ol/li[2]              # second <li>
//ol/li[position()=2]   # same as above
//ol/li[position()>1]   # :not(:first-of-type)
```

Utilisez `[]` avec un nombre, ou `last()` ou `position()`.

### Ordre d’enchaînement

```bash
a[1][@href='/']
a[@href='/'][1]
```

L’ordre compte : ces deux expressions sont différentes.

### Prédicats imbriqués

```
//section[.//h1[@id='hi']]
```

Retourne `<section>` s’il a un `<h1>` descendant avec id='hi'.

Fonctions
---------

### Fonctions de nœud

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

### Fonctions booléennes

```bash
not(expr)                  # button[not(starts-with(text(),"Submit"))]
```

### Fonctions de chaîne

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

### Conversion de type

```bash
string()
number()
boolean()
```

Axes
----

### Utiliser les axes

```bash
//ul/li                       # ul > li
//ul/child::li                # ul > li (same)
//ul/following-sibling::li    # ul ~ li
//ul/descendant-or-self::li   # ul li
//ul/ancestor-or-self::li     # $('ul').closest('li')
```

Les étapes sont séparées par `/` pour sélectionner des enfants, mais vous pouvez spécifier un autre axe avec `::`.

| `//` | `ul` | `/child::` | `li` |
| ---  | ---  | ---        | ---  |
| Axe  | Étape | Axe       | Étape |

### Axe child

```bash
# both the same
//ul/li/a
//child::ul/child::li/child::a
```

`child::` est l’axe par défaut. C’est pourquoi `//a/b/c` fonctionne.

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

### Axe descendant-or-self

```bash
# both the same
//div//h4
//div/descendant-or-self::h4
```

`//` est un raccourci de l’axe `descendant-or-self::`.

```bash
# both the same
//ul//[last()]
//ul/descendant-or-self::[last()]
```

### Autres axes

| Axe                 | Abrév | Notes                                            |
| ---                 | ---   | ---                                              |
| `ancestor`          |       |                                                  |
| `ancestor-or-self`  |       |                                                  |
| `attribute`         | `@`   | `@href` est le raccourci de `attribute::href`    |
| `child`             |       | `div` est le raccourci de `child::div`           |
| `descendant`        |       |                                                  |
| `descendant-or-self`| `//`  | `//` est le raccourci de `/descendant-or-self::node()/` |
| `namespace`         |       |                                                  |
| `self`              | `.`   | `.` est le raccourci de `self::node()`           |
| `parent`            | `..`  | `..` est le raccourci de `parent::node()`        |
| `following`         |       |                                                  |
| `following-sibling` |       |                                                  |
| `preceding`         |       |                                                  |
| `preceding-sibling` |       |                                                  |

Il existe d’autres axes utilisables.

### Unions

```bash
//a | //span
```

Utilisez `|` pour joindre deux expressions.

Plus d’exemples
-------------

### Exemples

```bash
//*                 # all elements
count(//*)          # count all elements
(//h1)[1]/text()    # text of the first h1 heading
//li[span]          # find a <li> with an <span> inside it
                    # ...expands to //li[child::span]
//ul/li/..          # use .. to select a parent
```

### Trouver un parent

```bash
//section[h1[@id='section-name']]
```
Trouve un `<section>` qui contient directement `h1#section-name`.

```bash
//section[//h1[@id='section-name']]
```

Trouve un `<section>` qui contient `h1#section-name`.
(Même résultat, mais avec descendant-or-self au lieu de child)

### Closest

```bash
./ancestor-or-self::[@class="box"]
```

Équivaut à `$().closest('.box')` de jQuery.

### Attributs

```bash
//item[@price > 2*@discount]
```

Trouve `<item>` et vérifie ses attributs.

## Tests

### Console du navigateur

```js
$x("//div")
```
