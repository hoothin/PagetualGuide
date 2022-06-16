# 自定义规则

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
    "name":"tieba",
    "action":1,
    "url":"^https:\/\/tieba\\.baidu.com\/f\\?kw=",
    "pageElement":"ul#thread_list>li",
    "nextLink":".next.pagination-item "
  },
  {
    "name":"xxgame",
    "url":"^http://www\\.xxgame\\.net/chinese",
    "pageElement":"div.layui-row>div.layui-col-md4:not(div:nth-child(5),div:nth-child(6),div:nth-child(7))",
    "nextLinkByUrl":["(http://www\\.xxgame\\.net/chinese/?)(?:\\?page=|$)(\\d*)","$1?page={($2.0||1)+1}"]
  }
]
```

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
The time to wait for page ready when you are sure the url match the site, you can also use a js code which return a boolean to check if the page is ready instead

type
--
0 means xpath, 1 or undefined means css selector

action
--
0 means load url and insert with static html, 1 means load by iframe so that dynamic js code on page may effect, 2 means force insert iframe to bottom

nextLink
--
Selector of next page link, disable when set to 0

nextLinkByUrl
--
If there is no next element, you can use this to generate a href from current url, [0] means RegExp string, [1] means replace string, you can use {} to eval simple code

nextLinkByJs `(doc)`
--
Use this to eval js code and return target url of next page with doc (document of every page loaded)

pageElement
--
Selector of main content which need to insert

pageElementByJs `(over)`
--
Use this to eval js code and create the elements whatever you want to insert, a over(eles) is needed to callback with elements array for insert

lazyImgSrc
--
The attr of image which target to real src

css
--
Add css so you can show some hidden element

insert
--
Which position you want to insert

insertPos
--
1 means insert before, 2 means just append to the bottom of target

init `(document)`
--
The js code to run only once with current main page with document:(document of main page)

pagePre `(response)`
--
The js code to run after get response from URL of next link, you can modify the response content and return it

pageInit `(doc, eles)`
--
The js code to run with every page inserted with doc:(document of every page loaded) and eles:(elements found with rule), run before inserted, you can trigger event like onView()

pageAction `(doc, eles)`
--
The js code to run with every page inserted with doc:(document of every page loaded) and eles:(elements found with rule), run after inserted, you can add functions like click()

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
Point the page number with $p in current url, you can use{} to eval result string from page number

pageBar `(pageBar)`
--
The js code to change pageBar

pageBarText
--
Set to 1 so the document title of next page will be shown on pagebar

autoClick
--
The css selector or xpath of element which you want to click automatically