# pagePre (response, doc)
>Code JavaScript exécuté après avoir obtenu la réponse de l’URL du nextLink. Vous pouvez modifier le texte de réponse et le retourner, ou retourner directement un tableau de pageElement.

Exemple :
--
```json
"pagePre": "return decodeURI(response).replace(/[\\\\]/g,'')"
```

*Effet uniquement lorsque `action`==0 ou `action`==1*
