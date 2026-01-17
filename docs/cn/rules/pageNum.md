# pageNum
>Point the page number with $p in current url, you can use{} to eval result string from page number, like {$p*25+1}

Example:
--
```json
"pageNum": "&start={15*($p-1)}"
```
>Count page num as 2 when url is "&start=15"