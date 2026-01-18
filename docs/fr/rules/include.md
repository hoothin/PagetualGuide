# include
>Selector ou XPath d’un élément qui doit exister.

Exemple 1 :
--
```json
"include": "div.content"
```
>Ignore la règle si la page ne contient pas `div.content`.

Exemple 2 :
--
```json
"include": "//a[contains(@href,'-') and text()='next']"
```
>Ignore la règle si la page ne contient pas `//a[contains(@href,'-') and text()='next']`.

*Sur des sites à contenu dynamique où nextLink change, include est utile.*
