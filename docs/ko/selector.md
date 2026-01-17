# CSS 선택자 치트 시트

## 기본 선택자

```css
.css3-class {
  font-weight: bold;
}
```

| 선택자            | 설명            |
| ----------------- | --------------- |
| `*`               | 모든 요소       |
| `div`             | 태그 이름 = "div" |
| `.class`          | 클래스 = "class" |
| `#id`             | ID = "id"       |
| `[disabled]`      | "disabled" 속성 가짐 |
| `[role="dialog"]` | role 속성 = "dialog" |

## 결합자

| 선택자            | 설명            |
| ------------------- | --------------- |
| `.parent .child`    | 자손            |
| `.parent > .child`  | 직계 자손       |
| `.child + .sibling` | 인접 형제       |
| `.child ~ .sibling` | 일반 형제       |
| `.class1.class2`    | 두 클래스 모두 가짐 |
| `.class1,.class2`   | .class1 또는 .class2 |

## 속성 선택자

| 선택자           | 설명                                |
| ------------------ | ----------------------------------- |
| `[role="dialog"]`  | `=` 정확히 일치, role = "dialog"      |
| `[class~="box"]`   | `~=` 단어 포함, class에 "box" 단어 포함 |
| `[class\|="box"]`  | `\|=` 정확히 일치 또는 접두사 (예: `value-`) |
| `[href$=".doc"]`   | `$=` 끝나는 문자열, href가 ".doc"으로 끝남 |
| `[href^="/index"]` | `^=` 시작하는 문자열, href가 "/index"로 시작함 |
| `[class*="-is-"]`  | `*=` 포함, class에 "-is-" 문자열 포함 |

## 가상 클래스

| 선택자             | 설명                                |
| -------------------- | ------------------------------------------ |
| `:target`            | URL의 프래그먼트와 일치하는 ID를 가진 고유 요소(대상 요소)를 나타냅니다. 예: `h2#foo:target` |
| `:focus`             | 포커스된 요소                                           |
| `:active`            | 활성 요소                                           |
| `:nth-child(3)`      | 3번째 자식.                                 |
| `:nth-child(3n+2)`   | 3개 그룹 중 2번째 자식. 공식 사용 (an + b). 설명: a는 주기 크기, n은 카운터(0부터 시작), b는 오프셋 값. |
| `:nth-child(-n+4)`   | 4, 3, 2, 1 (5 미만).                   |
| `:nth-last-child(2)` | 형제 그룹 내에서 끝에서부터 세어 위치에 따라 요소를 나타냅니다. |
| `:nth-of-type(2)`    | 같은 유형(태그 이름)의 형제들 사이에서 위치에 따라 요소를 나타냅니다. |
| `:checked`           | 체크된 입력 요소                             |
| `:disabled`          | 비활성화된 요소                          |
| `:enabled`           | 활성화된 요소                           |
| `:default`           | 그룹 내 기본 요소                 |
| `:empty`             | 자식이 없는 요소                  |

## 가상 클래스 변형

| 선택자          | 설명                                |
| ----------------- | ------------------------------------------ |
| `:first-of-type`  | 형제 요소 그룹 내에서 해당 유형의 첫 번째 요소를 나타냅니다. |
| `:last-of-type`   | 형제 요소 그룹 내에서 해당 유형의 마지막 요소를 나타냅니다. |
| `:only-of-type`   | 같은 유형의 형제가 없는 요소를 나타냅니다. |
| `:first-child`    | 형제 요소 그룹 내에서 첫 번째 요소를 나타냅니다. |
| `:last-child`     | 형제 요소 그룹 내에서 마지막 요소를 나타냅니다. |
| `:only-child`     | 형제가 없는 요소를 나타냅니다. 이는 `:first-child:last-child` 또는 `:nth-child(1):nth-last-child(1)`와 같지만, 특이성이 더 낮습니다. |
| `::first-letter`  | 블록 컨테이너의 첫 번째 줄의 첫 글자에 스타일을 적용하지만, 다른 콘텐츠(예: 이미지 또는 인라인 테이블)가 앞에 오지 않는 경우에만 적용됩니다. |
| `::first-line`    | 블록 컨테이너의 첫 번째 줄에 스타일을 적용합니다. |

## <a href="#test-your-css-selector-skill-with-pagetual" data-pagetual-picker>Pagetual로 CSS 선택자 실력 테스트하기</a>
![Picker](/img/picker.jpeg)
