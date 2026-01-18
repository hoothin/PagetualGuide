# exclude
>Selector ou XPath d’un élément qui ne doit pas exister.

Exemple 1 :
--
```json
"exclude": "div.content"
```
>Ignore la règle si la page contient `div.content`.

Exemple 2 :
--
```json
"exclude": "//a[contains(@href,'-') and text()='next']"
```
>Ignore la règle si la page contient `//a[contains(@href,'-') and text()='next']`.

*Sur des sites à contenu dynamique où nextLink change, exclude est utile.*
