# Hoja de trucos de Xpath

## Selectores

### Selectores descendientes

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1`                         | `//h1`                                                   | [?](#prefixes)          |
| `div p`                      | `//div//p`                                               | [?](#axes)              |
| `ul > li`                    | `//ul/li`                                                | [?](#axes)              |
| `ul > li > a`                | `//ul/li/a`                                              |                         |
| `div > *`                    | `//div/*`                                                |                         |
| `:root`                      | `/`                                                      | [?](#prefixes)          |
| `:root > body`               | `/body`                                                  |                         |


### Selectores de atributo

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `#id`                        | `//*[@id="id"]`                                           | [?](#predicates)        |
| `.class`                     | `//*[@class="class"]` *...[algo así](#class-check)*          |                         |
| `input[type="submit"]`       | `//input[@type="submit"]`                                |                         |
| `a#abc[for="xyz"]`           | `//a[@id="abc"][@for="xyz"]`                             | [?](#chaining-order)    |
| `a[rel]`                     | `//a[@rel]`                                              |                         |
| `a[href^='/']`               | `//a[starts-with(@href, '/')]`                           | [?](#string-functions)  |
| `a[href$='pdf']`             | `//a[ends-with(@href, '.pdf')]`                          |                         |
| `a[href*='://']`             | `//a[contains(@href, '://')]`                            |                         |
| `a[rel~='help']`             | `//a[contains(@rel, 'help')]` *...[algo así](#class-check)* |                         |


### Selectores de orden

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `ul > li:first-of-type`      | `//ul/li[1]`                                             | [?](#indexing)          |
| `ul > li:nth-of-type(2)`     | `//ul/li[2]`                                             |                         |
| `ul > li:last-of-type`       | `//ul/li[last()]`                                        |                         |
| `li#id:first-of-type`        | `//li[1][@id="id"]`                                      | [?](#chaining-order)    |
| `a:first-child`              | `//*[1][name()="a"]`                                     |                         |
| `a:last-child`               | `//*[last()][name()="a"]`                                |                         |


### Hermanos

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


### Otras cosas

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1:not([id])`               | `//h1[not(@id)]`                                         | [?](#boolean-functions) |
| Coincidencia de texto        | `//button[text()="Submit"]`                              | [?](#operators)         |
| Coincidencia de texto (subcadena) | `//button[contains(text(),"Go")]`                        |                         |
| Aritmética                   | `//product[@price > 2.50]`                               |                         |
| Tiene hijos                  | `//ul[*]`                                                |                         |
| Tiene hijos (específico)     | `//ul[li]`                                               |                         |
| Lógica OR                    | `//a[@name or @href]`                                    | [?](#operators)         |
| Unión (une resultados)       | `//a \| //div`                                           | [?](#unions)            |


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

Expresiones
-----------

### Pasos y ejes

| `//` | `ul` | `/`  | `a[@id='link']` |
| ---  | ---  | ---  | ---             |
| Eje | Paso | Eje | Paso            |


Comience su expresión con cualquiera de estos.

### Prefijos

| Prefijo | Ejemplo               | Qué      |
| ---     | ---                   | ---      |
| `//`    | `//hr[@class='edge']` | En cualquier lugar |
| `./`    | `./a`                 | Relativo |
| `/`     | `/html/body/div`      | Raíz     |


Comience su expresión con cualquiera de estos.

### Ejes

| Eje | Ejemplo             | Qué        |
| --- | ---                 | ---        |
| `/` | `//ul/li/a`         | Hijo       |
| `//`| `//[@id="list"]//a` | Descendiente |


Separe sus pasos con `/`. Use dos (`//`) si no desea seleccionar hijos directos.

### Pasos

```bash
//div
//div[@name='box']
//[@id='link']
```

Un paso puede tener un nombre de elemento (`div`) y [predicados](#predicates) (`[...]`). Ambos son opcionales.
También pueden ser estas otras cosas:

```bash
//a/text()     #=> "Go home"
//a/@href      #=> "index.html"
//a/*          #=> Todos los elementos hijos de a
```

Predicados
----------

### Predicados

```bash
//div[true()]
//div[@class="head"]
//div[@class="head"][@id="top"]
```

Restringe un conjunto de nodos solo si alguna condición es verdadera. Se pueden encadenar.

### Operadores

```bash
# Comparación
//a[@id = "xyz"]
//a[@id != "xyz"]
//a[@price > 25]
```

```bash
# Lógica (and/or)
//div[@id="head" and position()=2]
//div[(x and y) or not(z)]
```

Usa operadores de comparación y lógicos para crear condicionales.

### Usando nodos

```bash
# Úsalos dentro de funciones
//ul[count(li) > 2]
//ul[count(li[@class='hide']) > 0]
```

```bash
# Esto devuelve `<ul>` que tiene un hijo `<li>`
//ul[li]
```

Puedes usar nodos dentro de predicados.

### Indexación

```bash
//a[1]                  # first <a>
//a[last()]             # last <a>
//ol/li[2]              # second <li>
//ol/li[position()=2]   # same as above
//ol/li[position()>1]   # :not(:first-of-type)
```

Usa `[]` con un número, o `last()` o `position()`.

### Orden de encadenamiento

```bash
a[1][@href='/']
a[@href='/'][1]
```

El orden es significativo, estos dos son diferentes.

### Predicados anidados

```
//section[.//h1[@id='hi']]
```

Esto devuelve `<section>` si tiene un descendiente `<h1>` con `id='hi'`.

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

Los pasos de una expresión se separan por `/`, generalmente usados para seleccionar nodos hijos. Esto no siempre es cierto: puedes especificar un "eje" diferente con `::`.

| `//` | `ul` | `/child::` | `li` |
| ---  | ---  | ---        | ---  |
| Eje | Paso | Eje | Paso |

### Eje hijo

```bash
# ambos son lo mismo
//ul/li/a
//child::ul/child::li/child::a
```

`child::` es el eje predeterminado. Esto hace que `//a/b/c` funcione.

```bash
# ambos son lo mismo
# esto funciona porque `child::li` es verdadero, por lo que el predicado tiene éxito
//ul[li]
//ul[child::li]
```

```bash
# ambos son lo mismo
//ul[count(li) > 2]
//ul[count(child::li) > 2]
```

### Eje descendiente-o-self

```bash
# ambos son lo mismo
//div//h4
//div/descendant-or-self::h4
```

`//` es la abreviatura del eje `descendant-or-self::`.

```bash
# ambos son lo mismo
//ul//[last()]
//ul/descendant-or-self::[last()]
```

### Otros ejes

| Eje                  | Abr.   | Notas                                            |
| ---                  | ---    | ---                                              |
| `ancestor`           |        |                                                  |
| `ancestor-or-self`   |        |                                                  |
| `attribute`          | `@`    | `@href` es la abreviatura de `attribute::href`   |
| `child`              |        | `div` es la abreviatura de `child::div`          |
| `descendant`         |        |                                                  |
| `descendant-or-self` | `//`   | `//` es la abreviatura de `/descendant-or-self::node()/` |
| `namespace`          |        |                                                  |
| `self`               | `.`    | `.` es la abreviatura de `self::node()`          |
| `parent`             | `..`   | `..` es la abreviatura de `parent::node()`       |
| `following`          |        |                                                  |
| `following-sibling`  |        |                                                  |
| `preceding`          |        |                                                  |
| `preceding-sibling`  |        |                                                  |

Hay otros ejes que puedes usar.

### Uniones

```bash
//a | //span
```

Usa `|` para unir dos expresiones.

Más ejemplos
-------------

### Ejemplos

```bash
//*                 # todos los elementos
count(//*)          # contar todos los elementos
(//h1)[1]/text()    # texto del primer encabezado h1
//li[span]          # encontrar un <li> con un <span> dentro
                    # ...se expande a //li[child::span]
//ul/li/..          # usar .. para seleccionar un padre
```

### Encontrar un padre

```bash
//section[h1[@id='section-name']]
```
Encuentra una `<section>` que contiene directamente `h1#section-name`

```bash
//section[//h1[@id='section-name']]
```

Encuentra una `<section>` que contiene `h1#section-name`.
(Igual que el anterior, pero usa descendiente-o-self en lugar de hijo)

### Más cercano

```bash
./ancestor-or-self::[@class="box"]
```

Funciona como el jQuery's `$().closest('.box')`.

### Atributos

```bash
//item[@price > 2*@discount]
```

Encuentra `<item>` y verifica sus atributos.

## Pruebas

### Consola del navegador

```js
$x("//div")
```
