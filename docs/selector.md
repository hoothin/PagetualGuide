# CSS Selectors Cheat Sheet

## Basics selectors

```css
.css3-class {
  font-weight: bold;
}
```

| Selector          | Description  |
| ----------------- | ------------ |
| `*`               | All elements |
| `div`             | Tag name = "div"      |
| `.class`          | Class = "class"        |
| `#id`             | ID = "id"         |
| `[disabled]`      | Has Attribute "disabled"    |
| `[role="dialog"]` | Attribute role = "dialog"    |

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
| `[role="dialog"]`  | `=` Exact, role = "dialog"                          |
| `[class~="box"]`   | `~=` Has word, class contains word "box"                   |
| `[class\|="box"]`  | `\|=` Exact or prefix (eg, `value-`)|
| `[href$=".doc"]`   | `$=` Ends in, href ends in ".doc"                       |
| `[href^="/index"]` | `^=` Begins with, href begins with "/index"                    |
| `[class*="-is-"]`  | `*=` Contains, class contains string "-is-"                      |

## Pseudo-classes

| Selector             | Description                                |
| -------------------- | ------------------------------------------ |
| `:target`            | Represents a unique element (the target element) with an id matching the URL's fragment. eg, `h2#foo:target`                        |
| `:focus`             | Focused element                                           |
| `:active`            | Active element                                           |
| `:nth-child(3)`      | 3rd child.                                 |
| `:nth-child(3n+2)`   | 2nd child in groups of 3. Using a formula (an + b). Description: a represents a cycle size, n is a counter (starts at 0), and b is an offset value.                   |
| `:nth-child(-n+4)`   | 4, 3, 2, 1  less than 5.                   |
| `:nth-last-child(2)` | Elements based on their position among a group of siblings, counting from the end.                                           |
| `:nth-of-type(2)`    | Elements based on their position among siblings of the same type (tag name).                                           |
| `:checked`           | Checked inputs                             |
| `:disabled`          | Disabled elements                          |
| `:enabled`           | Enabled elements                           |
| `:default`           | Default element in a group                 |
| `:empty`             | Elements without children                  |

## Pseudo-class variations

| Selector          | Description                                |
| ----------------- | ------------------------------------------ |
| `:first-of-type`  | Represents the first element of its type among a group of sibling elements. |
| `:last-of-type`   | Represents the last element of its type among a group of sibling elements. |
| `:only-of-type`   | Represents an element that has no siblings of the same type. |
| `:first-child`    | Represents the first element among a group of sibling elements. |
| `:last-child`     | Represents the last element among a group of sibling elements. |
| `:only-child`     | Represents an element without any siblings. This is the same as :first-child:last-child or :nth-child(1):nth-last-child(1), but with a lower specificity. |
| `::first-letter`  | Applies styles to the first letter of the first line of a block container, but only when not preceded by other content (such as images or inline tables). |
| `::first-line`    | Applies styles to the first line of a block container. |

## <a href="#test-your-css-selector-skill-with-pagetual" data-pagetual-picker>Test your css selector skill with Pagetual</a>
![Picker](/img/picker.jpeg)