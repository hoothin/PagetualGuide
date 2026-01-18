# action
>0 表示加载 URL 并以静态 HTML 插入；1 表示用 iframe 加载以便执行页面中的动态 JavaScript；2 表示强制把完整 iframe 插到页面底部。

示例：
--
```json
"action": 1
```

+ action: 0
获取 nextLink 的 URL 并直接插入静态 HTML，不做动态处理，默认值且速度最快。
+ action: 1
用 iframe 加载 URL，等待加载完成后再取内容，适合内容在页面打开后才渲染的情况。
+ action: 2
创建 nextLink 对应页面的完整 iframe，裁剪后插入到当前页面底部。
