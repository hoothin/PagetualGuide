# pageInit (doc, eles)
>JavaScript that runs before inserting each page with doc (document of each loaded page) and eles (elements found by the rule). You can trigger events like onView().

Example:
--
```json
"pageInit": "let ops=doc.querySelectorAll('op');[].forEach.call(ops,op=>{img.src=op.value;imgCon.appendChild(img)})"
```
