# nextLinkByJs (doc)
>Use this to eval javaScript code and return target url of next page with doc (document of every page loaded)

Example:
--
```JSON
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\\((\\d+)'\\);/,'$1_.html');"
```
>The params `doc` means document of every page loaded, this code means checking the element "a.curr+a" and return a link from it's href when it exists, stop otherwise.