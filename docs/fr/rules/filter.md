# filter
>Filtre les éléments insérés depuis la page suivante.

Exemple :
--
```json
"filter": "20"
```
>Supprime les éléments si le nombre de mots internes est inférieur à 20.

```json
"filter": "😈"
```
>Supprime les éléments si le texte interne contient 😈.

```json
"filter": {
    "count": 20,
    "words": "spams\\d",
    "link": "^https://spams\\.xxx",
    "selector": "div#spam"
}
```
>Supprime les éléments si le texte correspond à `/spams\d/`, ou si le nombre de mots est inférieur à 20, ou si les liens insérés correspondent à `/^https:\/\/spams\.xxx/`, ou s’il existe un enfant qui correspond à `div#spam`.
