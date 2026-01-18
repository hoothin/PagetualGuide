# action
>0 signifie charger l’URL et insérer du HTML statique ; 1 signifie charger via iframe pour exécuter le JavaScript dynamique de la page ; 2 signifie forcer l’insertion d’un iframe complet en bas de page.

Exemple :
--
```json
"action": 1
```

+ action: 0
Récupère l’URL du nextLink et insère du HTML statique sans traitement dynamique. Valeur par défaut et la plus rapide.
+ action: 1
Charge l’URL dans un iframe et récupère le contenu une fois le chargement terminé. Utile quand le contenu apparaît après l’ouverture de la page.
+ action: 2
Crée un iframe de la page complète du nextLink, le rogne, puis l’insère en bas de la page courante.
