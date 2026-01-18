# pageElementByJs (over, pageNum)
>Évalue du JavaScript et crée les éléments à insérer. Un over(eles) est nécessaire pour renvoyer le tableau d’éléments. pageNum correspond au numéro de page courant.

Exemple :
--
```json
"pageElementByJs": "fetch(url.replace(/&offset=\\d+/,'') + '&offset=' + (pageNum + 1), {headers:{'X-Requested-With': 'XMLHttpRequest'}}).then(res => res.json()).then(res => {over(eles)})"
```
>Crée les éléments et utilise `over` pour les renvoyer après chargement.

*Quand il n’y a pas de nextLink sur la page courante, vous pouvez utiliser cette option pour créer les éléments à insérer.*
