# css
>Add css so you can show some hidden element, start with "inIframe:" then this css will effect only in next iframe page

Example1:
--
```JSON
"css": ".card-lazy{display:none}"
```

Example2:
--
```JSON
"css": "inIframe:.card-lazy{display:none}"
```
>Add css to next iframes only.

Example3:
--
```JSON
"css": ".card-lazy{display:block}inIframe:.card-lazy{display:none}"
```
>Add `.card-lazy{display:block}` to current page and add `.card-lazy{display:none}` to next iframes.