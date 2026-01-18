# pageElementByJs (over, pageNum)
>Executa JavaScript e cria os elementos a inserir. É necessário chamar over(eles) para retornar o array de elementos. pageNum é o número da página atual.

Exemplo:
--
```json
"pageElementByJs": "fetch(url.replace(/&offset=\\d+/,'') + '&offset=' + (pageNum + 1), {headers:{'X-Requested-With': 'XMLHttpRequest'}}).then(res => res.json()).then(res => {over(eles)})"
```
>Cria os elementos e usa `over` para retorná‑los após o carregamento.

*Quando não há nextLink na página atual, use esta opção para criar elementos novos para inserir.*
