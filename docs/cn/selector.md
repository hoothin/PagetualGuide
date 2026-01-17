# 常用 CSS 选择器速查表

## 基础选择器

```css
.css3-class {
  font-weight: bold;
}
```

| 选择器            | 描述          |
| ----------------- | ------------ |
| `*`               | 所有元素      |
| `div`             | 元素类型      |
| `.class`          | Class        |
| `#id`             | ID           |
| `[disabled]`      | 包含属性      |
| `[role="dialog"]` | 指定属性值    |

## 组合选择器

| 选择器            | 描述        |
| ------------------- | ------------------ |
| `.parent .child`    | 后代节点            |
| `.parent > .child`  | 直接子节点          |
| `.child + .sibling` | 相邻的第一个兄弟节点 |
| `.child ~ .sibling` | 之后的兄弟节点      |
| `.class1.class2`    | 同时拥有两个 class  |
| `.class1,.class2`   | .class1 或 .class2 |

## 筛选元素属性的选择器

| 选择器           | 描述                         |
| ------------------ | ----------------------------------- |
| `[role="dialog"]`  | `=` 相等                           |
| `[class~="box"]`   | `~=` 包含文本box                       |
| `[class\|="box"]`  | `\|=` 相等或以此单词为前缀 (例如, `box-`)|
| `[href$=".doc"]`   | `$=` 以此文本为结尾                        |
| `[href^="/index"]` | `^=` 以此文本开头                    |
| `[class*="-is-"]`  | `*=` 包含此文本                       |

## 伪类选择器

| 选择器             | 描述                                |
| -------------------- | ------------------------------------------ |
| `:target`            | eg, `h2#foo:target`                        |
| `:focus`             |                                            |
| `:active`            |                                            |
| `:nth-child(3)`      | 第 3 个子节点                                 |
| `:nth-child(3n+2)`   | 第 3 组的第二个子节点。通过(an + b)计算。详述：a 代表周期大小，n 代表计数（从 0 开始），b 代表偏移量   |
| `:nth-child(-n+4)`   | 同上，因为结果必须是正整数，因此 n 最大为 3。最终指向第 4, 3, 2, 1 个元素                  |
| `:nth-last-child(2)` |                                            |
| `:nth-of-type(2)`    |                                            |
| `:checked`           | 选中的 inputs                             |
| `:disabled`          | 禁用的元素                          |
| `:enabled`           | 启用的元素                           |
| `:default`           | 分组中的默认元素                 |
| `:empty`             | 没有子节点的元素                  |

## 伪类选择器变体

| 选择器          |
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