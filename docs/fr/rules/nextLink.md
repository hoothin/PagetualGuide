# nextLink
>Selector ou XPath du lien de page suivante. Désactivé si réglé sur 0. Peut être un tableau de plusieurs nextLink. Vous pouvez le laisser vide pour une génération automatique.

Exemple 1 :
--
```json
"nextLink": ".page-next>a"
```


Exemple 2 :
--
```json
"nextLink": [
    ".page1-next>a",
    ".page2-next>a",
    ".page3-next>a"
]
```
>Quand plusieurs nextLink sont présents sur une page, vous pouvez les mettre dans un tableau et basculer via "switch next link".
