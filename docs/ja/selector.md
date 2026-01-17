# 共通 CSS3 セレクターのチートシート

## Basics selectors

```css
.css3-class {
  font-weight: bold;
}
```

| Selector          | Description  |
| ----------------- | ------------ |
| `*`               | All elements |
| `div`             | Element      |
| `.class`          | Class        |
| `#id`             | ID           |
| `[disabled]`      | Attribute    |
| `[role="dialog"]` | Attribute    |

## Combinators

| Selector            | Description        |
| ------------------- | ------------------ |
| `.parent .child`    | Descendant         |
| `.parent > .child`  | Direct descendant  |
| `.child + .sibling` | Adjacent sibling   |
| `.child ~ .sibling` | Far sibling        |
| `.class1.class2`    | Have both classes  |
| `.class1,.class2`   | .class1 or .class2 |

## Attribute selectors

| Selector           | Description                         |
| ------------------ | ----------------------------------- |
| `[role="dialog"]`  | `=` Exact                           |
| `[class~="box"]`   | `~=` Has word                       |
| `[class\|="box"]`  | `\|=` Exact or prefix (eg, `value-`)|
| `[href$=".doc"]`   | `$=` Ends in                        |
| `[href^="/index"]` | `^=` Begins with                    |
| `[class*="-is-"]`  | `*=` Contains                       |

## Pseudo-classes

| Selector             | Description                                |
| -------------------- | ------------------------------------------ |
| `:target`            | eg, `h2#foo:target`                        |
| `:focus`             |                                            |
| `:active`            |                                            |
| `:nth-child(3)`      | 3rd child.                                 |
| `:nth-child(3n+2)`   | 2nd child in groups of 3. Using a formula (an + b). Description: a represents a cycle size, n is a counter (starts at 0), and b is an offset value.                   |
| `:nth-child(-n+4)`   | 4, 3, 2, 1  less than 5.                   |
| `:nth-last-child(2)` |                                            |
| `:nth-of-type(2)`    |                                            |
| `:checked`           | Checked inputs                             |
| `:disabled`          | Disabled elements                          |
| `:enabled`           | Enabled elements                           |
| `:default`           | Default element in a group                 |
| `:empty`             | Elements without children                  |

## Pseudo-class variations

| Selector          |
| ----------------- |
| `:first-of-type`  |
| `:last-of-type`   |
| `:nth-of-type(2)` |
| `:only-of-type`   |
| `:first-child`    |
| `:last-child`     |
| `:nth-child(2)`   |
| `:only-child`     |
| `::first-letter`  |
| `::first-line`    |