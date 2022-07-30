# Custom rules

``` json
[
  {
    "name":"yande",
    "url":"^https:\/\/yande\\.re\/",
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

<link href="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.9.0/jsoneditor.min.css" rel="stylesheet" type="text/css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.9.0/jsoneditor.min.js"></script>
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
<button id="saveBtn" style="width: 100%; font-size: larger;">Save</button>

name
--
Name of the target site

author
--
Author of this rule

example
--
Example url of this rule

url
--
RegExp for the url of target site

pinUrl
--
Sometimes the next link and page element will be inexistence, set this to true so you can pin the rule just with url

enable
--
0 means stop action when all matched

include
--
Selector of the element which must include

exclude
--
Selector of the element which must not include

wait
--
The time to wait for page ready when you are sure the url match the site, you can also use a javaScript code which return a boolean to check if the page is ready instead

waitElement
--
The array["exist", "not exist"] contains "selector of element must exist (for some lazyload element)" & "selector of element must not exist (for some loading placeholder which need scroll into view to load)"

type
--
0 means xpath, 1 or undefined means css selector

action
--
0 means load url and insert with static html, 1 means load by iframe so that dynamic javaScript code on page may effect, 2 means force insert iframe to bottom

nextLink
--
Selector of next page link, disable when set to 0

nextLinkByUrl
--
If there is no next element, you can use this to generate a href from current url, [0] means RegExp string, [1] means replace string, you can use {} to eval simple code

nextLinkByJs `(doc)`
--
Use this to eval javaScript code and return target url of next page with doc (document of every page loaded)

pageElement
--
Selector of main content which need to insert

pageElementByJs `(over)`
--
Use this to eval javaScript code and create the elements whatever you want to insert, a over(eles) is needed to callback with elements array for insert

lazyImgSrc
--
The attr of image which target to real src

css
--
Add css so you can show some hidden element, start with "inIframe:" then this css will effect only in next iframe page

insert
--
Which position you want to insert

insertPos
--
1 means insert before, 2 means just append to the bottom of target

init `(document)`
--
The javaScript code to run only once with current main page with document:(document of main page)

pagePre `(response)`
--
The javaScript code to run after get response from URL of next link, you can modify the response content and return it

pageInit `(doc, eles)`
--
The javaScript code to run with every page inserted with doc:(document of every page loaded) and eles:(elements found with rule), run before inserted, you can trigger event like onView()

pageAction `(doc, eles)`
--
The javaScript code to run with every page inserted with doc:(document of every page loaded) and eles:(elements found with rule), run after inserted, you can add functions like click()

loadMore
--
Selector of "load more" button 

sleep
--
Sleep time (ms) when load next page if site is limited

rate
--
The multi-windowHeight which you can set to 2 or 3 while some sites load next page slowly 

pageNum
--
Point the page number with $p in current url, you can use{} to eval result string from page number, like {$p\*25+1}

pageBar `(pageBar)`
--
The javaScript code to change pageBar, 0 means hide

pageBarText
--
Set to 1 so the document title of next page will be shown on pagebar

autoClick
--
The css selector or xpath of element which you want to click automatically

history
--
Set to 0 then history writing will be disable. Set to 1 then history writing will be enable. No matter what value is the general option.

lockScroll
--
Set to true if you don't want the page to auto scroll when navigate to next page

wheel
--
Set to true so the next page action will only effect when the mouse wheel roll

pageElementStyle
--
Custom cssText of style for pageElement

delay
--
The javaScript code to delay next action until return true, use this prop to get complete page elements with lazy load.

manualMode
--
Set to true to enable manual mode, then paging will stop, right arrow (or 'pagetual.next' event) will be bound to click next link.

child script
--
If the site has some limit for code eval. You can make a child script with function under object `window`. You should name them start with `pagetual` use camelCase. Like `window.pagetualWait`, `window.pagetualNextLinkByJs`, `window.pagetualPageInit`, `window.pagetualPageAction`, `window.pagetualInit`, `window.pagetualPageBarText`.
