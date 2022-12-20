# pagePre (response)
>The javaScript code to run after get response from URL of next link, you can modify the text response content and return it

Example:
--
```JSON
"pagePre": "return decodeURI(response).replace(/[\\\\]/g,'')"
```

*Won't effect when `action`==1 or `action`==2*