# pageNum
>在目前 URL 中用 `$p` 代表頁碼，可用 {} 計算結果字串，例如 `{$p*25+1}`。

範例：
--
```json
"pageNum": "&start={15*($p-1)}"
```
>當 URL 為 `&start=15` 時，頁碼以 2 計算。
