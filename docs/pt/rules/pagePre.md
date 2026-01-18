# pagePre (response, doc)
>Código JavaScript executado após obter a resposta da URL do nextLink. Você pode modificar o texto da resposta e retorná‑lo, ou retornar diretamente um array de pageElement.

Exemplo:
--
```json
"pagePre": "return decodeURI(response).replace(/[\\\\]/g,'')"
```

*Só tem efeito quando `action`==0 ou `action`==1*
