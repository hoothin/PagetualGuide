# css
>添加 CSS，用于显示隐藏内容等；以 `inIframe:` 开头时，仅对 next iframe 生效。

示例 1：
--
```json
"css": ".card-lazy{display:none}"
```

示例 2：
--
```json
"css": "inIframe:.card-lazy{display:none}"
```
>只对后续 iframe 添加 CSS。

示例 3：
--
```json
"css": ".card-lazy{display:block}inIframe:.card-lazy{display:none}"
```
>对当前页添加 `.card-lazy{display:block}`，对后续 iframe 添加 `.card-lazy{display:none}`。
