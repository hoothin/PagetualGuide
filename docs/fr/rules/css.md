# css
>Ajoute du CSS pour afficher des éléments cachés, etc. Si la valeur commence par `inIframe:`, ce CSS ne s’applique qu’au next iframe.

Exemple 1 :
--
```json
"css": ".card-lazy{display:none}"
```

Exemple 2 :
--
```json
"css": "inIframe:.card-lazy{display:none}"
```
>Ajoute le CSS uniquement aux iframes suivants.

Exemple 3 :
--
```json
"css": ".card-lazy{display:block}inIframe:.card-lazy{display:none}"
```
>Ajoute `.card-lazy{display:block}` à la page courante et `.card-lazy{display:none}` aux iframes suivants.
