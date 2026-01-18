# init (doc, win, iframe, click, enter, input, sleep)
>仅执行一次的 JavaScript，作用于主页面或镜像 iframe。可用于只跑一次的初始化逻辑，或将主页面的状态同步到 iframe。

示例：
--
```json
"init": "if (iframe == null) return; await click('#btn'); await input('#input', 'here you are'); await enter('#input');"
```
>在镜像 iframe 中提取内容时，先点击 `#btn`，再向 `#input` 输入 `here you are`，最后在 `#input` 上执行回车。

*此代码只会执行一次，用于一次性操作。*
