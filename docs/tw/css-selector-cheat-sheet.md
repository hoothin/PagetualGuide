# 常用 CSS 選擇器速查表

## 基礎選擇器

```css
.css3-class {
   font-weight: bold;
}
```

| 選擇器 | 說明 |
| ----------------- | ------------ |
| `*` | 所有元素 |
| `div` | 元素類型 |
| `.class` | Class |
| `#id` | ID |
| `[disabled]` | 包含屬性 |
| `[role="dialog"]` | 指定屬性值 |

## 組合選擇器

| 選擇器 | 說明 |
| ------------------- | ------------------ |
| `.parent .child` | 後代節點 |
| `.parent > .child` | 直接子節點 |
| `.child + .sibling` | 相鄰的第一個兄弟節點 |
| `.child ~ .sibling` | 之後的兄弟節點 |
| `.class1.class2` | 同時擁有兩個 class |
| `.class1,.class2` | .class1 或 .class2 |

## 篩選元素屬性的選擇器

| 選擇器 | 說明 |
| ------------------ | ----------------------------------- |
| `[role="dialog"]` | `=` 相等 |
| `[class~="box"]` | `~=` 包含文字box |
| `[class\|="box"]` | `\|=` 相等或以此單字為前綴 (例如, `box-`)|
| `[href$=".doc"]` | `$=` 以此文本為結尾 |
| `[href^="/index"]` | `^=` 以此文本開頭 |
| `[class*="-is-"]` | `*=` 包含此文字 |

## 偽類選擇器

| 選擇器 | 說明 |
| -------------------- | ------------------------------------------ |
| `:target` | eg, `h2#foo:target` |
| `:focus` | |
| `:active` | |
| `:nth-child(3)` | 第 3 個子節點 |
| `:nth-child(3n+2)` | 第 3 組的第二個子節點。 透過(an + b)計算。 詳述：a 代表週期大小，n 代表計數（從 0 開始），b 代表偏移量 |
| `:nth-child(-n+4)` | 同上，因為結果必須是正整數，因此 n 最大為 3。 最終指向第 4, 3, 2, 1 個元素 |
| `:nth-last-child(2)` | |
| `:nth-of-type(2)` | |
| `:checked` | 選取的 inputs |
| `:disabled` | 禁用的元素 |
| `:enabled` | 啟用的元素 |
| `:default` | 分組中的預設元素 |
| `:empty` | 沒有子節點的元素 |

## 偽類選擇器變體

| 選擇器 |
| ----------------- |
| `:first-of-type` |
| `:last-of-type` |
| `:nth-of-type(2)` |
| `:only-of-type` |
| `:first-child` |
| `:last-child` |
| `:nth-child(2)` |
| `:only-child` |
| `::first-letter` |
| `::first-line` |


## <a href="#test-your-css-selector-skill-with-pagetual" data-pagetual-picker>Test your css selector skill with Pagetual</a>
![Picker](/img/picker.jpeg)