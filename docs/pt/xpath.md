# Guia rápido de XPath

## Seletores

### Seletores descendentes

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1`                         | `//h1`                                                   | [?](#prefixos)          |
| `div p`                      | `//div//p`                                               | [?](#eixos)             |
| `ul > li`                    | `//ul/li`                                                | [?](#eixos)             |
| `ul > li > a`                | `//ul/li/a`                                              |                         |
| `div > *`                    | `//div/*`                                                |                         |
| `:root`                      | `/`                                                      | [?](#prefixos)          |
| `:root > body`               | `/body`                                                  |                         |


### Seletores por atributo

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `#id`                        | `//*[@id="id"]`                                        | [?](#predicados)        |
| `.class`                     | `//*[@class="class"]` *...[kinda](#class-check)*        |                         |
| `input[type="submit"]`       | `//input[@type="submit"]`                                |                         |
| `a#abc[for="xyz"]`           | `//a[@id="abc"][@for="xyz"]`                             | [?](#ordem-de-encadeamento) |
| `a[rel]`                     | `//a[@rel]`                                              |                         |
| `a[href^='/']`               | `//a[starts-with(@href, '/')]`                           | [?](#funções-de-string) |
| `a[href$='pdf']`             | `//a[ends-with(@href, '.pdf')]`                          |                         |
| `a[href*='://']`             | `//a[contains(@href, '://')]`                            |                         |
| `a[rel~='help']`             | `//a[contains(@rel, 'help')]` *...[kinda](#class-check)* |                         |


### Seletores de ordem

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `ul > li:first-of-type`      | `//ul/li[1]`                                             | [?](#indexação)         |
| `ul > li:nth-of-type(2)`     | `//ul/li[2]`                                             |                         |
| `ul > li:last-of-type`       | `//ul/li[last()]`                                        |                         |
| `li#id:first-of-type`        | `//li[1][@id="id"]`                                      | [?](#ordem-de-encadeamento) |
| `a:first-child`              | `//*[1][name()="a"]`                                     |                         |
| `a:last-child`               | `//*[last()][name()="a"]`                                |                         |


### Irmãos

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1 ~ ul`                    | `//h1/following-sibling::ul`                             | [?](#uso-de-eixos)      |
| `h1 + ul`                    | `//h1/following-sibling::ul[1]`                          |                         |
| `h1 ~ #id`                   | `//h1/following-sibling::[@id="id"]`                     |                         |


### jQuery

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `$('ul > li').parent()`      | `//ul/li/..`                                             | [?](#outros-eixos)      |
| `$('li').closest('section')` | `//li/ancestor-or-self::section`                         |                         |
| `$('a').attr('href')`        | `//a/@href`                                              | [?](#passos)            |
| `$('span').text()`           | `//span/text()`                                          |                         |


### Outros

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1:not([id])`               | `//h1[not(@id)]`                                         | [?](#funções-booleanas) |
| Correspondência de texto     | `//button[text()="Submit"]`                              | [?](#operadores)        |
| Correspondência (substring)  | `//button[contains(text(),"Go")]`                        |                         |
| Comparação numérica          | `//product[@price > 2.50]`                               |                         |
| Tem filhos                   | `//ul[*]`                                                |                         |
| Tem filho específico         | `//ul[li]`                                               |                         |
| Lógica OR                    | `//a[@name or @href]`                                    | [?](#operadores)        |
| União (combina resultados)   | `//a \| //div`                                           | [?](#uniões)            |


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

Xpath não tem um operador para “verificar se faz parte de uma lista separada por espaços”. Esta é a forma usual.

Expressões
-----------

### Passos e eixos

| `//` | `ul` | `/`  | `a[@id='link']` |
| ---  | ---  | ---  | ---             |
| Eixo | Passo | Eixo | Passo           |

### Prefixos

| Prefixo | Exemplo               | Significado |
| ---     | ---                   | ---         |
| `//`    | `//hr[@class='edge']` | Em qualquer lugar |
| `./`    | `./a`                 | Relativo    |
| `/`     | `/html/body/div`      | Raiz        |


Você pode começar sua expressão com qualquer um desses prefixos.

### Eixos

| Eixo | Exemplo              | Significado |
| ---  | ---                  | ---         |
| `/`  | `//ul/li/a`          | Filho       |
| `//` | `//[@id="list"]//a` | Descendente |


Separe os passos com `/`. Use `//` quando não quiser apenas filhos diretos.

### Passos

```bash
//div
//div[@name='box']
//[@id='link']
```

Um passo pode ter um nome de elemento (`div`) e [predicados](#predicados) (`[...]`). Ambos são opcionais.
Também pode ser:

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

Restringe o nodeset apenas se a condição for verdadeira. Predicados podem ser encadeados.

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

Use operadores de comparação e lógica para criar condições.

### Usar nós

```bash
# Use them inside functions
//ul[count(li) > 2]
//ul[count(li[@class='hide']) > 0]
```

```bash
# This returns `<ul>` that has a `<li>` child
//ul[li]
```

Você pode usar nós diretamente nos predicados.

### Indexação

```bash
//a[1]                  # first <a>
//a[last()]             # last <a>
//ol/li[2]              # second <li>
//ol/li[position()=2]   # same as above
//ol/li[position()>1]   # :not(:first-of-type)
```

Use `[]` com um número, ou `last()` ou `position()`.

### Ordem de encadeamento

```bash
a[1][@href='/']
a[@href='/'][1]
```

A ordem importa; essas duas expressões são diferentes.

### Predicados aninhados

```
//section[.//h1[@id='hi']]
```

Retorna `<section>` se tiver um `<h1>` descendente com id='hi'.

Funções
---------

### Funções de nó

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

### Funções booleanas

```bash
not(expr)                  # button[not(starts-with(text(),"Submit"))]
```

### Funções de string

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

### Conversão de tipos

```bash
string()
number()
boolean()
```

Eixos
----

### Uso de eixos

```bash
//ul/li                       # ul > li
//ul/child::li                # ul > li (same)
//ul/following-sibling::li    # ul ~ li
//ul/descendant-or-self::li   # ul li
//ul/ancestor-or-self::li     # $('ul').closest('li')
```

Os passos normalmente usam `/` para selecionar filhos, mas você pode especificar outro eixo com `::`.

| `//` | `ul` | `/child::` | `li` |
| ---  | ---  | ---        | ---  |
| Eixo | Passo | Eixo      | Passo |

### Eixo child

```bash
# both the same
//ul/li/a
//child::ul/child::li/child::a
```

`child::` é o eixo padrão. Por isso `//a/b/c` funciona.

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

### Eixo descendant-or-self

```bash
# both the same
//div//h4
//div/descendant-or-self::h4
```

`//` é a forma abreviada do eixo `descendant-or-self::`.

```bash
# both the same
//ul//[last()]
//ul/descendant-or-self::[last()]
```

### Outros eixos

| Eixo                 | Abrev | Notas                                            |
| ---                  | ---   | ---                                              |
| `ancestor`           |       |                                                  |
| `ancestor-or-self`   |       |                                                  |
| `attribute`          | `@`   | `@href` é abreviação de `attribute::href`        |
| `child`              |       | `div` é abreviação de `child::div`               |
| `descendant`         |       |                                                  |
| `descendant-or-self` | `//`  | `//` é abreviação de `/descendant-or-self::node()/` |
| `namespace`          |       |                                                  |
| `self`               | `.`   | `.` é abreviação de `self::node()`               |
| `parent`             | `..`  | `..` é abreviação de `parent::node()`            |
| `following`          |       |                                                  |
| `following-sibling`  |       |                                                  |
| `preceding`          |       |                                                  |
| `preceding-sibling`  |       |                                                  |

Há outros eixos disponíveis.

### Uniões

```bash
//a | //span
```

Use `|` para unir duas expressões.

Mais exemplos
-------------

### Exemplos

```bash
//*                 # all elements
count(//*)          # count all elements
(//h1)[1]/text()    # text of the first h1 heading
//li[span]          # find a <li> with an <span> inside it
                    # ...expands to //li[child::span]
//ul/li/..          # use .. to select a parent
```

### Encontrar um pai

```bash
//section[h1[@id='section-name']]
```
Encontra um `<section>` que contém diretamente `h1#section-name`.

```bash
//section[//h1[@id='section-name']]
```

Encontra um `<section>` que contém `h1#section-name`.
(Mesmo resultado, mas usando descendant-or-self em vez de child)

### Closest

```bash
./ancestor-or-self::[@class="box"]
```

Funciona como `$().closest('.box')` do jQuery.

### Atributos

```bash
//item[@price > 2*@discount]
```

Encontra `<item>` e verifica seus atributos.

## Testes

### Console do navegador

```js
$x("//div")
```
