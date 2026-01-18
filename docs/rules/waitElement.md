# waitElement
>Array `["exist", "not exist"]` containing the selector/XPath that must exist (for lazyload) and the selector/XPath that must not exist (placeholder to disappear).

Example:
--
```json
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```
>Repeat checks until ".summary" appears and "#popular.fade:not(.in)" disappears.

```json
"waitElement": ".summary"
```
>Repeat checks until ".summary" appears.

```json
"waitElement": "!#popular.fade:not(.in)"

# same as

"waitElement": [
    "",
    "#popular.fade:not(.in)"
]
```
>Repeat checks until "#popular.fade:not(.in)" disappears.

*Setting `waitElement` works like `wait`: the rule applies when the URL matches. If you don’t want to set “exist”, leave it as "". When “not exist” is set, Pagetual will try to trigger lazyload for the target element.*
