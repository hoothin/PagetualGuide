# lazyImgSrc
>Attribut d’image qui pointe vers le src réel. Peut être défini comme ["lazysrc", "removeProp1,removeProp2"] pour supprimer des propriétés d’image.

Exemple 1 :
--
```json
"lazyImgSrc": "data-cfsrc"
```
>Récupère l’URL depuis "data-cfsrc" et la place dans le src de l’image.

Exemple 2 :
--
```json
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```
>Parfois, le src correct est écrasé par une propriété à retirer.
