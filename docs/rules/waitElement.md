# waitElement
>The array["exist", "not exist"] contains "selector or xpath of element must exist (for some lazyload element)" & "selector or xpath of element must not exist (for some loading placeholder which need scroll into view to load)"

Example:
--
```JSON
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```
>Repeated checking before ".summary" appeared and "#popular.fade:not(.in)" disappeared.

```JSON
"waitElement": [
    ".summary"
]
```
>Repeated checking before ".summary" appeared

```JSON
"waitElement": [
    "!#popular.fade:not(.in)"
]

# same as

"waitElement": [
    "",
    "#popular.fade:not(.in)"
]
```
>Repeated checking before "#popular.fade:not(.in)" disappeared.

*When you set 'waitElement', it's same as the 'wait', that means current rule will effect when url is matched. You can leave a "" when you don't want to set "exist" or "not exist", when you set a "not exist", pagetual will try to trigger lazy load of target element*