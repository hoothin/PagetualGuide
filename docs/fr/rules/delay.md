# delay
>Code JavaScript pour retarder l’action suivante jusqu’au retour true. À utiliser pour attendre le chargement complet du lazyload.

Exemple :
--
```json
"delay": "return document.querySelector('#feed_pagenation>li.cur').innerText>=curpage"
```

*Il arrive que la page suivante ne charge pas totalement (seulement après scroll). Utilisez ceci pour vérifier qu’elle est complète ; la vérification se fait uniquement en bas de page.*
