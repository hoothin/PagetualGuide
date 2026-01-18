# url
>RegExp pour l’URL du site cible. Pour la performance, l’URL est tronquée aux 500 premiers caractères.

Exemple :
--
```json
"url": "^https://abc\\.com/\\d+"
```
>Quand l’URL correspond au RegExp `/^https://abc\.com/\d+/`, cette règle s’applique.
