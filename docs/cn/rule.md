# 高级自定义
<p name="click2import"></p>
<pre name="pagetual" style="display: none;">
https://hoothin.github.io/UserScripts/Pagetual/pagetualRules.json
</pre>
<component :is="'script'" src = "/jsoneditor/jsoneditor.min.js">
</component>
<component :is="'style'" type="text/css">
div.jsoneditor,
div.jsoneditor-menu {
  border-color: #4b4b4b;
}
div.jsoneditor-menu {
  background-color: #4b4b4b;
}
div.jsoneditor-tree,
div.jsoneditor textarea.jsoneditor-text {
  background-color: #111111;
  color: #ffffff;
}
.validation-error pre,
.parse-error pre,
.jsoneditor-tree>tbody>tr {
  background: unset;
}
div.jsoneditor-field,
div.jsoneditor-value {
  color: #ffffff;
}
table.jsoneditor-search div.jsoneditor-frame {
  background: #808080;
}

tr.jsoneditor-highlight,
tr.jsoneditor-selected {
  background-color: #808080;
}

div.jsoneditor-field[contenteditable=true]:focus,
div.jsoneditor-field[contenteditable=true]:hover,
div.jsoneditor-value[contenteditable=true]:focus,
div.jsoneditor-value[contenteditable=true]:hover,
div.jsoneditor-field.jsoneditor-highlight,
div.jsoneditor-value.jsoneditor-highlight {
  background-color: #808080;
  border-color: #808080;
}

div.jsoneditor-field.highlight-active,
div.jsoneditor-field.highlight-active:focus,
div.jsoneditor-field.highlight-active:hover,
div.jsoneditor-value.highlight-active,
div.jsoneditor-value.highlight-active:focus,
div.jsoneditor-value.highlight-active:hover {
  background-color: #b1b1b1;
  border-color: #b1b1b1;
}

div.jsoneditor-tree button:focus {
  background-color: #868686;
}

/* coloring of JSON in tree mode */
div.jsoneditor-readonly {
  color: #acacac;
}
div.jsoneditor td.jsoneditor-separator {
  color: #acacac;
}
div.jsoneditor-value.jsoneditor-string {
  color: #00ff88;
}
div.jsoneditor-value.jsoneditor-object,
div.jsoneditor-value.jsoneditor-array {
  color: #bababa;
}
div.jsoneditor-value.jsoneditor-number {
  color: #ff4040;
}
div.jsoneditor-value.jsoneditor-boolean {
  color: #ff8048;
}
div.jsoneditor-value.jsoneditor-null {
  color: #49a7fc;
}
div.jsoneditor-value.jsoneditor-invalid {
  color: white;
}
</component>

