# delay
>The javaScript code to delay next action until return true, use this prop to get complete page elements with lazy load.

Example:
--
```JSON
"delay": "return document.querySelector('#feed_pagenation>li.cur').innerText>=curpage"
```

*Sometimes the next page won't load content completely, use this to check if the page is loaded completely*