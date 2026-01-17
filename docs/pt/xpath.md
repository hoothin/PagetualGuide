# Xpath Cheat Sheet

## Seletores

### Seletores descendentes

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1`                         | `//h1`                                                   | [?](#prefixes)          |
| `div p`                      | `//div//p`                                               | [?](#axes)              |
| `ul > li`                    | `//ul/li`                                                | [?](#axes)              |
| `ul > li > a`                | `//ul/li/a`                                              |                         |
| `div > *`                    | `//div/*`                                                |                         |
| `:root`                      | `/`                                                      | [?](#prefixes)          |
| `:root > body`               | `/body`                                                  |                         |


### Seletores de atributo

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `#id`                        | `//*[@id="id"]`                                           | [?](#predicates)        |
| `.class`                     | `//*[@class="class"]` *...[meio que](#class-check)*          |                         |
| `input[type="submit"]`       | `//input[@type="submit"]`                                |                         |
| `a#abc[for="xyz"]`           | `//a[@id="abc"][@for="xyz"]`                             | [?](#chaining-order)    |
| `a[rel]`                     | `//a[@rel]`                                              |                         |
| `a[href^='/']`               | `//a[starts-with(@href, '/')]`                           | [?](#string-functions)  |
| `a[href$='pdf']`             | `//a[ends-with(@href, '.pdf')]`                          |                         |
| `a[href*='://']`             | `//a[contains(@href, '://')]`                            |                         |
| `a[rel~='help']`             | `//a[contains(@rel, 'help')]` *...[meio que](#class-check)* |                         |


### Seletores de ordem

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `ul > li:first-of-type`      | `//ul/li[1]`                                             | [?](#indexing)          |
| `ul > li:nth-of-type(2)`     | `//ul/li[2]`                                             |                         |
| `ul > li:last-of-type`       | `//ul/li[last()]`                                        |                         |
| `li#id:first-of-type`        | `//li[1][@id="id"]`                                      | [?](#chaining-order)    |
| `a:first-child`              | `//*[1][name()="a"]`                                     |                         |
| `a:last-child`               | `//*[last()][name()="a"]`                                |                         |


### Irmãos

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


### Outras coisas

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1:not([id])`               | `//h1[not(@id)]`                                         | [?](#boolean-functions) |
| Correspondência de texto     | `//button[text()="Submit"]`                              | [?](#operators)         |
| Correspondência de texto (substring) | `//button[contains(text(),"Go")]`                        |                         |
| Aritmética                   | `//product[@price > 2.50]`                               |                         |
| Tem filhos                   | `//ul[*]`                                                |                         |
| Tem filhos (específico)      | `//ul[li]`                                               |                         |
| Lógica OU                    | `//a[@name or @href]`                                    | [?](#operators)         |
| União (une resultados)       | `//a \| //div`                                           | [?](#unions)            |


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

Expressões
-----------

### Passos e eixos

| `//` | `ul` | `/`  | `a[@id='link']` |
| ---  | ---  | ---  | ---             |
| Eixo | Passo | Eixo | Passo            |


Begin your expression with any of these.

### Prefixos

| Prefixo | Exemplo               | Onde     |
| ---     | ---                   | Qualquer lugar |
| `//`    | `//hr[@class='edge']` | Qualquer lugar |
| `./`    | `./a`                 | Relativo |
| `/`     | `/html/body/div`      | Raiz     |


Comece sua expressão com qualquer um desses.

### Eixos

| Eixo | Exemplo             | O que      |
| ---  | ---                 | O que      |
| `/`  | `//ul/li/a`         | Filho      |
| `//` | `//[@id="list"]//a` | Descendente |


Separe seus passos com `/`. Use dois (`//`) se você não quiser selecionar filhos diretos.

### Passos

```bash
//div
//div[@name='box']
//[@id='link']
```

Um passo pode ter um nome de elemento (`div`) e [predicados](#predicates) (`[...]`). Ambos são opcionais.
Eles também podem ser estas outras coisas:

```bash
//a/text()     #=> "Go home"
//a/@href      #=> "index.html"
//a/*          #=> Todos os elementos filhos de a
```

Predicados
----------

### Predicados

```bash
//div[true()]
//div[@class="head"]
//div[@class="head"][@id="top"]
```

Restringe um conjunto de nós apenas se alguma condição for verdadeira. Eles podem ser encadeados.

### Operadores

```bash
# Comparação
//a[@id = "xyz"]
//a[@id != "xyz"]
//a[@price > 25]
```

```bash
# Lógica (and/or)
//div[@id="head" and position()=2]
//div[(x and y) or not(z)]
```

Use operadores de comparação e lógica para criar condicionais.

### Usando nós

```bash
# Use-os dentro de funções
//ul[count(li) > 2]
//ul[count(li[@class='hide']) > 0]
```

```bash
# Isso retorna `<ul>` que tem um filho `<li>`
//ul[li]
```

Você pode usar nós dentro de predicados.

### Indexação

```bash
//a[1]                  # primeira <a>
//a[last()]             # última <a>
//ol/li[2]              # segunda <li>
//ol/li[position()=2]   # o mesmo que acima
//ol/li[position()>1]   # :not(:first-of-type)
```

Use `[]` com um número, ou `last()` ou `position()`.

### Ordem de encadeamento

```bash
a[1][@href='/']
a[@href='/'][1]
```

A ordem é significativa, estes dois são diferentes.

### Predicados aninhados

```
//section[.//h1[@id='hi']]
```

Isso retorna `<section>` se tiver um descendente `<h1>` com `id='hi'`.

Funções
---------

### Funções de Nó

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

### Conversão de tipo

```bash
string()
number()
boolean()
```

Eixos
----

### Usando eixos

```bash
//ul/li                       # ul > li
//ul/child::li                # ul > li (same)
//ul/following-sibling::li    # ul ~ li
//ul/descendant-or-self::li   # ul li
//ul/ancestor-or-self::li     # $('ul').closest('li')
```

Os passos de uma expressão são separados por `/`, geralmente usados para selecionar nós filhos. Isso nem sempre é verdade: você pode especificar um "eixo" diferente com `::`.

| `//` | `ul` | `/child::` | `li` |
| ---  | ---  | ---        | ---  |
| Eixo | Passo | Eixo       | Passo |

### Eixo filho

```bash
# ambos iguais
//ul/li/a
//child::ul/child::li/child::a
```

`child::` é o eixo padrão. Isso faz com que `//a/b/c` funcione.

```bash
# ambos iguais
# isso funciona porque `child::li` é verdadeiro, então o predicado é bem-sucedido
//ul[li]
//ul[child::li]
```

```bash
# ambos iguais
//ul[count(li) > 2]
//ul[count(child::li) > 2]
```

### Eixo descendente-ou-self

```bash
# ambos iguais
//div//h4
//div/descendant-or-self::h4
```

`//` é a abreviação para o eixo `descendant-or-self::`.

```bash
# ambos iguais
//ul//[last()]
//ul/descendant-or-self::[last()]
```

### Outros eixos

| Eixo                 | Abrev | Notas                                            |
| ---                  | ---    | ---                                              |
| `ancestor`           |        |                                                  |
| `ancestor-or-self`   |        |                                                  |
| `attribute`          | `@`    | `@href` é a abreviação de `attribute::href`      |
| `child`              |        | `div` é a abreviação de `child::div`             |
| `descendant`         |        |                                                  |
| `descendant-or-self` | `//`   | `//` é a abreviação de `/descendant-or-self::node()/` |
| `namespace`          |        |                                                  |
| `self`               | `.`    | `.` é a abreviação de `self::node()`             |
| `parent`             | `..`   | `..` é a abreviação de `parent::node()`          |
| `following`          |        |                                                  |
| `following-sibling`  |        |                                                  |
| `preceding`          |        |                                                  |
| `preceding-sibling`  |        |                                                  |

Existem outros eixos que você pode usar.

### Uniões

```bash
//a | //span
```

Use `|` para unir duas expressões.

Mais exemplos
-------------

### Exemplos

```bash
//*                 # todos os elementos
count(//*)          # contar todos os elementos
(//h1)[1]/text()    # texto do primeiro cabeçalho h1
//li[span]          # encontrar um <li> com um <span> dentro dele
                    # ...expande para //li[child::span]
//ul/li/..          # usar .. para selecionar um pai
```

### Encontrar um pai

```bash
//section[h1[@id='section-name']]
```
Encontra uma `<section>` que contém diretamente `h1#section-name`

```bash
//section[//h1[@id='section-name']]
```

Encontra uma `<section>` que contém `h1#section-name`.
(O mesmo que acima, mas usa descendente-ou-self em vez de filho)

### Mais Próximo

```bash
./ancestor-or-self::[@class="box"]
```

Funciona como o jQuery's `$().closest('.box')`.

### Atributos

```bash
//item[@price > 2*@discount]
```

Encontra `<item>` e verifica seus atributos

## Testando

### Console do navegador

```js
$x("//div")
```
