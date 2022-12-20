# wait
>The time to wait for page ready when you are sure the url match the site, you can also use a javaScript code which return a boolean to check if the page is ready instead

Example1:
--
```JSON
"wait": 500
```
>Check every 500ms before the rule is matched.

Example2:
--
```JSON
"wait": "let img=doc.querySelector('ul.list img');return img!=null"
```
>Repeated checking before the code return true. The `doc` means the document of the site, and the code means checking presence of the element "ul.list img".

*When you set 'wait', that means current rule will effect when url is matched.*