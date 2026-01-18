# wait (doc)
>Tempo de espera até a página ficar pronta. Se você tem certeza que a URL corresponde, também pode usar JavaScript que retorne booleano.

Exemplo 1:
--
```json
"wait": 500
```
>Verifica a cada 500ms antes de aplicar a regra.

Exemplo 2:
--
```json
"wait": "await fetch('https://xxx.xxx');let img=doc.querySelector('ul.list img');return img!=null"
```
>Repete a verificação até o código retornar true. `doc` é o documento do site e o exemplo verifica `ul.list img`.

*Ao definir `wait`, a regra é aplicada quando a URL corresponde.*
