# action
>0 significa carregar a URL e inserir HTML estático; 1 significa carregar via iframe para executar o JavaScript dinâmico da página; 2 significa forçar a inserção de um iframe completo no final da página.

Exemplo:
--
```json
"action": 1
```

+ action: 0
Obtém a URL do nextLink e insere HTML estático sem tratamento dinâmico. É o padrão e o mais rápido.
+ action: 1
Carrega a URL em um iframe e captura o conteúdo após o carregamento. Útil quando o conteúdo é renderizado depois que a página abre.
+ action: 2
Cria um iframe da página completa do nextLink, recorta e insere no final da página atual.
