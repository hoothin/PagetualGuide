# rate
>觸發載入下一頁的距離門檻（以 windowHeight 為單位）。部分站點載入較慢時可設為 2 或 3。

範例：
--
```json
"rate": 3
```
>當頁面 scrollTop 到底部的距離小於 `3 * windowHeight` 時開始載入下一頁。