[![discord](/img/discord.png) Discord](https://discord.com/invite/keqypXC6wD "欢迎加入 Discord 群") [![github](/img/github.png) Github](https://github.com/hoothin/UserScripts "点亮 Github 小星星") [![wechat](/img/wechat.png) 公众号](/cn/sponsor.html#关注我的微信公众号↓ "关注我的微信公众号") [![twitter](/img/twitter.png) Twitter](https://twitter.com/intent/follow?screen_name=HoothinDev "在推特上关注我")

<div id="jsoneditor"></div>

<div class="rule-donate">
    <div class="rule-donate__intro">若您发现永页机有用且有余力，请杯咖啡将令我不胜感激。如果没有，也不用担心 - 开源万岁！💞</div>
    <div class="rule-donate__body">
        <div class="rule-donate__links">
            <a class="rule-donate__link" href="https://paypal.me/hoothin"><img src="https://www.paypal.me/favicon.ico" alt=""><span>PayPal</span></a>
            <a class="rule-donate__link" href="https://ko-fi.com/hoothin"><img src="https://ko-fi.com/favicon-32x32.png" alt=""><span>Ko-fi</span></a>
            <a class="rule-donate__link" href="https://afdian.com/@hoothin"><img src="https://static.afdiancdn.com/favicon.ico" alt=""><span>爱发电</span></a>
        </div>
        <div class="rule-donate__image"><img src="https://s2.loli.net/2023/02/06/afTMxeASm48z5vE.jpg" alt="donate"></div>
        <div class="rule-donate__actions">
            <div class="rule-donate__item">
                <span class="fr-reward">
                    <button class="fr-reward__btn" type="button" onclick="this.nextElementSibling.click()">支付宝领红包，买东西省亿点！</button>
                    <img class="fr-reward__image" src="https://s2.loli.net/2024/07/04/1CIsVfT9rxjKwRU.jpg" alt="支付宝红包二维码" />
                </span>
            </div>
            <a class="rule-donate__item" href="https://discord.com/invite/keqypXC6wD">💬Discord群</a>
            <a class="rule-donate__item" href="https://twitter.com/intent/follow?screen_name=HoothinDev">🕊️twitter</a>
            <a class="rule-donate__item" href="mailto:rixixi@gmail.com">📧E-mail</a>
            <div class="rule-donate__item">Made with ❤️ by <a href="https://github.com/hoothin">Hoothin</a></div>
        </div>
    </div>
    <div class="rule-donate__sponsors"><embed style="color-scheme: auto; margin: 20px 0; width: 100%;" wmode="transparent" id="sponsors" src="https://hoothin.com/pagetual/sponsors.svg"></div>
</div>

```json
[
  {
    "name":"yande",
    "url":"^https://yande-demo\\.re/",
    "pageElement":"ul#post-list-posts>li",
    "nextLink":"a.next_page",
    "css":".javascript-hide {display: inline-block !important;}"
  },
  {
    "name": "so.3dm",
    "url": "^https://so\\.3dmgame-demo\\.com",
    "pageElement": "div.content > div.search_wrap > div.search_lis",
    "action": 1
  },
  {
    "name":"xxgame",
    "url":"^http://www\\.xxgame-demo\\.net/chinese",
    "pageElement":"div.layui-row>div.layui-col-md4:not(div:nth-child(5),div:nth-child(6),div:nth-child(7))",
    "nextLinkByUrl":[
      "(http://www\\.xxgame-demo\\.net/chinese/?)(?:\\?page=|$)(\\d*)",
      "$1?page={$2+1}"
    ]
  }
]
```

[更多规则示例](https://github.com/hoothin/UserScripts/blob/master/Pagetual/pagetualRules.json)

## name

目标网站的名称

```json
"name": "Site name"
```

## author

此规则的作者

```json
"author": "Hoothin"
```

## example

此规则的示例网址

```json
"example": "https://abc.com"
```

## [url](rules/url)

目标网站网址的正则表达式

```json
"url": "^https://abc\\.com/\\d+"
```

## [pinUrl](rules/pinUrl)

有时下一个链接或页面元素可能不存在，将其设置为 true 就可以仅通过 url 固定规则，而非通过规则查找到元素才确认用此规则

```json
"pinUrl": true
```

## [enable](rules/enable)

0 表示所有条件都匹配时停止翻页

```json
"enable": 0
```

## [include](rules/include)

此规则必须包含的元素的 Selector 或 xpath

```json
"include": "div.content"
```

## [exclude](rules/exclude)

此规则必须不包含的元素的 Selector 或 xpath

```json
"exclude": "div.content"
```

## [wait](rules/wait)

当你确定 url 匹配网站时，等待页面就绪的时间。你也可以使用返回布尔值的 JavaScript 代码来检查页面是否已就绪

```json
"wait": 500
"wait": "let img=doc.querySelector('ul.list img');return img!=null"
```

## [waitElement](rules/waitElement)

这个数组["exist", "not exist"]包含 "必须存在的元素的 Selector 或 xpath (用于某些懒加载元素)" & "必须不存在的元素的 Selector 或 xpath (用于一些需要滚动到视图中才能加载的占位符)"

```json
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```

## [action](rules/action)

0 表示加载 url 并使用静态 html 插入，1 表示通过 iframe 加载，以便使得页面上的动态 JavaScript 代码尽可能生效，2 表示强制将 iframe 插入到底部

```json
"action": 1
```

## [nextLink](rules/nextLink)

下一页链接的 Selector 或 xpath，设置为 0 时禁用，你可以将其设置为一个数组以包含多个下一页链接。

```json
"nextLink": ".page-next>a"
"nextLink": [
    ".page1-next>a",
    ".page2-next>a",
    ".page3-next>a"
]
```

## [nextLinkByUrl](rules/nextLinkByUrl)

如果没有下一个元素，你可以使用它从当前 url 生成一个 href，[0]表示正则表达式字符串，[1]表示替换字符串，[2]表示必须包含的元素的 Selector 或 xpath，[3]表示必须不包含的元素的 Selector 或 xpath，你可以使用{}来执行简单的代码

```json
"nextLinkByUrl": [
    "(&page=(\\d+))?$",
    "&page={$2+1}"
]
"nextLinkByUrl": [
    "(&page=(\\d+))?$",
    "&page={$2+1}",
    ".disable>button"
]
```

## [nextLinkByJs `(doc)`](rules/nextLinkByJs)

使用它来执行 JavaScript 代码并返回下一页的目标 url，doc 为每页加载的 document

```json
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\\((\\d+)'\\);/,'$1_.html');"
```

## [stopSign](rules/stopSign)

当匹配到此标记时停止加载下一页

```json
"stopSign": ["#pagenum", ".disable",
    [
        "#pagenum",
        "(\\d+)"
    ],
    [
        "#pagenum",
        "\\/(\\d+)"
    ]
]
```

## [pageElement](rules/pageElement)

需要插入的主内容的 Selector 或 xpath，你可以将其设置为一个数组以包含多个页面元素。

```json
"pageElement": ".Context>.Article"
```

## [pageElementByJs `(over)`](rules/pageElementByJs)

使用它来执行 JavaScript 代码并创建你想要插入的元素，需要使用一个 over(eles) 来回调元素数组以进行插入

```json
"pageElementByJs": "let src=match[1]+match[3];img.onload=()=>{over([img])};img.onerror=e=>{over()};img.src=src;"
```

## [replaceElement](rules/replaceElement)

你想用新元素替换的元素的 Selector 或 xpath，可以是一个数组

```json
"replaceElement": "#page"
"replaceElement": ["#page1", "#page2"]
```

## [lazyImgSrc](rules/lazyImgSrc)

指向真实 src 的图像属性，可以设置为 ["lazysrc", "removeProp1,removeProp2"] 以删除图像的属性

```json
"lazyImgSrc": "data-cfsrc"
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```

## [css](rules/css)

添加 css，以便可以显示一些隐藏的元素，以 "inIframe:" 开头，则此 css 仅在下一个 iframe 页面中生效

```json
"css": ".card-lazy{display:none}"
```

## [insert](rules/insert)

你想要插入的位置，你可以将其设置为一个数组以包含多个位置。

```json
"insert": "ul#feed-main"
```

## [insertPos](rules/insertPos)

1 表示在前面插入，2 表示直接追加到目标底部

```json
"insertPos": 2
```

## [iframeInit `(win, iframe)`](rules/iframeInit)

在 iframe 中的任何代码运行之前，尽可能快地运行的 JavaScript 代码。

```json
"iframeInit": "win.self=win.top;"
```

## [init `(doc, win, iframe, click, enter, input)`](rules/init)

只在当前主页或每个 iframe 中运行一次的 JavaScript 代码，doc:(主页或 iframe 的 document)

```json
"init": "if(doc)doc.querySelector('[data-title=sh]').click();"
```

## [pagePre `(response)`](rules/pagePre)

从下一页的 URL 获取响应后运行的 JavaScript 代码，你可以修改响应内容并返回它

```json
"pagePre": "return decodeURI(response).replace(/[\\\\]/g,'')"
```

## [pageInit `(doc, eles)`](rules/pageInit)

每页插入时运行的 JavaScript 代码，doc:(每页加载的 document)，eles:(根据规则找到的元素)，在插入之前运行，你可以触发像 onView() 这样的事件

```json
"pageInit": "let ops=doc.querySelectorAll('op');[].forEach.call(ops,op=>{img.src=op.value;imgCon.appendChild(img)})"
```

## [pageAction `(doc, eles)`](rules/pageAction)

每页插入时运行的 JavaScript 代码，doc:(每页加载的 document)，eles:(根据规则找到的元素)，在插入之后运行，你可以添加像 click() 这样的函数

```json
"pageAction": "let j=document.querySelector('.lazy');eles.forEach(i=>{i.src=i.dataset.srcset;})"
```

## [filter](rules/filter)

筛选从下一页插入的元素。

```json
"filter": {
    "count": 20,
    "words": "spams\\d",
    "link": "^https://spams\\.xxx",
    "selector": "div#spam"
}
```

## [loadMore](rules/loadMore)

“加载更多”按钮的 Selector

```json
"loadMore": ".loadMore"
```

## [sleep](rules/sleep)

如果网站受时间间隔限制，加载下一页时的休眠时间（毫秒）

```json
"sleep": 1000
```

## [rate](rules/rate)

页面高度的倍数，如果有些网站加载下一页很慢，可以将其设置为 2 或 3

```json
"rate": 3
```

## [autoLoadNum](rules/autoLoadNum)

页面打开后自动加载的页数

```json
"autoLoadNum": 5
```

## [listenHashChange](rules/listenHashChange)

将其设置为 true，则当哈希值更改时 Pagetual 将重新启动

```json
"listenHashChange": true
```

## [refreshByClick](rules/refreshByClick)

如果点击提交按钮时网站在不更改 url 的情况下重新加载内容。将其设置为目标按钮的 Selector，点击后 Pagetual 将重置。

```json
"refreshByClick": "#sreach"
```

## [pageNum](rules/pageNum)

用 $p 指向当前 url 中的页码，你可以使用{}来计算页码结果字符串，例如 {$p\*25+1}

```json
"pageNum": "&start={15*($p-1)}"
```

## [pageBar `(pageBar)`](rules/pageBar)

用于更改 pageBar 的 JavaScript 代码，0 表示隐藏

```json
"pageBar": "pageBar.classList.add('j_thread_list');"
```

## [pageBarText](rules/pageBarText)

将其设置为 1，则下一页的文档标题将显示在 pagebar 上

```json
"pageBarText": 1
```

## [autoClick](rules/autoClick)

你想要自动点击的元素的 css selector 或 xpath

```json
"autoClick": "#btn-sky"
```

## [history](rules/history)

设置为 0 则禁用历史记录写入。设置为 1 则启用历史记录写入。设置为 2 则在拼接后立即进行历史记录写入。与通用选项的值无关。

```json
"history": 1
```

## [lockScroll](rules/lockScroll)

如果你不希望页面在导航到下一页时自动滚动，则将其设置为 true

```json
"lockScroll": true
```

## [wheel](rules/wheel)

将其设置为 true，则只有当鼠标滚轮滚动时，下一页操作才会生效

```json
"wheel": true
```

## [fitWidth](rules/fitWidth)

如果你发现 pageElement 获得了错误的窄宽度，则将其设置为 false

```json
"fitWidth": false
```

## [delay](rules/delay)

延迟下一页操作的 JavaScript 代码，直到返回 true，使用此属性可以获取带有懒加载的完整页面元素。

```json
"delay": "return document.querySelector('#feed_pagenation>li.cur').innerText>=curpage"
```

## [manualMode](rules/manualMode)

设置为 true 以启用手动模式，则分页将停止，右箭头（或 'pagetual.next' 事件）将绑定到点击下一页链接。

```json
"manualMode": true
```

## [openInNewTab](rules/openInNewTab)

将其设置为 true 以使所有链接在新标签页中打开，设置为 false 则在当前标签页中打开。

```json
"openInNewTab": true
```

## [pageElementCss](rules/pageElementCss)

你想要为每个页面元素设置的 css 样式。

```json
"pageElementCss": "color: red"
```

## [initRun](rules/initRun)

初始化后立即运行。

```json
"initRun": true
```

## [sideController](rules/sideController)

显示或隐藏侧边控制器的工具栏。

```json
"sideController": true
```

## [listenUrlChange](rules/listenUrlChange)

url 更改后刷新脚本。

```json
"listenUrlChange": false
```

## [clickMode](rules/clickMode)

滚动到底部后停止翻页并点击下一页链接。

```json
"clickMode": true
```

## [preloadImages(doc)](rules/preloadImages)

分析页面并返回需要预加载的图片 URL 数组。

```json
"preloadImages": "return ['1.jpg']"
```

## [child script](rules/child-script)

如果网站对代码执行有限制。你可以在 `window` 对象下创建一个带有函数的子脚本。你应该将它们命名为以 `pagetual` 开头的驼峰命名法。例如 `window.pagetualWait`、`window.pagetualNextLinkByJs`、`window.pagetualPageInit`、`window.pagetualPageAction`、`window.pagetualInit`、`window.pagetualPageBarText`。
