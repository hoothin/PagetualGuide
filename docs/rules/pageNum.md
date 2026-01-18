# pageNum
>Mark the page number in the current URL with $p. You can use {} to compute a result string, e.g. {$p*25+1}.

Example:
--
```json
"pageNum": "&start={15*($p-1)}"
```
>Counts the page as 2 when the URL is "&start=15".
