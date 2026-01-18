# url
>目标站点 URL 的 RegExp。为确保性能，URL 只截取前 500 个字符用于匹配。

示例：
--
```json
"url": "^https://abc\\.com/\\d+"
```
>当 URL 匹配 RegExp `/^https://abc\.com/\d+/` 时，该规则生效。
