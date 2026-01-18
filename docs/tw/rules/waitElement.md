# waitElement
>陣列 `["exist", "not exist"]`，包含「必須存在的元素 selector/XPath（用於懶載入）」與「必須不存在的元素 selector/XPath（用於等待佔位消失）」。

範例：
--
```json
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```
>持續檢查直到 `.summary` 出現且 `#popular.fade:not(.in)` 消失。

```json
"waitElement": ".summary"
```
>持續檢查直到 `.summary` 出現。

```json
"waitElement": "!#popular.fade:not(.in)"

# same as

"waitElement": [
    "",
    "#popular.fade:not(.in)"
]
```
>持續檢查直到 `#popular.fade:not(.in)` 消失。

*設定 `waitElement` 與 `wait` 類似，表示當 URL 符合時才生效。若只需設定「必須不存在」，可在「必須存在」處留空 ""；當設定「必須不存在」時，Pagetual 會嘗試觸發目標元素的懶載入。*
