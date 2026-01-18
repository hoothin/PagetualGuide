# pinUrl
>Às vezes o nextLink ou pageElement não existe. Defina como true para fixar a regra apenas pela url, sem usar regras inteligentes.

Exemplo:
--
```json
"pinUrl": true
```
>Quando a URL corresponde ao RegExp definido, a regra entra em vigor mesmo que os elementos não correspondam.

*Por exemplo, se o site só mostra o nextLink após rolar ou clicar, defina pinUrl como true.*
