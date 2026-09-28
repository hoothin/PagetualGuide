# 進階自訂

<ScriptNotice>

**尚未偵測到東方永頁機執行。** 請先[安裝並啟用腳本](install.html)，或參照 [Tampermonkey 官方說明](https://www.tampermonkey.net/faq.php?q=Q209) 開啟使用者腳本執行權限，然後重新整理頁面。腳本成功執行後，此提示會自動消失。

</ScriptNotice>

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

[![discord](/img/discord.png) Discord](https://discord.com/invite/keqypXC6wD "歡迎加入我們的 Discord 群") [![github](/img/github.png) Github](https://github.com/hoothin/UserScripts "點亮 Github 小星星") [![twitter](/img/twitter.png) Twitter](https://twitter.com/intent/follow?screen_name=HoothinDev "在推特上關注我")

<div id="jsoneditor"></div>

<table>
    <tr>
        <th colspan="5">如果您覺得 Pagetual 有用且經濟許可，歡迎打賞資助它的開發。如果不能，也沒關係 — 祝您使用愉快！💞</th>
    </tr>
    <tr>
        <th><a href="https://paypal.me/hoothin"><img src="https://www.paypal.me/favicon.ico"><br>PayPal</a></th>
        <th><a href="https://ko-fi.com/hoothin"><img src="https://ko-fi.com/favicon-32x32.png"><br>Ko-fi</a></th>
        <th><a href="https://afdian.com/@hoothin"><img src="https://static.afdiancdn.com/favicon.ico"><br>愛發電</a></th>
        <th rowspan="4" width="42%"><img src="https://s2.loli.net/2023/02/06/afTMxeASm48z5vE.jpg" alt="donate"></th>
    </tr>
    <tr>
        <th colspan="3"><a href="https://discord.com/invite/keqypXC6wD">加入 💬Discord</a></th>
    </tr>
    <tr>
        <th colspan="3"><a href="https://twitter.com/intent/follow?screen_name=HoothinDev">追蹤 🕊️twitter</a></th>
    </tr>
    <tr>
        <th colspan="3"><a href="mailto:rixixi@gmail.com">發送 📧E-Mail</a></th>
    </tr>
    <tr>
        <th colspan="3">Made with ❤️ by <a href="https://github.com/hoothin">Hoothin</a></th>
    </tr>
    <tr>
        <th colspan="5"><embed style="color-scheme: auto; margin: 20px 0; width: 100%;" wmode="transparent" id="sponsors" src="https://hoothin.com/pagetual/sponsors.svg"></th>
    </tr>
</table>

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

[更多規則範例](https://github.com/hoothin/UserScripts/blob/master/Pagetual/pagetualRules.json)

## name

目標網站名稱

```json
"name": "Site name"
```

## author

此規則的作者

```json
"author": "Hoothin"
```

## example

此規則的範例網址

```json
"example": "https://abc.com"
```

## [url](rules/url)

目標網站網址的正規表示法

```json
"url": "^https://abc\\.com/\\d+"
```

## [pinUrl](rules/pinUrl)

有時「下一頁」連結或頁面元素並不存在，將此項設為 true，就可以僅透過網址來固定規則，而不必使用智慧規則尋找元素

```json
"pinUrl": true
```

## [enable](rules/enable)

0 表示所有匹配都停止動作

```json
"enable": 0
```

## [include](rules/include)

必須包含的元素選擇器或 xpath

```json
"include": "div.content"
```

## [exclude](rules/exclude)

必須不包含的元素選擇器或 xpath

```json
"exclude": "div.content"
```

## [wait](rules/wait)

當您確定網址與網站匹配時，等待頁面準備就緒的時間，您也可以使用回傳布林值的 JavaScript 程式碼來檢查頁面是否準備就緒

```json
"wait": 500
"wait": "let img=doc.querySelector('ul.list img');return img!=null"
```

## [waitElement](rules/waitElement)

包含「必須存在的元素選擇器或 xpath (針對一些延遲載入的元素)」和「必須不存在的元素選擇器或 xpath (針對一些需要滾動到視野範圍內才能載入的載入佔位符)」的陣列["exist", "not exist"]

```json
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```

## [action](rules/action)

0 表示載入網址並以靜態 HTML 插入，1 表示透過 iframe 載入，以便頁面上的動態 JavaScript 程式碼可能產生作用，2 表示強制將 iframe 插入到底部

```json
"action": 1
```

## [nextLink](rules/nextLink)

下一頁連結的選擇器或 xpath，設為 0 時停用，您可以將其設為陣列以包含多個下一頁連結。

```json
"nextLink": ".page-next>a"
"nextLink": [
    ".page1-next>a",
    ".page2-next>a",
    ".page3-next>a"
]
```

## [nextLinkByUrl](rules/nextLinkByUrl)

如果沒有下一頁元素，您可以使用此項從目前的網址產生一個 href，[0] 表示正規表示法字串，[1] 表示取代字串，[2] 表示必須包含的元素選擇器或 xpath，[3] 表示必須不包含的元素選擇器或 xpath，您可以使用 {} 來評估簡單的程式碼

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

使用此項來評估 JavaScript 程式碼並回傳下一頁的目標網址，並帶有 doc (每個載入頁面的 document)

```json
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\\((\\d+)'\\);/,'$1_.html');"
```

## [stopSign](rules/stopSign)

當匹配此標誌時停止載入下一頁

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

需要插入的主要內容的選擇器或 xpath，您可以將其設為陣列以包含多個頁面元素。

```json
"pageElement": ".Context>.Article"
```

## [pageElementByJs `(over)`](rules/pageElementByJs)

使用此項來評估 JavaScript 程式碼並建立您想插入的任何元素，需要一個 over(eles) 回呼函數，並帶有要插入的元素陣列

```json
"pageElementByJs": "let src=match[1]+match[3];img.onload=()=>{over([img])};img.onerror=e=>{over()};img.src=src;"
```

## [replaceElement](rules/replaceElement)

您想用新元素取代的元素選擇器或 xpath，可以是陣列

```json
"replaceElement": "#page"
"replaceElement": ["#page1", "#page2"]
```

## [lazyImgSrc](rules/lazyImgSrc)

目標真實 src 的圖片屬性，可以透過 ["lazysrc", "removeProp1,removeProp2"] 來設定以移除圖片屬性

```json
"lazyImgSrc": "data-cfsrc"
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```

## [css](rules/css)

新增 css 以顯示一些隱藏元素，以 "inIframe:" 開頭，則此 css 僅在下一個 iframe 頁面中生效

```json
"css": ".card-lazy{display:none}"
```

## [insert](rules/insert)

您想插入的位置，您可以將其設為陣列以包含多個位置。

```json
"insert": "ul#feed-main"
```

## [insertPos](rules/insertPos)

1 表示在目標之前插入，2 表示只附加到目標底部

```json
"insertPos": 2
```

## [iframeInit `(win, iframe)`](rules/iframeInit)

在 iframe 中的任何程式碼執行之前，盡可能快地執行的 JavaScript 程式碼。

```json
"iframeInit": "win.self=win.top;"
```

## [init `(doc, win, iframe, click, enter, input)`](rules/init)

僅在目前主頁面或每個 iframe 載入時執行一次的 JavaScript 程式碼，並帶有 doc: (主頁面或 iframe 的 document)

```json
"init": "if(doc)doc.querySelector('[data-title=sh]').click();"
```

## [pagePre `(response)`](rules/pagePre)

從下一頁連結的 URL 取得 response 後執行的 JavaScript 程式碼，您可以修改 response 內容並回傳

```json
"pagePre": "return decodeURI(response).replace(/[\\\\]/g,'')"
```

## [pageInit `(doc, eles)`](rules/pageInit)

在插入每個頁面之前執行的 JavaScript 程式碼，並帶有 doc: (每個載入頁面的 document) 和 eles: (透過規則找到的元素)，您可以在插入前觸發 onView() 等事件

```json
"pageInit": "let ops=doc.querySelectorAll('op');[].forEach.call(ops,op=>{img.src=op.value;imgCon.appendChild(img)})"
```

## [pageAction `(doc, eles)`](rules/pageAction)

在插入每個頁面之後執行的 JavaScript 程式碼，並帶有 doc: (每個載入頁面的 document) 和 eles: (透過規則找到的元素)，您可以新增 click() 等功能

```json
"pageAction": "let j=document.querySelector('.lazy');eles.forEach(i=>{i.src=i.dataset.srcset;})"
```

## [filter](rules/filter)

篩選從下一頁插入的元素。

```json
"filter": {
    "count": 20,
    "words": "spams\\d",
    "link": "^https://spams\\.xxx",
    "selector": "div#spam"
}
```

## [loadMore](rules/loadMore)

「載入更多」按鈕的選擇器

```json
"loadMore": ".loadMore"
```

## [sleep](rules/sleep)

如果網站有限制時間間隔，載入下一頁時的休眠時間 (毫秒)

```json
"sleep": 1000
```

## [rate](rules/rate)

當某些網站載入下一頁較慢時，您可以將此項設為 2 或 3 的多個視窗高度

```json
"rate": 3
```

## [autoLoadNum](rules/autoLoadNum)

開啟頁面後自動翻頁的頁數

```json
"autoLoadNum": 5
```

## [listenHashChange](rules/listenHashChange)

將此項設為 true，當雜湊值變更時 Pagetual 將重新啟動

```json
"listenHashChange": true
```

## [refreshByClick](rules/refreshByClick)

如果網站點擊提交按鈕時內容會重新載入但網址不變。將此項設為目標按鈕的選擇器，點擊後 Pagetual 將重設。

```json
"refreshByClick": "#sreach"
```

## [pageNum](rules/pageNum)

用 $p 指向目前網址的頁碼，您可以使用 {} 來評估頁碼的結果字串，例如 {$p\*25+1}

```json
"pageNum": "&start={15*($p-1)}"
```

## [pageBar `(pageBar)`](rules/pageBar)

變更頁面導覽列的 JavaScript 程式碼，0 表示隱藏

```json
"pageBar": "pageBar.classList.add('j_thread_list');"
```

## [pageBarText](rules/pageBarText)

設為 1，則下一頁的 document 標題將顯示在頁面導覽列上

```json
"pageBarText": 1
```

## [autoClick](rules/autoClick)

您想自動點擊的元素 CSS 選擇器或 xpath

```json
"autoClick": "#btn-sky"
```

## [history](rules/history)

設為 0 時，停用歷史記錄寫入。設為 1 時，啟用歷史記錄寫入。設為 2 時，歷史記錄寫入將在拼接後立即執行。無論通用選項是什麼值。

```json
"history": 1
```

## [lockScroll](rules/lockScroll)

如果您不想在導覽到下一頁時頁面自動滾動，將此項設為 true

```json
"lockScroll": true
```

## [wheel](rules/wheel)

將此項設為 true，則下一頁動作只會在滾動滑鼠滾輪時生效

```json
"wheel": true
```

## [fitWidth](rules/fitWidth)

如果您發現 pageElement 的寬度不正確，將此項設為 false

```json
"fitWidth": false
```

## [delay](rules/delay)

延遲下一個動作的 JavaScript 程式碼，直到回傳 true 為止，使用此屬性可以取得完整的延遲載入頁面元素。

```json
"delay": "return document.querySelector('#feed_pagenation>li.cur').innerText>=curpage"
```

## [manualMode](rules/manualMode)

設為 true 可啟用手動模式，此時分頁將停止，右箭頭 (或 'pagetual.next' 事件) 將綁定為點擊下一頁連結。

```json
"manualMode": true
```

## [openInNewTab](rules/openInNewTab)

設為 true 可讓所有連結在新分頁中開啟，設為 false 可讓它們在自身頁面中開啟。

```json
"openInNewTab": true
```

## [pageElementCss](rules/pageElementCss)

您想為每個頁面元素設定的樣式 css。

```json
"pageElementCss": "color: red"
```

## [initRun](rules/initRun)

初始化後立即執行。

```json
"initRun": true
```

## [sideController](rules/sideController)

顯示或隱藏側邊控制器的工具列。

```json
"sideController": true
```

## [listenUrlChange](rules/listenUrlChange)

網址變更後重新整理腳本。

```json
"listenUrlChange": false
```

## [clickMode](rules/clickMode)

滾動到底部後停止翻頁並點擊下一頁連結。

```json
"clickMode": true
```

## [preloadImages(doc)](rules/preloadImages)

分析頁面並回傳需要預載入的圖片網址陣列。

```json
"preloadImages": "return ['1.jpg']"
```

## [child script](rules/child-script)

如果網站對程式碼評估有限制。您可以在 `window` 物件下建立一個帶有函數的子腳本。您應該將它們命名為以 `pagetual` 開頭並使用駝峰式命名法。例如 `window.pagetualWait`、`window.pagetualNextLinkByJs`、`window.pagetualPageInit`、`window.pagetualPageAction`、`window.pagetualInit`、`window.pagetualPageBarText`。
