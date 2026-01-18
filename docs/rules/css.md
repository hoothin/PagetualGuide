# css
>Add CSS to reveal hidden elements, etc. If it starts with `inIframe:`, the CSS only applies to the next iframe.

Example 1:
--
```json
"css": ".card-lazy{display:none}"
```

Example 2:
--
```json
"css": "inIframe:.card-lazy{display:none}"
```
>Adds CSS only to next iframes.

Example 3:
--
```json
"css": ".card-lazy{display:block}inIframe:.card-lazy{display:none}"
```
>Adds `.card-lazy{display:block}` to the current page and `.card-lazy{display:none}` to next iframes.
