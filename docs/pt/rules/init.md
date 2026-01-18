# init (doc, win, iframe, click, enter, input, sleep)
>Código JavaScript executado apenas uma vez na página principal ou no iframe espelho. Use para tarefas únicas ou para espelhar o estado da página principal no iframe.

Exemplo:
--
```json
"init": "if (iframe == null) return; await click('#btn'); await input('#input', 'here you are'); await enter('#input');"
```
>Ao extrair conteúdo no iframe espelho, clique em `#btn`, digite `here you are` em `#input` e pressione Enter em `#input`.

*Este código roda apenas uma vez.*
