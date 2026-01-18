# delay
>JavaScript that delays the next action until it returns true. Use this to wait for lazy‑loaded content to finish.

Example:
--
```json
"delay": "return document.querySelector('#feed_pagenation>li.cur').innerText>=curpage"
```

*Sometimes the next page loads partially until you scroll. Use this to confirm the page is fully loaded; it checks only after reaching the bottom.*
