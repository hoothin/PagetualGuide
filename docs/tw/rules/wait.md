# wait (doc)
>等待頁面就緒的時間（毫秒）。若能確定 URL 符合該站點，也可提供回傳布林值的 JavaScript 以判斷是否就緒。

範例 1：
--
```json
"wait": 500
```
>每 500ms 檢查一次，直到規則匹配。

範例 2：
--
```json
"wait": "await fetch('https://xxx.xxx');let img=doc.querySelector('ul.list img');return img!=null"
```
>持續檢查直到程式回傳 true。`doc` 代表站點 document，此範例用於檢查 `ul.list img` 是否存在。

*設定 `wait` 後，表示當 URL 符合時才生效該規則。*
