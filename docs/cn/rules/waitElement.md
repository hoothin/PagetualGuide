# waitElement
>数组 `["exist", "not exist"]`，包含“必须存在的元素 selector/XPath（用于懒加载）”与“必须不存在的元素 selector/XPath（用于等待占位消失）”。

示例：
--
```json
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```
>持续检查直到 `.summary` 出现且 `#popular.fade:not(.in)` 消失。

```json
"waitElement": ".summary"
```
>持续检查直到 `.summary` 出现。

```json
"waitElement": "!#popular.fade:not(.in)"

# same as

"waitElement": [
    "",
    "#popular.fade:not(.in)"
]
```
>持续检查直到 `#popular.fade:not(.in)` 消失。

*设置 `waitElement` 与 `wait` 类似，表示当 URL 匹配时才生效。若只需设置“必须不存在”，可在“必须存在”处留空 ""；当设置“必须不存在”时，Pagetual 会尝试触发目标元素的懒加载。*
