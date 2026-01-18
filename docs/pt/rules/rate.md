# rate
>Multiplicador de windowHeight. Você pode definir 2 ou 3 quando alguns sites carregam a próxima página lentamente.

Exemplo:
--
```json
"rate": 3
```
>Começa a carregar a próxima página quando a distância entre scrollTop e o final da página for menor que `3 * windowHeight`.
