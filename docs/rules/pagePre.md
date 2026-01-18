# pagePre (response, doc)
>JavaScript that runs after getting the response from the nextLink URL. You can modify and return the response text, or return a pageElement array directly.

Example:
--
```json
"pagePre": "return decodeURI(response).replace(/[\\\\]/g,'')"
```

*Only works when `action`==0 or `action`==1*
