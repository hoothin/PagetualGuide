# pagePre (response, doc)
>The javaScript code to run after get response from URL of next link, you can modify the text response content and return it, You can also return an array of pageElement directly

Example:
--
```json
"pagePre": "return decodeURI(response).replace(/[\\\\]/g,'')"
```

*Only effect when `action`==0 or `action`==1*