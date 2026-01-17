# Aide-mémoire Xpath

## Sélecteurs

### Sélecteurs descendants

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1`                         | `//h1`                                                   | [?](#prefixes)          |
| `div p`                      | `//div//p`                                               | [?](#axes)              |
| `ul > li`                    | `//ul/li`                                                | [?](#axes)              |
| `ul > li > a`                | `//ul/li/a`                                              |                         |
| `div > *`                    | `//div/*`                                                |                         |
| `:root`                      | `/`                                                      | [?](#prefixes)          |
| `:root > body`               | `/body`                                                  |                         |


### Sélecteurs d'attributs

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `#id`                        | `//*[@id="id"]`                                           | [?](#predicates)        |
| `.class`                     | `//*[@class="class"]` *...[un peu](#class-check)*          |                         |
| `input[type="submit"]`       | `//input[@type="submit"]`                                |                         |
| `a#abc[for="xyz"]`           | `//a[@id="abc"][@for="xyz"]`                             | [?](#chaining-order)    |
| `a[rel]`                     | `//a[@rel]`                                              |                         |
| `a[href^='/']`               | `//a[starts-with(@href, '/')]`                           | [?](#string-functions)  |
| `a[href$='pdf']`             | `//a[ends-with(@href, '.pdf')]`                          |                         |
| `a[href*='://']`             | `//a[contains(@href, '://')]`                            |                         |
| `a[rel~='help']`             | `//a[contains(@rel, 'help')]` *...[un peu](#class-check)* |                         |


### Sélecteurs d'ordre

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `ul > li:first-of-type`      | `//ul/li[1]`                                             | [?](#indexing)          |
| `ul > li:nth-of-type(2)`     | `//ul/li[2]`                                             |                         |
| `ul > li:last-of-type`       | `//ul/li[last()]`                                        | [?](#indexing)          |
| `li#id:first-of-type`        | `//li[1][@id="id"]`                                      | [?](#chaining-order)    |
| `a:first-child`              | `//*[1][name()="a"]`                                     |                         |
| `a:last-child`               | `//*[last()][name()="a"]`                                |                         |


### Frères et sœurs

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


### Autres choses

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1:not([id])`               | `//h1[not(@id)]`                                         | [?](#boolean-functions) |
| Correspondance de texte      | `//button[text()="Submit"]`                              | [?](#operators)         |
| Correspondance de texte (sous-chaîne) | `//button[contains(text(),"Go")]`                        |                         |
| Arithmétique                 | `//product[@price > 2.50]`                               |                         |
| A des enfants                | `//ul[*]`                                                |                         |
| A des enfants (spécifique)   | `//ul[li]`                                               |                         |
| Logique OU                   | `//a[@name or @href]`                                    | [?](#operators)         |
| Union (joint les résultats)  | `//a \| //div`                                           | [?](#unions)            |


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

Expressions
-----------

### Étapes et axes

| `//` | `ul` | `/`  | `a[@id='link']` |
| ---  | ---  | ---  | ---             |
| Axe  | Étape | Axe  | Étape           |


Commencez votre expression avec n'importe lequel de ceux-ci.

### Préfixes

| Préfixe | Exemple               | Quoi      |
| ---     | ---                   | ---       |
| `//`    | `//hr[@class='edge']` | N'importe où |
| `./`    | `./a`                 | Relatif   |
| `/`     | `/html/body/div`      | Racine    |


Commencez votre expression avec n'importe lequel de ceux-ci.

### Axes

| Axe | Exemple             | Quoi        |
| --- | ---                 | ---         |
| `/` | `//ul/li/a`         | Enfant      |
| `//` | `//[@id="list"]//a` | Descendant  |


Séparez vos étapes avec `/`. Utilisez deux (`//`) si vous ne voulez pas sélectionner les enfants directs.

### Étapes

```bash
//div
//div[@name='box']
//[@id='link']
```

Une étape peut avoir un nom d'élément (`div`) et [prédicats](#predicates) (`[...]`). Les deux sont facultatifs.
Ils peuvent aussi être ces autres choses :

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

Restreint un ensemble de nœuds uniquement si une condition est vraie. Ils peuvent être chaînés.

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

Utilisez des opérateurs de comparaison et logiques pour créer des conditionnels.

### Utilisation des nœuds

```bash
# Use them inside functions
//ul[count(li) > 2]
//ul[count(li[@class='hide']) > 0]
```

```bash
# This returns `<ul>` that has a `<li>` child
//ul[li]
```

Vous pouvez utiliser des nœuds à l'intérieur des prédicats.

### Indexation

```bash
//a[1]                  # premier <a>
//a[last()]             # dernier <a>
//ol/li[2]              # deuxième <li>
//ol/li[position()=2]   # identique à ci-dessus
//ol/li[position()>1]   # :not(:first-of-type)
```

Utilisez `[]` avec un nombre, ou `last()` ou `position()`.

### Ordre d'enchaînement

```bash
a[1][@href='/']
a[@href='/'][1]
```

L'ordre est significatif, ces deux-là sont différents.

### Imbrication de prédicats

```
//section[.//h1[@id='hi']]
```

Ceci retourne `<section>` si elle contient un descendant `<h1>` avec `id='hi'`.

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

### Utilisation des axes

```bash
//ul/li                       # ul > li
//ul/child::li                # ul > li (same)
//ul/following-sibling::li    # ul ~ li
//ul/descendant-or-self::li   # ul li
//ul/ancestor-or-self::li     # $('ul').closest('li')
```

Les étapes d'une expression sont séparées par `/`, généralement utilisées pour sélectionner des nœuds enfants. Ce n'est pas toujours vrai : vous pouvez spécifier un "axe" différent avec `::`.

| `//` | `ul` | `/child::` | `li` |
| ---  | ---  | ---        | ---  |
| Axe  | Étape | Axe        | Étape |

### Axe enfant

```bash
# les deux sont identiques
//ul/li/a
//child::ul/child::li/child::a
```

`child::` est l'axe par défaut. Cela permet à `//a/b/c` de fonctionner.

```bash
# les deux sont identiques
# cela fonctionne car `child::li` est vrai, donc le prédicat réussit
//ul[li]
//ul[child::li]
```

```bash
# les deux sont identiques
//ul[count(li) > 2]
//ul[count(child::li) > 2]
```

### Axe descendant-ou-soi

```bash
# les deux sont identiques
//div//h4
//div/descendant-or-self::h4
```

`//` est l'abréviation de l'axe `descendant-or-self::`.

```bash
# les deux sont identiques
//ul//[last()]
//ul/descendant-or-self::[last()]
```

### Autres axes

| Axe                  | Abrév. | Notes                                            |
| ---                  | ---    | ---                                              |
| `ancestor`           |        |                                                  |
| `ancestor-or-self`   |        |                                                  |
| `attribute`          | `@`    | `@href` est l'abréviation de `attribute::href`   |
| `child`              |        | `div` est l'abréviation de `child::div`          |
| `descendant`         |        |                                                  |
| `descendant-or-self` | `//`   | `//` est l'abréviation de `/descendant-or-self::node()/` |
| `namespace`          |        |                                                  |
| `self`               | `.`    | `.` est l'abréviation de `self::node()`          |
| `parent`             | `..`   | `..` est l'abréviation de `parent::node()`       |
| `following`          |        |                                                  |
| `following-sibling`  |        |                                                  |
| `preceding`          |        |                                                  |
| `preceding-sibling`  |        |                                                  |

Il existe d'autres axes que vous pouvez utiliser.

### Unions

```bash
//a | //span
```

Utilisez `|` pour joindre deux expressions.

Plus d'exemples
-------------

### Exemples

```bash
//*                 # tous les éléments
count(//*)          # compter tous les éléments
(//h1)[1]/text()    # texte du premier titre h1
//li[span]          # trouver un <li> avec un <span> à l'intérieur
                    # ...s'étend à //li[child::span]
//ul/li/..          # utiliser .. pour sélectionner un parent
```

### Trouver un parent

```bash
//section[h1[@id='section-name']]
```
Trouve une `<section>` qui contient directement `h1#section-name`

```bash
//section[//h1[@id='section-name']]
```

Trouve une `<section>` qui contient `h1#section-name`.
(Identique à ci-dessus, mais utilise descendant-or-self au lieu de child)

### Le plus proche

```bash
./ancestor-or-self::[@class="box"]
```

Fonctionne comme le jQuery's `$().closest('.box')`.

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
