# wait (doc)
>Temps d’attente pour que la page soit prête. Si vous êtes sûr que l’URL correspond, vous pouvez aussi fournir du JavaScript retournant un booléen.

Exemple 1 :
--
```json
"wait": 500
```
>Vérifie toutes les 500 ms avant que la règle ne s’applique.

Exemple 2 :
--
```json
"wait": "await fetch('https://xxx.xxx');let img=doc.querySelector('ul.list img');return img!=null"
```
>Répète la vérification jusqu’à ce que le code retourne true. `doc` est le document du site ; l’exemple vérifie `ul.list img`.

*Définir `wait` signifie que la règle s’applique quand l’URL correspond.*
