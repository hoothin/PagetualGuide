# pageAction (doc, eles)
>JavaScript, выполняемый после вставки каждой страницы с doc (document загруженной страницы) и eles (элементы, найденные правилом). Можно вызывать click() и т. п.

Пример:
--
```json
"pageAction": "let j=document.querySelector('.lazy');eles.forEach(i=>{i.src=i.dataset.srcset;})"
```
