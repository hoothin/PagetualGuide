# nextLinkByJs (doc)
>執行 JavaScript 並回傳下一頁 URL，`doc` 為每次載入頁面的 document。

範例：
--
```json
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\\((\\d+)'\\);/,'$1_.html');"
```
>`doc` 表示已載入頁面的 document。此程式檢查 `a.curr+a`，存在時由其 href 產生連結，否則停止。

>可用 `#p{x=1&y=2}` 形式組合 POST 資料，例如回傳 `https://www.xxx.com/pageAjax#p{x=1&y=2}`。
