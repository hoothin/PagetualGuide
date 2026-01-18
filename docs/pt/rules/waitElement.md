# waitElement
>Array `["exist", "not exist"]` que contém o selector/XPath do elemento que deve existir (lazyload) e do elemento que não deve existir (placeholder que precisa desaparecer).

Exemplo:
--
```json
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```
>Repete a verificação até ".summary" aparecer e "#popular.fade:not(.in)" desaparecer.

```json
"waitElement": ".summary"
```
>Repete a verificação até ".summary" aparecer.

```json
"waitElement": "!#popular.fade:not(.in)"

# same as

"waitElement": [
    "",
    "#popular.fade:not(.in)"
]
```
>Repete a verificação até "#popular.fade:not(.in)" desaparecer.

*Configurar `waitElement` é igual a `wait`: a regra entra em vigor quando a URL corresponde. Se não quiser definir "exist", deixe "". Ao definir "not exist", o Pagetual tentará acionar o lazyload do elemento alvo.*
