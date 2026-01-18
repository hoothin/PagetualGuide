# Guía rápida de XPath

## Selectores

### Selectores descendientes

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1`                         | `//h1`                                                   | [?](#prefijos)          |
| `div p`                      | `//div//p`                                               | [?](#ejes)              |
| `ul > li`                    | `//ul/li`                                                | [?](#ejes)              |
| `ul > li > a`                | `//ul/li/a`                                              |                         |
| `div > *`                    | `//div/*`                                                |                         |
| `:root`                      | `/`                                                      | [?](#prefijos)          |
| `:root > body`               | `/body`                                                  |                         |


### Selectores por atributo

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `#id`                        | `//*[@id="id"]`                                        | [?](#predicados)        |
| `.class`                     | `//*[@class="class"]` *...[kinda](#class-check)*        |                         |
| `input[type="submit"]`       | `//input[@type="submit"]`                                |                         |
| `a#abc[for="xyz"]`           | `//a[@id="abc"][@for="xyz"]`                             | [?](#orden-de-encadenado) |
| `a[rel]`                     | `//a[@rel]`                                              |                         |
| `a[href^='/']`               | `//a[starts-with(@href, '/')]`                           | [?](#funciones-de-cadena) |
| `a[href$='pdf']`             | `//a[ends-with(@href, '.pdf')]`                          |                         |
| `a[href*='://']`             | `//a[contains(@href, '://')]`                            |                         |
| `a[rel~='help']`             | `//a[contains(@rel, 'help')]` *...[kinda](#class-check)* |                         |


### Selectores de orden

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `ul > li:first-of-type`      | `//ul/li[1]`                                             | [?](#indexación)        |
| `ul > li:nth-of-type(2)`     | `//ul/li[2]`                                             |                         |
| `ul > li:last-of-type`       | `//ul/li[last()]`                                        |                         |
| `li#id:first-of-type`        | `//li[1][@id="id"]`                                      | [?](#orden-de-encadenado) |
| `a:first-child`              | `//*[1][name()="a"]`                                     |                         |
| `a:last-child`               | `//*[last()][name()="a"]`                                |                         |


### Hermanos

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1 ~ ul`                    | `//h1/following-sibling::ul`                             | [?](#uso-de-ejes)       |
| `h1 + ul`                    | `//h1/following-sibling::ul[1]`                          |                         |
| `h1 ~ #id`                   | `//h1/following-sibling::[@id="id"]`                     |                         |


### jQuery

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `$('ul > li').parent()`      | `//ul/li/..`                                             | [?](#otros-ejes)        |
| `$('li').closest('section')` | `//li/ancestor-or-self::section`                         |                         |
| `$('a').attr('href')`        | `//a/@href`                                              | [?](#pasos)             |
| `$('span').text()`           | `//span/text()`                                          |                         |


### Otros

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1:not([id])`               | `//h1[not(@id)]`                                         | [?](#funciones-booleanas) |
| Coincidencia de texto        | `//button[text()="Submit"]`                              | [?](#operadores)        |
| Coincidencia (subcadena)     | `//button[contains(text(),"Go")]`                        |                         |
| Comparación numérica         | `//product[@price > 2.50]`                               |                         |
| Tiene hijos                  | `//ul[*]`                                                |                         |
| Tiene hijos (específico)     | `//ul[li]`                                               |                         |
| Lógica OR                    | `//a[@name or @href]`                                    | [?](#operadores)        |
| Unión (combina resultados)   | `//a \| //div`                                           | [?](#uniones)           |


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

Xpath no tiene un operador para comprobar si un valor está en una lista separada por espacios; esta es la forma habitual.

Expresiones
-----------

### Pasos y ejes

| `//` | `ul` | `/`  | `a[@id='link']` |
| ---  | ---  | ---  | ---             |
| Eje  | Paso | Eje  | Paso            |

### Prefijos

| Prefijo | Ejemplo               | Significado |
| ---     | ---                   | ---         |
| `//`    | `//hr[@class='edge']` | En cualquier lugar |
| `./`    | `./a`                 | Relativo    |
| `/`     | `/html/body/div`      | Raíz        |


Puedes comenzar una expresión con cualquiera de estos.

### Ejes

| Eje | Ejemplo              | Significado |
| --- | ---                  | ---         |
| `/` | `//ul/li/a`          | Hijo        |
| `//`| `//[@id="list"]//a` | Descendiente |


Separa pasos con `/`. Usa `//` si no quieres seleccionar solo hijos directos.

### Pasos

```bash
//div
//div[@name='box']
//[@id='link']
```

Un paso puede tener un nombre de elemento (`div`) y [predicados](#predicados) (`[...]`). Ambos son opcionales.
También puede ser algo como:

```bash
//a/text()     #=> "Go home"
//a/@href      #=> "index.html"
//a/*          #=> All a's child elements
```

Predicados
----------

### Predicados

```bash
//div[true()]
//div[@class="head"]
//div[@class="head"][@id="top"]
```

Restringe un conjunto de nodos solo si la condición es verdadera. Se pueden encadenar.

### Operadores

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

Usa operadores de comparación y lógica para construir condiciones.

### Usar nodos

```bash
# Use them inside functions
//ul[count(li) > 2]
//ul[count(li[@class='hide']) > 0]
```

```bash
# This returns `<ul>` that has a `<li>` child
//ul[li]
```

Puedes usar nodos directamente dentro de predicados.

### Indexación

```bash
//a[1]                  # first <a>
//a[last()]             # last <a>
//ol/li[2]              # second <li>
//ol/li[position()=2]   # same as above
//ol/li[position()>1]   # :not(:first-of-type)
```

Usa `[]` con un número, o `last()` o `position()`.

### Orden de encadenado

```bash
a[1][@href='/']
a[@href='/'][1]
```

El orden importa; estos dos son distintos.

### Predicados anidados

```
//section[.//h1[@id='hi']]
```

Devuelve `<section>` si tiene un `<h1>` descendiente con id='hi'.

Funciones
---------

### Funciones de nodo

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

### Funciones booleanas

```bash
not(expr)                  # button[not(starts-with(text(),"Submit"))]
```

### Funciones de cadena

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

### Conversión de tipos

```bash
string()
number()
boolean()
```

Ejes
----

### Uso de ejes

```bash
//ul/li                       # ul > li
//ul/child::li                # ul > li (same)
//ul/following-sibling::li    # ul ~ li
//ul/descendant-or-self::li   # ul li
//ul/ancestor-or-self::li     # $('ul').closest('li')
```

Los pasos suelen separarse con `/` para seleccionar hijos, pero puedes indicar otro eje con `::`.

| `//` | `ul` | `/child::` | `li` |
| ---  | ---  | ---        | ---  |
| Eje  | Paso | Eje        | Paso |

### Eje child

```bash
# both the same
//ul/li/a
//child::ul/child::li/child::a
```

`child::` es el eje por defecto. Por eso `//a/b/c` funciona.

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

### Eje descendant-or-self

```bash
# both the same
//div//h4
//div/descendant-or-self::h4
```

`//` es abreviatura del eje `descendant-or-self::`.

```bash
# both the same
//ul//[last()]
//ul/descendant-or-self::[last()]
```

### Otros ejes

| Eje                 | Abrev | Notas                                           |
| ---                 | ---   | ---                                             |
| `ancestor`          |       |                                                 |
| `ancestor-or-self`  |       |                                                 |
| `attribute`         | `@`   | `@href` es abreviatura de `attribute::href`     |
| `child`             |       | `div` es abreviatura de `child::div`            |
| `descendant`        |       |                                                 |
| `descendant-or-self`| `//`  | `//` es abreviatura de `/descendant-or-self::node()/` |
| `namespace`         |       |                                                 |
| `self`              | `.`   | `.` es abreviatura de `self::node()`            |
| `parent`            | `..`  | `..` es abreviatura de `parent::node()`         |
| `following`         |       |                                                 |
| `following-sibling` |       |                                                 |
| `preceding`         |       |                                                 |
| `preceding-sibling` |       |                                                 |

Hay más ejes disponibles.

### Uniones

```bash
//a | //span
```

Usa `|` para unir dos expresiones.

Más ejemplos
-------------

### Ejemplos

```bash
//*                 # all elements
count(//*)          # count all elements
(//h1)[1]/text()    # text of the first h1 heading
//li[span]          # find a <li> with an <span> inside it
                    # ...expands to //li[child::span]
//ul/li/..          # use .. to select a parent
```

### Buscar un padre

```bash
//section[h1[@id='section-name']]
```
Encuentra un `<section>` que contiene directamente `h1#section-name`.

```bash
//section[//h1[@id='section-name']]
```

Encuentra un `<section>` que contiene `h1#section-name`.
(Igual que arriba, pero usando descendant-or-self en lugar de child)

### Closest

```bash
./ancestor-or-self::[@class="box"]
```

Funciona como `$().closest('.box')` de jQuery.

### Atributos

```bash
//item[@price > 2*@discount]
```

Encuentra `<item>` y comprueba sus atributos.

## Pruebas

### Consola del navegador

```js
$x("//div")
```
