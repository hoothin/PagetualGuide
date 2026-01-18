# Xpath 빠른 참고표

## 셀렉터

### 자손 셀렉터

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1`                         | `//h1`                                                   | [?](#접두사)            |
| `div p`                      | `//div//p`                                               | [?](#축)                |
| `ul > li`                    | `//ul/li`                                                | [?](#축)                |
| `ul > li > a`                | `//ul/li/a`                                              |                         |
| `div > *`                    | `//div/*`                                                |                         |
| `:root`                      | `/`                                                      | [?](#접두사)            |
| `:root > body`               | `/body`                                                  |                         |


### 속성 셀렉터

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `#id`                        | `//*[@id="id"]`                                        | [?](#조건절)            |
| `.class`                     | `//*[@class="class"]` *...[kinda](#class-check)*        |                         |
| `input[type="submit"]`       | `//input[@type="submit"]`                                |                         |
| `a#abc[for="xyz"]`           | `//a[@id="abc"][@for="xyz"]`                             | [?](#체이닝-순서)        |
| `a[rel]`                     | `//a[@rel]`                                              |                         |
| `a[href^='/']`               | `//a[starts-with(@href, '/')]`                           | [?](#문자열-함수)        |
| `a[href$='pdf']`             | `//a[ends-with(@href, '.pdf')]`                          |                         |
| `a[href*='://']`             | `//a[contains(@href, '://')]`                            |                         |
| `a[rel~='help']`             | `//a[contains(@rel, 'help')]` *...[kinda](#class-check)* |                         |


### 순서 셀렉터

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `ul > li:first-of-type`      | `//ul/li[1]`                                             | [?](#인덱싱)            |
| `ul > li:nth-of-type(2)`     | `//ul/li[2]`                                             |                         |
| `ul > li:last-of-type`       | `//ul/li[last()]`                                        |                         |
| `li#id:first-of-type`        | `//li[1][@id="id"]`                                      | [?](#체이닝-순서)        |
| `a:first-child`              | `//*[1][name()="a"]`                                     |                         |
| `a:last-child`               | `//*[last()][name()="a"]`                                |                         |


### 형제 요소

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1 ~ ul`                    | `//h1/following-sibling::ul`                             | [?](#축-사용)            |
| `h1 + ul`                    | `//h1/following-sibling::ul[1]`                          |                         |
| `h1 ~ #id`                   | `//h1/following-sibling::[@id="id"]`                     |                         |


### jQuery

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `$('ul > li').parent()`      | `//ul/li/..`                                             | [?](#기타-축)            |
| `$('li').closest('section')` | `//li/ancestor-or-self::section`                         |                         |
| `$('a').attr('href')`        | `//a/@href`                                              | [?](#스텝)              |
| `$('span').text()`           | `//span/text()`                                          |                         |


### 기타

| CSS                          | Xpath                                                    | ?                       |
| ----                         | ----                                                     | --                      |
| `h1:not([id])`               | `//h1[not(@id)]`                                         | [?](#불리언-함수)        |
| 텍스트 일치                  | `//button[text()="Submit"]`                              | [?](#연산자)            |
| 텍스트 일치(부분)            | `//button[contains(text(),"Go")]`                        |                         |
| 산술 비교                    | `//product[@price > 2.50]`                               |                         |
| 자식 요소 있음               | `//ul[*]`                                                |                         |
| 특정 자식 요소 있음          | `//ul[li]`                                               |                         |
| OR 로직                      | `//a[@name or @href]`                                    | [?](#연산자)            |
| 합집합(결과 결합)             | `//a \| //div`                                           | [?](#합집합)            |


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

Xpath에는 “공백으로 구분된 목록에 포함되는지”를 바로 확인하는 연산자가 없으므로 위 방식이 일반적입니다.

표현식
-----------

### 스텝과 축

| `//` | `ul` | `/`  | `a[@id='link']` |
| ---  | ---  | ---  | ---             |
| 축   | 스텝 | 축   | 스텝            |

### 접두사

| 접두사 | 예시                  | 의미     |
| ---    | ---                  | ---      |
| `//`   | `//hr[@class='edge']`| 아무 위치 |
| `./`   | `./a`                | 상대 경로 |
| `/`    | `/html/body/div`     | 루트     |


표현식은 어떤 접두사로 시작해도 됩니다.

### 축

| 축  | 예시                | 의미       |
| --- | ---                | ---        |
| `/` | `//ul/li/a`        | 자식 노드  |
| `//`| `//[@id="list"]//a` | 후손 노드 |


스텝은 `/`로 구분합니다. 직접 자식만 선택하지 않으려면 `//`를 사용하세요.

### 스텝

```bash
//div
//div[@name='box']
//[@id='link']
```

스텝은 요소 이름(`div`)과 [조건절](#조건절)(`[...]`)로 구성되며 둘 다 생략 가능합니다.
다음과 같은 형태도 가능합니다:

```bash
//a/text()     #=> "Go home"
//a/@href      #=> "index.html"
//a/*          #=> All a's child elements
```

조건절
----------

### 조건절

```bash
//div[true()]
//div[@class="head"]
//div[@class="head"][@id="top"]
```

조건이 참일 때만 노드셋을 유지합니다. 조건절은 체이닝할 수 있습니다.

### 연산자

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

비교/논리 연산자로 조건을 구성합니다.

### 노드 사용

```bash
# Use them inside functions
//ul[count(li) > 2]
//ul[count(li[@class='hide']) > 0]
```

```bash
# This returns `<ul>` that has a `<li>` child
//ul[li]
```

노드는 조건절 안에서 직접 사용할 수 있습니다.

### 인덱싱

```bash
//a[1]                  # first <a>
//a[last()]             # last <a>
//ol/li[2]              # second <li>
//ol/li[position()=2]   # same as above
//ol/li[position()>1]   # :not(:first-of-type)
```

`[]` 안에 숫자, `last()`, `position()`을 사용합니다.

### 체이닝 순서

```bash
a[1][@href='/']
a[@href='/'][1]
```

순서에 따라 결과가 달라집니다.

### 중첩 조건절

```
//section[.//h1[@id='hi']]
```

`<section>`에 id='hi'인 `<h1>` 후손이 있으면 매칭됩니다.

함수
---------

### 노드 함수

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

### 불리언 함수

```bash
not(expr)                  # button[not(starts-with(text(),"Submit"))]
```

### 문자열 함수

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

### 타입 변환

```bash
string()
number()
boolean()
```

축
----

### 축 사용

```bash
//ul/li                       # ul > li
//ul/child::li                # ul > li (same)
//ul/following-sibling::li    # ul ~ li
//ul/descendant-or-self::li   # ul li
//ul/ancestor-or-self::li     # $('ul').closest('li')
```

스텝은 보통 `/`로 자식 노드를 선택하지만, `::`로 다른 축을 지정할 수 있습니다.

| `//` | `ul` | `/child::` | `li` |
| ---  | ---  | ---        | ---  |
| 축   | 스텝 | 축         | 스텝 |

### 자식 축

```bash
# both the same
//ul/li/a
//child::ul/child::li/child::a
```

`child::`가 기본 축입니다. 그래서 `//a/b/c`가 동작합니다.

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

### 후손-자기 축

```bash
# both the same
//div//h4
//div/descendant-or-self::h4
```

`//`는 `descendant-or-self::` 축의 축약형입니다.

```bash
# both the same
//ul//[last()]
//ul/descendant-or-self::[last()]
```

### 기타 축

| 축                   | 약어 | 비고                                           |
| ---                  | ---  | ---                                            |
| `ancestor`           |      |                                                |
| `ancestor-or-self`   |      |                                                |
| `attribute`          | `@`  | `@href`는 `attribute::href`의 축약형          |
| `child`              |      | `div`는 `child::div`의 축약형                  |
| `descendant`         |      |                                                |
| `descendant-or-self` | `//` | `//`는 `/descendant-or-self::node()/`의 축약형 |
| `namespace`          |      |                                                |
| `self`               | `.`  | `.`는 `self::node()`의 축약형                  |
| `parent`             | `..` | `..`는 `parent::node()`의 축약형               |
| `following`          |      |                                                |
| `following-sibling`  |      |                                                |
| `preceding`          |      |                                                |
| `preceding-sibling`  |      |                                                |

다른 축도 사용할 수 있습니다.

### 합집합

```bash
//a | //span
```

`|`로 두 표현식을 결합합니다.

추가 예시
-------------

### 예시

```bash
//*                 # all elements
count(//*)          # count all elements
(//h1)[1]/text()    # text of the first h1 heading
//li[span]          # find a <li> with an <span> inside it
                    # ...expands to //li[child::span]
//ul/li/..          # use .. to select a parent
```

### 부모 찾기

```bash
//section[h1[@id='section-name']]
```
`h1#section-name`를 직접 포함하는 `<section>`을 찾습니다.

```bash
//section[//h1[@id='section-name']]
```

`h1#section-name`를 포함하는 `<section>`을 찾습니다.
(위와 같지만 child 대신 descendant-or-self를 사용합니다.)

### 가장 가까운 조상

```bash
./ancestor-or-self::[@class="box"]
```

jQuery의 `$().closest('.box')`와 유사합니다.

### 속성

```bash
//item[@price > 2*@discount]
```

`<item>`을 찾고 속성을 검사합니다.

## 테스트

### 브라우저 콘솔

```js
$x("//div")
```
