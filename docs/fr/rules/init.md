# init (doc, win, iframe, click, enter, input, sleep)
>Code JavaScript exécuté une seule fois sur la page principale ou l’iframe miroir. À utiliser pour des actions uniques ou pour synchroniser l’état de la page principale vers l’iframe.

Exemple :
--
```json
"init": "if (iframe == null) return; await click('#btn'); await input('#input', 'here you are'); await enter('#input');"
```
>Lors de l’extraction dans l’iframe miroir, clique d’abord sur `#btn`, saisit `here you are` dans `#input`, puis valide avec Entrée.

*Ce code ne s’exécute qu’une seule fois.*
