# pinUrl
>有时 nextLink 或 pageElement 不存在，可设为 true，仅依据 url 命中规则，而不依赖智能匹配。

示例：
--
```json
"pinUrl": true
```
>当 URL 匹配之前设置的 RegExp 时，即使元素不符合规则也会启用该规则。

*例如：站点只在滚动或点击后才显示 nextLink 时，建议设为 true。*
