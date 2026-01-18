# pageAction (doc, eles)
>Código JavaScript executado após inserir cada página com doc (documento de cada página carregada) e eles (elementos encontrados pela regra). Você pode chamar funções como click().

Exemplo:
--
```json
"pageAction": "let j=document.querySelector('.lazy');eles.forEach(i=>{i.src=i.dataset.srcset;})"
```
