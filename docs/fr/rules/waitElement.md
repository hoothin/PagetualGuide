# waitElement
>Tableau `["exist", "not exist"]` contenant le selector/XPath d’un élément qui doit exister (lazyload) et celui qui ne doit pas exister (placeholder à faire disparaître).

Exemple :
--
```json
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```
>Répète la vérification jusqu’à ce que ".summary" apparaisse et que "#popular.fade:not(.in)" disparaisse.

```json
"waitElement": ".summary"
```
>Répète la vérification jusqu’à ce que ".summary" apparaisse.

```json
"waitElement": "!#popular.fade:not(.in)"

# same as

"waitElement": [
    "",
    "#popular.fade:not(.in)"
]
```
>Répète la vérification jusqu’à ce que "#popular.fade:not(.in)" disparaisse.

*Configurer `waitElement` revient à `wait` : la règle s’applique lorsque l’URL correspond. Si vous ne voulez pas définir "exist", laissez "". En définissant "not exist", Pagetual tentera de déclencher le lazyload de l’élément ciblé.*
