# pageNum
>Indica o número da página na URL atual com $p. Você pode usar {} para avaliar o resultado, como {$p*25+1}.

Exemplo:
--
```json
"pageNum": "&start={15*($p-1)}"
```
>Conta a página como 2 quando a URL é "&start=15".
