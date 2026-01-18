# delay
>用於延遲下一步的 JavaScript，回傳 true 才繼續。可用於等待懶載入內容完整出現。

範例：
--
```json
"delay": "return document.querySelector('#feed_pagenation>li.cur').innerText>=curpage"
```

*有時下一頁內容不會一次渲染完整（需捲動才載入），可用此項判斷頁面是否完整載入，僅在捲動到底部後檢查。*
