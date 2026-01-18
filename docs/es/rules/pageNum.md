# pageNum
>Indica el número de página en la URL actual con $p. Puedes usar {} para evaluar el resultado, como {$p*25+1}.

Ejemplo:
--
```json
"pageNum": "&start={15*($p-1)}"
```
>Cuenta la página como 2 cuando la URL es "&start=15".
