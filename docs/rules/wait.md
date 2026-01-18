# wait (doc)
>Time to wait for the page to be ready. If you’re sure the URL matches, you can also provide JavaScript that returns a boolean.

Example 1:
--
```json
"wait": 500
```
>Check every 500ms before the rule applies.

Example 2:
--
```json
"wait": "await fetch('https://xxx.xxx');let img=doc.querySelector('ul.list img');return img!=null"
```
>Repeat checks until the code returns true. `doc` is the page document; this example checks `ul.list img`.

*When `wait` is set, the rule applies once the URL matches.*
