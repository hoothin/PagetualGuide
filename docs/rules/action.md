# action
>0 loads the URL and inserts static HTML. 1 loads via iframe so the page’s dynamic JavaScript can run. 2 forces a full‑page iframe to be inserted at the bottom.

Example:
--
```json
"action": 1
```

+ action: 0
Fetch the nextLink URL and insert static HTML with no dynamic handling. Default and fastest.
+ action: 1
Load the URL in an iframe and grab the content after it finishes loading. Use when content appears after page open.
+ action: 2
Create a full‑page iframe of the nextLink page, trim it, and insert it at the bottom of the current page.
