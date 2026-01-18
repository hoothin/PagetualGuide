# pageNum
>Markiert die Seitennummer in der aktuellen URL mit $p. {} erlaubt Berechnungen, z. B. {$p*25+1}.

Beispiel:
--
```json
"pageNum": "&start={15*($p-1)}"
```
>Wenn die URL "&start=15" ist, wird die Seitennummer als 2 gezählt.
