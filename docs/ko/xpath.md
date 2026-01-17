# XPath 치트 시트

## 기본

| XPath             | 설명                               |
| ----------------- | ----------------------------------------- |
| `//element`       | 지정된 이름을 가진 모든 요소를 선택합니다. |
| `/element`        | 루트 요소를 선택합니다.                 |
| `element/child`   | 현재 요소의 모든 자식 요소를 선택합니다. |
| `//element[@attribute='value']` | 지정된 속성 및 값을 가진 모든 요소를 선택합니다. |
| `//element[position()=1]` | 첫 번째 요소를 선택합니다.                |
| `//element[last()]` | 마지막 요소를 선택합니다.                 |
| `//element[contains(text(), 'text')]` | 지정된 텍스트를 포함하는 요소를 선택합니다. |
| `//element[starts-with(@attribute, 'prefix')]` | 속성 값이 지정된 접두사로 시작하는 요소를 선택합니다. |
| `//element[ends-with(@attribute, 'suffix')]` | 속성 값이 지정된 접미사로 끝나는 요소를 선택합니다. |
| `//element[not(@attribute)]` | 지정된 속성을 가지고 있지 않은 요소를 선택합니다. |
| `//element[count(child::*) > 0]` | 자식 요소를 가지고 있는 요소를 선택합니다. |
| `//element[count(child::*) = 0]` | 자식 요소를 가지고 있지 않은 요소를 선택합니다. |
| `//element[preceding-sibling::sibling]` | 현재 요소의 모든 선행 형제 요소를 선택합니다. |
| `//element[following-sibling::sibling]` | 현재 요소의 모든 후행 형제 요소를 선택합니다. |
| `//element[ancestor::ancestor]` | 현재 요소의 모든 조상 요소를 선택합니다. |
| `//element[descendant::descendant]` | 현재 요소의 모든 자손 요소를 선택합니다. |
| `//element[namespace::namespace]` | 현재 요소의 모든 네임스페이스 노드를 선택합니다. |
| `//element[attribute::attribute]` | 현재 요소의 모든 속성 노드를 선택합니다. |
| `//element[self::element]` | 현재 요소를 선택합니다.              |
| `//element[parent::parent]` | 현재 요소의 부모를 선택합니다. |
| `//element[child::child]` | 현재 요소의 자식을 선택합니다. |
| `//element[text()]` | 텍스트 노드를 선택합니다.                       |
| `//comment()`     | 주석 노드를 선택합니다.                    |
| `//processing-instruction()` | 처리 명령 노드를 선택합니다. |
| `//node()`        | 모든 노드를 선택합니다.                        |

## 연산자

| Operator | 설명 |
| -------- | ----------- |
| `+`      | 덧셈    |
| `-`      | 뺄셈 |
| `*`      | 곱셈 |
| `div`    | 나눗셈    |
| `mod`    | 나머지      |
| `=`      | 같음       |
| `!=`     | 같지 않음   |
| `<`      | 작음   |
| `<=`     | 작거나 같음 |
| `>`      | 큼 |
| `>=`     | 크거나 같음 |
| `and`    | 논리 AND |
| `or`     | 논리 OR  |
| `|`      | Union       |

## 함수

| 함수 | 설명 |
| -------- | ----------- |
| `last()` | 마지막 요소의 인덱스를 반환합니다. |
| `position()` | 현재 요소의 인덱스를 반환합니다. |
| `count(node-set)` | 노드 집합의 노드 수를 반환합니다. |
| `id(id)` | ID로 요소를 선택합니다. |
| `local-name(node-set)` | 노드 집합의 첫 번째 노드 이름의 로컬 부분을 반환합니다. |
| `namespace-uri(node-set)` | 노드 집합의 첫 번째 노드의 네임스페이스 URI를 반환합니다. |
| `name(node-set)` | 노드 집합의 첫 번째 노드의 정규화된 이름을 반환합니다. |
| `string(object)` | 객체를 문자열로 변환합니다. |
| `concat(string1, string2, ...)` | 문자열을 연결합니다. |
| `starts-with(string1, string2)` | string1이 string2로 시작하는지 확인합니다. |
| `contains(string1, string2)` | string1이 string2를 포함하는지 확인합니다. |
| `substring-before(string1, string2)` | string1에서 string2 이전 부분을 반환합니다. |
| `substring-after(string1, string2)` | string1에서 string2 이후 부분을 반환합니다. |
| `substring(string, start, length)` | 부분 문자열을 반환합니다. |
| `string-length(string)` | 문자열의 길이를 반환합니다. |
| `normalize-space(string)` | 문자열의 공백을 정규화합니다. |
| `translate(string, from, to)` | 문자열의 문자를 바꿉니다. |
| `boolean(object)` | 객체를 부울로 변환합니다. |
| `not(boolean)` | 논리 NOT. |
| `true()` | true를 반환합니다. |
| `false()` | false를 반환합니다. |
| `number(object)` | 객체를 숫자로 변환합니다. |
| `sum(node-set)` | 노드 집합에 있는 숫자의 합계를 반환합니다. |
| `floor(number)` | 숫자보다 작거나 같은 가장 큰 정수를 반환합니다. |
| `ceiling(number)` | 숫자보다 크거나 같은 가장 작은 정수를 반환합니다. |
| `round(number)` | 숫자를 가장 가까운 정수로 반올림합니다. |
