# pageAction (doc, eles)
>JavaScript that runs for each inserted page with doc (document of each loaded page) and eles (elements found by the rule). Runs after insertion; you can call functions like click().

Example:
--
```json
"pageAction": "let j=document.querySelector('.lazy');eles.forEach(i=>{i.src=i.dataset.srcset;})"
```
