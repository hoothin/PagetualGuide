# nextLinkByJs (doc)
>执行 JavaScript 并返回下一页 URL，`doc` 为每次加载页面的 document。

示例：
--
```json
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\\((\\d+)'\\);/,'$1_.html');"
```
>`doc` 表示已加载页面的 document。此代码检查 `a.curr+a`，存在时从其 href 生成链接，否则停止。

>可用 `#p{x=1&y=2}` 形式构造 POST 数据体，例如返回 `https://www.xxx.com/pageAjax#p{x=1&y=2}`。
