# pageElement
>Selector ou XPath du contenu principal à insérer. Peut être un tableau de plusieurs pageElement. Vous pouvez le laisser vide car il sera généré automatiquement.

Exemple 1 :
--
```json
"pageElement": ".Context>.Article"
```

Exemple 2 :
--
```json
"pageElement": [
    ".Context1>.Article",
    ".Context2>.Article",
    ".Context3>.Article"
]
```
>Quand plusieurs nextLink et pageElement sont présents sur une page, vous pouvez les mettre dans un tableau et basculer via "switch next link".
