# pinUrl
>Parfois nextLink ou pageElement est absent. Définissez à true pour ancrer la règle uniquement via l’url, sans recherche intelligente.

Exemple :
--
```json
"pinUrl": true
```
>Lorsque l’URL correspond au RegExp défini, la règle s’applique même si les éléments ne correspondent pas.

*Par exemple, si le site affiche nextLink seulement après un scroll ou un clic, activez pinUrl.*
