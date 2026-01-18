# nextLinkByJs (doc)
>Evaluate JavaScript and return the target URL of the next page. `doc` is the document of each loaded page.

Example:
--
```json
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\\((\\d+)'\\);/,'$1_.html');"
```
>`doc` means the document of each loaded page. This code checks `a.curr+a` and returns a link from its href when it exists; otherwise it stops.

>You can build a POST body using `#p{x=1&y=2}`, e.g. `https://www.xxx.com/pageAjax#p{x=1&y=2}`.
