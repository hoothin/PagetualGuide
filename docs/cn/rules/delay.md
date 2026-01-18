# delay
>用于延迟下一步的 JavaScript，返回 true 才继续。可用于等待懒加载内容完整出现。

示例：
--
```json
"delay": "return document.querySelector('#feed_pagenation>li.cur').innerText>=curpage"
```

*有时下一页内容不会一次性渲染完整（需要滚动才加载），可用此项判断页面是否完全加载，仅在滚动到底部后检查。*
