# 自定义规则

<link href="/PagetualGuide/jsoneditor/jsoneditor.min.css" rel="stylesheet" type="text/css">
<script src="/PagetualGuide/jsoneditor/jsoneditor.min.js"></script>
<style type="text/css">
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
</style>

<div id="jsoneditor"></div>

``` json
[
  {
    "name":"yande",
    "url":"^https://yande\\.re/",
    "pageElement":"ul#post-list-posts>li",
    "nextLink":"a.next_page",
    "css":".javascript-hide {display: inline-block !important;}"
  },
  {
    "name": "so.3dm",
    "url": "^https://so\\.3dmgame\\.com",
    "pageElement": "div.content > div.search_wrap > div.search_lis",
    "action": 1
  },
  {
    "name":"xxgame",
    "url":"^http://www\\.xxgame\\.net/chinese",
    "pageElement":"div.layui-row>div.layui-col-md4:not(div:nth-child(5),div:nth-child(6),div:nth-child(7))",
    "nextLinkByUrl":[
      "(http://www\\.xxgame\\.net/chinese/?)(?:\\?page=|$)(\\d*)",
      "$1?page={$2+1}"
    ]
  }
]
```

[More examples of rule](https://github.com/hoothin/UserScripts/blob/master/Pagetual/pagetualRules.json)

name
--
Name of the target site
```JSON
"name": "Site name"
```

author
--
Author of this rule
```JSON
"author": "Hoothin"
```

example
--
Example url of this rule
```JSON
"example": "https://abc.com"
```

[url](rules/url)
--
RegExp for the url of target site
```JSON
"url": "^https://abc\\.com/\\d+"
```

[pinUrl](rules/pinUrl)
--
Sometimes the next link or page element will be inexistence, set this to true so you can pin the rule just with url instead of finding elements by intelligent rules
```JSON
"pinUrl": true
```

[enable](rules/enable)
--
0 means stop action when all matched
```JSON
"enable": 0
```

[include](rules/include)
--
Selector or xpath of the element which must include
```JSON
"include": "div.content"
```

[exclude](rules/exclude)
--
Selector or xpath of the element which must not include
```JSON
"exclude": "div.content"
```

[wait](rules/wait)
--
The time to wait for page ready when you are sure the url match the site, you can also use a javaScript code which return a boolean to check if the page is ready instead
```JSON
"wait": 500
"wait": "let img=doc.querySelector('ul.list img');return img!=null"
```

[waitElement](rules/waitElement)
--
The array["exist", "not exist"] contains "selector or xpath of element must exist (for some lazyload element)" & "selector or xpath of element must not exist (for some loading placeholder which need scroll into view to load)"
```JSON
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```

[action](rules/action)
--
0 means load url and insert with static html, 1 means load by iframe so that dynamic javaScript code on page may effect, 2 means force insert iframe to bottom
```JSON
"action": 1
```

[nextLink](rules/nextLink)
--
Selector or xpath of next page link, disable when set to 0, you can let it to be a array to contains multiple next links.
```JSON
"nextLink": ".page-next>a"
"nextLink": [
    ".page1-next>a",
    ".page2-next>a",
    ".page3-next>a"
]
```

[nextLinkByUrl](rules/nextLinkByUrl)
--
If there is no next element, you can use this to generate a href from current url, [0] means RegExp string, [1] means replace string, [2] means selector or xpath of the element which must include, [3] means selector or xpath of the element which must not include, you can use {} to eval simple code
```JSON
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

[nextLinkByJs `(doc)`](rules/nextLinkByJs)
--
Use this to eval javaScript code and return target url of next page with doc (document of every page loaded)
```JSON
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\\((\\d+)'\\);/,'$1_.html');"
```

[stopSign](rules/stopSign)
--
Stop to load next page when matching this sign
```JSON
"stopSign": ["#pagenum", ".disable"] 
```
```JSON
"stopSign": [
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
```JSON
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
```JSON
"stopSign": "if (doc.querySelector('.disable')) return true; if (nextLink.className === 'disable') return true; return false;" 
```

[pageElement](rules/pageElement)
--
Selector or xpath of main content which need to insert, you can let it to be a array to contains multiple page elements.
```JSON
"pageElement": ".Context>.Article"
```

[pageElementByJs `(over)`](rules/pageElementByJs)
--
Use this to eval javaScript code and create the elements whatever you want to insert, a over(eles) is needed to callback with elements array for insert
```JSON
"pageElementByJs": "let src=match[1]+match[3];img.onload=()=>{over([img])};img.onerror=e=>{over()};img.src=src;"
```

[replaceElement](rules/replaceElement)
--
Selector or xpath of element which you want to replace with new one, can be a array
```JSON
"replaceElement": "#page"
"replaceElement": ["#page1", "#page2"]
```

[lazyImgSrc](rules/lazyImgSrc)
--
The attr of image which target to real src, can be set by ["lazysrc", "removeProp1,removeProp2"] to remove props of image
```JSON
"lazyImgSrc": "data-cfsrc"
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```

[css](rules/css)
--
Add css so you can show some hidden element, start with "inIframe:" then this css will effect only in next iframe page
```JSON
"css": ".card-lazy{display:none}"
```

[insert](rules/insert)
--
Which position you want to insert, you can let it to be a array to contains multiple positions.
```JSON
"insert": "ul#feed-main"
```

[insertPos](rules/insertPos)
--
1 means insert before, 2 means just append to the bottom of target
```JSON
"insertPos": 2
```

[init `(doc,win,iframe)`](rules/init)
--
The javaScript code to run only once with current main page with doc:(document of main page)
```JSON
"init": "if(doc)doc.querySelector('[data-title=sh]').click();"
```

[pagePre `(response)`](rules/pagePre)
--
The javaScript code to run after get response from URL of next link, you can modify the response content and return it
```JSON
"pagePre": "return decodeURI(response).replace(/[\\\\]/g,'')"
```

[pageInit `(doc, eles)`](rules/pageInit)
--
The javaScript code to run with every page inserted with doc:(document of every page loaded) and eles:(elements found with rule), run before inserted, you can trigger event like onView()
```JSON
"pageInit": "let ops=doc.querySelectorAll('op');[].forEach.call(ops,op=>{img.src=op.value;imgCon.appendChild(img)})"
```

[pageAction `(doc, eles)`](rules/pageAction)
--
The javaScript code to run with every page inserted with doc:(document of every page loaded) and eles:(elements found with rule), run after inserted, you can add functions like click()
```JSON
"pageAction": "let j=document.querySelector('.lazy');eles.forEach(i=>{i.src=i.dataset.srcset;})"
```

[loadMore](rules/loadMore)
--
Selector of "load more" button 
```JSON
"loadMore": ".loadMore"
```

[sleep](rules/sleep)
--
Sleep time (ms) when load next page if site is limited by time interval
```JSON
"sleep": 1000
```

[rate](rules/rate)
--
The multi-windowHeight which you can set to 2 or 3 while some sites load next page slowly 
```JSON
"rate": 3
```

[autoLoadNum](rules/autoLoadNum)
--
The amount of pages for auto turning after page opening
```JSON
"autoLoadNum": 5
```

[listenHashChange](rules/listenHashChange)
--
Set this to true so pagetual will restart when hash changed
```JSON
"listenHashChange": true
```

[refreshByClick](rules/refreshByClick)
--
If the site reload content without changing url when click a submit button. Set this with the selector of the target button, pagetual will reset after click it.
```JSON
"refreshByClick": "#sreach"
```

[pageNum](rules/pageNum)
--
Point the page number with $p in current url, you can use{} to eval result string from page number, like {$p\*25+1}
```JSON
"pageNum": "&start={15*($p-1)}"
```

[pageBar `(pageBar)`](rules/pageBar)
--
The javaScript code to change pageBar, 0 means hide
```JSON
"pageBar": "pageBar.classList.add('j_thread_list');"
```

[pageBarText](rules/pageBarText)
--
Set to 1 so the document title of next page will be shown on pagebar
```JSON
"pageBarText": 1
```

[autoClick](rules/autoClick)
--
The css selector or xpath of element which you want to click automatically
```JSON
"autoClick": "#btn-sky"
```

[history](rules/history)
--
Set to 0 then history writing will be disable. Set to 1 then history writing will be enable. Set to 2 then history writing will action immediately after splicing. No matter what value is the general option.
```JSON
"history": 1
```

[lockScroll](rules/lockScroll)
--
Set to true if you don't want the page to auto scroll when navigate to next page
```JSON
"lockScroll": true
```

[wheel](rules/wheel)
--
Set to true so the next page action will only effect when the mouse wheel roll
```JSON
"wheel": true
```

[fitWidth](rules/fitWidth)
--
Set to false if you find the pageElement get the wrong small width
```JSON
"fitWidth": false
```

[delay](rules/delay)
--
The javaScript code to delay next action until return true, use this prop to get complete page elements with lazy load.
```JSON
"delay": "return document.querySelector('#feed_pagenation>li.cur').innerText>=curpage"
```

[manualMode](rules/manualMode)
--
Set to true to enable manual mode, then paging will stop, right arrow (or 'pagetual.next' event) will be bound to click next link.
```JSON
"manualMode": true
```

[openInNewTab](rules/openInNewTab)
--
Set to true to make all links to open in new tabs, false to make them open in self.
```JSON
"openInNewTab": true
```

[pageElementCss](rules/pageElementCss)
--
The style css which you want to set for every page element.
```JSON
"pageElementCss": "color: red"
```

[initRun](rules/initRun)
--
Run immediately upon initialization.
```JSON
"initRun": true
```

[sideController](rules/sideController)
--
Show or hide toolbar of sideController.
```JSON
"sideController": true
```

[listenUrlChange](rules/listenUrlChange)
--
Refresh script after url changed.
```JSON
"listenUrlChange": false
```

[clickMode](rules/clickMode)
--
Stop turning page and click nextlink after scrolled to bottom.
```JSON
"clickMode": true
```

[preloadImages(doc)](rules/preloadImages)
--
Analyze the page and return an array of image's urls that need to be preloaded.
```JSON
"preloadImages": "return ['1.jpg']"
```

[child script](rules/child-script)
--
If the site has some limit for code eval. You can make a child script with function under object `window`. You should name them start with `pagetual` use camelCase. Like `window.pagetualWait`, `window.pagetualNextLinkByJs`, `window.pagetualPageInit`, `window.pagetualPageAction`, `window.pagetualInit`, `window.pagetualPageBarText`.