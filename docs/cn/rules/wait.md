# wait (doc)
>等待页面就绪的时间（毫秒）。若能确定 URL 匹配该站点，也可提供返回布尔值的 JavaScript 以判断是否就绪。

示例 1：
--
```json
"wait": 500
```
>每 500ms 检查一次，直到规则匹配。

示例 2：
--
```json
"wait": "await fetch('https://xxx.xxx');let img=doc.querySelector('ul.list img');return img!=null"
```
>持续检查直到代码返回 true。`doc` 表示站点 document，此示例用于检测 `ul.list img` 是否存在。

*设置 `wait` 后，表示当 URL 匹配时才生效该规则。*
