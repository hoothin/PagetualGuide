# pageNum
>Indique le numéro de page avec $p dans l’URL courante. Vous pouvez utiliser {} pour évaluer une chaîne résultante, comme {$p*25+1}.

Exemple :
--
```json
"pageNum": "&start={15*($p-1)}"
```
>Considère la page comme 2 quand l’URL est "&start=15".
