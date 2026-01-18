# rate
>触发加载下一页的距离阈值（以 windowHeight 为单位）。部分站点加载较慢时可设为 2 或 3。

示例：
--
```json
"rate": 3
```
>当页面 scrollTop 到底部的距离小于 `3 * windowHeight` 时开始加载下一页。
