# delay
>Código JavaScript para atrasar a próxima ação até retornar true. Use para aguardar a carga completa de conteúdo com lazyload.

Exemplo:
--
```json
"delay": "return document.querySelector('#feed_pagenation>li.cur').innerText>=curpage"
```

*Às vezes a próxima página não carrega tudo de uma vez (só depois de rolar). Use isso para verificar se a página está completa; a checagem ocorre apenas no fim da página.*
