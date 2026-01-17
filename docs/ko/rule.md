# 고급 사용자 정의
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

[![discord](/img/discord.png) Discord](https://discord.com/invite/keqypXC6wD "Join our Discord") [![github](/img/github.png) Github](https://github.com/hoothin/UserScripts "Star our Github") [![twitter](/img/twitter.png) Twitter](https://twitter.com/intent/follow?screen_name=HoothinDev "Follow me on twitter") <a href="mailto:rixixi@gmail.com" title="If you require website/game/app outsourcing services, please feel free to send your project requirements to my email." target="_blank" rel="noopener noreferrer"><svg width=32 viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M511.693598 511.692984m-511.692984 0a511.692984 511.692984 0 1 0 1023.385968 0 511.692984 511.692984 0 1 0-1023.385968 0Z" fill="#cccccc"></path><path d="M474.791324 739.496654c-7.545425-10.355643-15.090849-20.715379-23.19709-31.837537-35.841023 13.953868-45.806756 8.215743-50.101907-31.75055-28.079664 7.637529-46.576342 8.9403-51.145761-37.83765-6.172041 1.373384-12.918201 5.035059-18.314515 3.604366-9.803014-2.602471-22.433644-5.90596-27.121775-13.243638-4.687108-7.318233-5.510933-24.423106-0.379676-29.478633 26.591661-26.201751 19.320504-47.441103-3.613576-70.701643-4.882574-4.950118-2.401887-17.160136-3.314747-26.023682 2.304665-0.708183 4.610354-1.414319 6.912972-2.120455 9.812225 12.069814 18.874307 24.878513 29.748807 35.899356 5.641927 5.724821 14.298749 11.196866 21.930138 11.705489 19.24375 1.281279 28.162558 11.08634 28.52279 28.947495 0.261987 13.047148 6.048211 16.188943 18.130306 19.222259 9.3998 2.364022 20.08395 11.791453 24.007611 20.782922 5.31649 12.184433 11.434291 17.482502 24.272669 20.384825 8.42349 1.905545 15.713068 10.476402 22.606596 17.015839 6.718529 6.370578 11.702419 14.594507 18.523286 20.827951 7.369402 6.747184 15.715115 12.549782 24.135535 17.975775 6.27745 4.043398 13.208843 9.039568 20.118744 9.489858 5.44032 0.357162 13.091153-4.374975 16.265697-9.167492 1.781715-2.688435-2.091801-11.756658-5.916194-15.051961-13.071709-11.264409-27.61607-20.821811-40.762487-32.008443-3.453928-2.935071-3.882726-9.423338-5.70026-14.280327 5.278625 0.277338 11.833412-1.36622 15.627104 1.153356 23.995331 15.924909 47.493296 32.613264 70.923718 49.373256 10.967627 7.841183 22.309814 12.676682 31.763854-0.367396 9.533864-13.154603 3.393548-23.733344-8.729483-32.328763-24.5541-17.401655-49.140947-34.791029-72.950022-53.172064-4.757721-3.676002-6.095287-11.777126-9.010913-17.840688 6.194555 1.086836 13.615127 0.355115 18.371825 3.562406 28.12981 18.969482 55.638425 38.855918 83.34967 58.436363 3.138725 2.215631 6.161807 4.611377 9.40287 6.658149 10.144825 6.4197 20.578245 8.991469 28.810362-2.274987 8.425537-11.53356 4.815031-21.768443-6.085053-29.762111-32.5273-23.863314-65.140564-47.613032-97.714939-71.410849-3.617669-2.640336-8.098053-4.700412-10.543946-8.173784-2.174695-3.090626-2.081567-7.778757-2.988287-11.762799 3.57264-0.797218 7.624225-3.055831 10.606372-2.071333 5.304209 1.75306 10.194971 5.134327 14.847284 8.42042 32.92949 23.299428 65.871261 46.582483 98.548999 70.225769 12.753436 9.221731 25.091377 13.703138 37.285021 0.020467 10.450818-11.731073 8.634307-25.243862-6.188415-38.289986-54.305976-47.821803-108.712245-95.544337-163.635323-142.664097-21.899436-18.78732-52.986832-8.809306-60.854623 19.171089-7.366332 26.182307-22.498117 44.937901-49.021212 51.281871-9.610618 2.298525-21.448123-0.436986-31.033156-4.102754-4.524389-1.730546-9.307695-11.54277-8.515594-16.881775 2.974983-19.956026 7.783874-39.678721 12.755482-59.278609 2.930977-11.54584 7.46253-22.688467 12.1742-36.693504h-54.849395c1.989462-19.605005 10.745553-26.648971 28.12367-25.008483 12.701243 1.197362 25.770905 1.546336 38.373904-0.076754 19.260124-2.477617 39.035011-4.771025 57.199088-11.110901 31.636954-11.051545 62.484877-10.102866 94.197562-2.069287 20.980436 5.312397 42.45312 8.717202 63.405924 14.128867 5.747336 1.488003 12.718641 5.983738 15.234124 11.041311 25.094447 50.373104 49.463314 101.110534 73.704257 151.903226 2.025281 4.250122 3.975854 11.137509 1.983322 14.257813-10.658565 16.690402-6.115755 31.706544 0.530114 48.484957 7.997761 20.192429-4.501875 43.16028-26.569146 49.577934-11.407683 3.319864-15.94947 8.690594-18.809834 19.70018-6.012393 23.137733-25.320616 28.153348-45.704418 29.481703-13.205773 33.931385-26.162862 39.823018-60.887371 29.867519-4.384185-1.254671-10.479472 2.580979-15.524765 4.677897-11.335023 4.710646-24.388311 16.162335-33.363406 13.500508-21.933208-6.506688-32.837386 4.402606-44.458957 18.061739h-15.387631z m-169.206636-453.785713c12.220252 6.705225 24.315651 13.649922 36.697597 20.039944 10.348479 5.342075 13.442175 12.308263 8.15741 23.279984-28.717234 59.657262-57.196018 119.428119-85.72802 179.168276-5.543682 11.611337-14.465561 13.902698-25.22851 8.315011-14.068487-7.309023-27.73376-15.390702-41.575055-23.13671v-11.539701c17.156042-33.092209 34.485037-66.098453 51.412864-99.30528 16.40283-32.166044 32.396306-64.537789 48.571945-96.821524h7.691769z m419.177869 0c6.312245 10.208275 13.425801 20.004126 18.7996 30.681112 26.138301 51.942978 51.350438 104.359784 77.90935 156.083758 8.509454 16.571689 5.122047 25.126172-11.520255 32.699228-40.448307 18.411737-40.226232 18.966412-60.021587-21.418445-24.471205-49.915651-48.638465-99.984809-73.492417-149.71011-7.12072-14.234275-5.965317-23.619748 9.732401-30.499972 10.82026-4.750558 20.635555-11.803734 30.898069-17.835571h7.694839z m0 0" fill="#040000"></path></svg> Outsource<span><svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg><span class="external-link-icon-sr-only">open in new window</span></span></a>

<div id="jsoneditor"></div>

<table>
    <tr>
        <th colspan="5">Pagetual이 유용하고 여유가 된다면, 개발 자금 지원을 위한 팁은 매우 감사할 것입니다. 그렇지 않다면 걱정 마세요 – 즐기세요!💞</th>
    </tr>
    <tr>
        <th><a href="https://paypal.me/hoothin"><img src="https://www.paypal.me/favicon.ico"><br>PayPal</a></th>
        <th><a href="https://ko-fi.com/hoothin"><img src="https://ko-fi.com/favicon-32x32.png"><br>Ko-fi</a></th>
        <th><a href="https://afdian.com/@hoothin"><img src="https://static.afdiancdn.com/favicon.ico"><br>愛發電</a></th>
    </tr>
    <tr>
        <th colspan="3"><a href="https://discord.com/invite/keqypXC6wD">Discord 참여하기</a></th>
    </tr>
    <tr>
        <th colspan="3"><a href="https://twitter.com/intent/follow?screen_name=HoothinDev">Twitter 팔로우하기</a></th>
    </tr>
    <tr>
        <th colspan="3"><a href="mailto:rixixi@gmail.com">이메일 보내기</a></th>
    </tr>
    <tr>
        <th colspan="3">Made with ❤️ by <a href="https://github.com/hoothin">Hoothin</a></th>
    </tr>
    <tr>
        <th colspan="5"><embed style="color-scheme: auto; margin: 20px 0; width: 100%;" wmode="transparent" id="sponsors" src="https://hoothin.com/pagetual/sponsors.svg"></th>
    </tr>
</table>

``` json
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

[More examples of rule](https://github.com/hoothin/UserScripts/blob/master/Pagetual/pagetualRules.json)

name
--
대상 사이트의 이름
```json
"name": "Site name"
```

author
--
이 규칙의 작성자
```json
"author": "Hoothin"
```

example
--
이 규칙의 예시 URL
```json
"example": "https://abc.com"
```

[url](rules/url)
--
대상 사이트 URL의 정규식
```json
"url": "^https://abc\\.com/\\d+"
```

[pinUrl](rules/pinUrl)
--
때때로 다음 링크나 페이지 요소가 존재하지 않을 수 있습니다. 이 값을 true로 설정하면 지능적인 규칙으로 요소를 찾는 대신 URL만으로 규칙을 고정할 수 있습니다.
```json
"pinUrl": true
```

[enable](rules/enable)
--
0은 모든 일치 시 작업을 중지함을 의미합니다.
```json
"enable": 0
```

[include](rules/include)
--
반드시 포함해야 하는 요소의 선택자 또는 xpath
```json
"include": "div.content"
```

[exclude](rules/exclude)
--
엘리먼트의 셀렉터 또는 XPath (포함해서는 안 되는)
```json
"exclude": "div.content"
```

[wait](rules/wait)
--
URL이 사이트와 일치한다고 확신할 때 페이지가 준비될 때까지 기다리는 시간입니다. 대신 페이지가 준비되었는지 확인하기 위해 부울을 반환하는 JavaScript 코드를 사용할 수도 있습니다.
```json
"wait": 500
"wait": "let img=doc.querySelector('ul.list img');return img!=null"
```

[waitElement](rules/waitElement)
--
배열["exist", "not exist"]에는 "존재해야 하는 요소의 선택자 또는 xpath (일부 지연 로드 요소의 경우)" 및 "존재하지 않아야 하는 요소의 선택자 또는 xpath (로드하기 위해 스크롤해야 하는 일부 로딩 플레이스홀더의 경우)"가 포함됩니다.
```json
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```

[action](rules/action)
--
0은 URL을 로드하고 정적 HTML로 삽입하는 것을 의미하고, 1은 페이지의 동적 JavaScript 코드가 영향을 미칠 수 있도록 iframe으로 로드하는 것을 의미하며, 2는 iframe을 하단에 강제로 삽입하는 것을 의미합니다.
```json
"action": 1
```

[nextLink](rules/nextLink)
--
다음 페이지 링크의 선택자 또는 xpath입니다. 0으로 설정하면 비활성화되며, 여러 개의 다음 링크를 포함하는 배열로 설정할 수 있습니다.
```json
"nextLink": ".page-next>a"
"nextLink": [
    ".page1-next>a",
    ".page2-next>a",
    ".page3-next>a"
]
```

[nextLinkByUrl](rules/nextLinkByUrl)
--
다음 요소가 없는 경우, 현재 URL에서 href를 생성하는 데 사용할 수 있습니다.은 정규식 문자열을 의미하고,은 대체 문자열을 의미하며,는 반드시 포함해야 하는 요소의 선택자 또는 xpath를 의미하고,은 반드시 포함하지 않아야 하는 요소의 선택자 또는 xpath를 의미합니다. 간단한 코드를 평가하기 위해 {}를 사용할 수 있습니다.
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

[nextLinkByJs `(doc)`](rules/nextLinkByJs)
--
이것을 사용하여 JavaScript 코드를 평가하고 다음 페이지의 대상 URL을 반환합니다.
```json
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\\((\\d+)'\\);/,'$1_.html');"
```

[stopSign](rules/stopSign)
--
이 표시에 일치하면 다음 페이지 로드를 중지합니다.
```json
"stopSign": ["#pagenum", ".disable",
    [
        "#pagenum",
        "(\\d+)"
    ],
    [
        "#pagenum",
        "\/(\\d+)"
    ]
]
```

[pageElement](rules/pageElement)
--
삽입해야 할 메인 콘텐츠의 선택자 또는 xpath입니다. 여러 페이지 요소를 포함하는 배열로 설정할 수 있습니다.
```json
"pageElement": ".Context>.Article"
```

[pageElementByJs `(over)`](rules/pageElementByJs)
--
이것을 사용하여 JavaScript 코드를 평가하고 삽입하려는 요소를 생성합니다. 삽입을 위해 요소 배열과 함께 콜백할 over(eles)가 필요합니다.
```json
"pageElementByJs": "let src=match[1]+match[3];img.onload=()=>{over([img])};img.onerror=e=>{over()};img.src=src;"
```

[replaceElement](rules/replaceElement)
--
새로운 요소로 교체하려는 요소의 선택자 또는 xpath입니다. 배열이 될 수 있습니다.
```json
"replaceElement": "#page"
"replaceElement": ["#page1", "#page2"]
```

[lazyImgSrc](rules/lazyImgSrc)
--
실제 src를 대상으로 하는 이미지의 속성입니다. 이미지의 속성을 제거하기 위해 ["lazysrc", "removeProp1,removeProp2"]로 설정할 수 있습니다.
```json
"lazyImgSrc": "data-cfsrc"
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```

[css](rules/css)
--
숨겨진 요소를 표시할 수 있도록 CSS를 추가합니다. "inIframe:"으로 시작하면 이 CSS는 다음 iframe 페이지에서만 적용됩니다.
```json
"css": ".card-lazy{display:none}"
```

[insert](rules/insert)
--
삽입하려는 위치입니다. 여러 위치를 포함하는 배열로 설정할 수 있습니다.
```json
"insert": "ul#feed-main"
```

[insertPos](rules/insertPos)
--
1은 이전에 삽입을 의미하고, 2는 대상의 맨 아래에 추가를 의미합니다.
```json
"insertPos": 2
```

[iframeInit `(win, iframe)`](rules/iframeInit)
--
iframe 내의 어떤 코드보다도 빠르게 실행되는 JavaScript 코드입니다.
```json
"iframeInit": "win.self=win.top;"
```

[init `(doc, win, iframe, click, enter, input)`](rules/init)
--
현재 메인 페이지 또는 모든 iframe에서 한 번만 실행되는 JavaScript 코드입니다. doc:(메인 페이지 또는 iframe의 문서)
```json
"init": "if(doc)doc.querySelector('[data-title=sh]').click();"
```

[pagePre `(response)`](rules/pagePre)
--
다음 링크의 URL에서 응답을 받은 후 실행되는 JavaScript 코드입니다. 응답 내용을 수정하여 반환할 수 있습니다.
```json
"pagePre": "return decodeURI(response).replace(/[\\]/g,'')"
```

[pageInit `(doc, eles)`](rules/pageInit)
--
삽입되는 모든 페이지에서 doc:(로드된 모든 페이지의 문서) 및 eles:(규칙으로 찾은 요소)와 함께 실행되는 JavaScript 코드입니다. 삽입되기 전에 실행되며, onView()와 같은 이벤트를 트리거할 수 있습니다.
```json
"pageInit": "let ops=doc.querySelectorAll('op');[].forEach.call(ops,op=>{img.src=op.value;imgCon.appendChild(img)})"
```

[pageAction `(doc, eles)`](rules/pageAction)
--
삽입되는 모든 페이지에서 doc:(로드된 모든 페이지의 문서) 및 eles:(규칙으로 찾은 요소)와 함께 실행되는 JavaScript 코드입니다. 삽입된 후에 실행되며, click()과 같은 함수를 추가할 수 있습니다.
```json
"pageAction": "let j=document.querySelector('.lazy');eles.forEach(i=>{i.src=i.dataset.srcset;})"
```

[filter](rules/filter)
--
다음 페이지에서 삽입된 요소를 필터링합니다.
```json
"filter": {
    "count": 20,
    "words": "spams\\d",
    "link": "^https://spams\\.xxx",
    "selector": "div#spam"
}
```

[loadMore](rules/loadMore)
--
"더 보기" 버튼의 선택자
```json
"loadMore": ".loadMore"
```

[sleep](rules/sleep)
--
사이트가 시간 간격에 의해 제한될 때 다음 페이지를 로드할 때의 대기 시간(ms)
```json
"sleep": 1000
```

[rate](rules/rate)
--
일부 사이트가 다음 페이지를 느리게 로드할 때 2 또는 3으로 설정할 수 있는 다중 windowHeight 값
```json
"rate": 3
```

[autoLoadNum](rules/autoLoadNum)
--
페이지를 연 후 자동 전환되는 페이지 수
```json
"autoLoadNum": 5
```

[listenHashChange](rules/listenHashChange)
--
해시가 변경될 때 pagetual이 다시 시작되도록 이 값을 true로 설정합니다.
```json
"listenHashChange": true
```

[refreshByClick](rules/refreshByClick)
--
제출 버튼을 클릭할 때 URL 변경 없이 사이트 콘텐츠가 다시 로드되는 경우. 대상 버튼의 선택자로 이 값을 설정하면, 클릭 후 pagetual이 재설정됩니다.
```json
"refreshByClick": "#sreach"
```

[pageNum](rules/pageNum)
--
현재 URL에서 $p로 페이지 번호를 지정합니다. {}를 사용하여 페이지 번호에서 결과 문자열을 평가할 수 있습니다. 예: {$p*25+1}
```json
"pageNum": "&start={15*($p-1)}"
```

[pageBar `(pageBar)`](rules/pageBar)
--
pageBar를 변경하는 JavaScript 코드, 0은 숨김을 의미합니다.
```json
"pageBar": "pageBar.classList.add('j_thread_list');"
```

[pageBarText](rules/pageBarText)
--
다음 페이지의 문서 제목이 페이지 바에 표시되도록 1로 설정합니다.
```json
"pageBarText": 1
```

[autoClick](rules/autoClick)
--
자동으로 클릭하려는 요소의 CSS 선택자 또는 XPath
```json
"autoClick": "#btn-sky"
```

[history](rules/history)
--
0으로 설정하면 기록 작성이 비활성화됩니다. 1로 설정하면 기록 작성이 활성화됩니다. 2로 설정하면 기록 작성이 스플라이싱 직후 즉시 실행됩니다. 일반 옵션의 값은 중요하지 않습니다.
```json
"history": 1
```

[lockScroll](rules/lockScroll)
--
다음 페이지로 이동할 때 페이지가 자동으로 스크롤되지 않도록 하려면 true로 설정합니다.
```json
"lockScroll": true
```

[wheel](rules/wheel)
--
다음 페이지 작업이 마우스 휠을 굴릴 때만 적용되도록 true로 설정합니다.
```json
"wheel": true
```

[fitWidth](rules/fitWidth)
--
pageElement가 잘못된 작은 너비를 얻는다고 생각되면 false로 설정합니다.
```json
"fitWidth": false
```

[delay](rules/delay)
--
true를 반환할 때까지 다음 작업을 지연시키는 JavaScript 코드입니다. 이 속성을 사용하여 지연 로딩으로 완전한 페이지 요소를 가져옵니다.
```json
"delay": "return document.querySelector('#feed_pagenation>li.cur').innerText>=curpage"
```

[manualMode](rules/manualMode)
--
수동 모드를 활성화하려면 true로 설정합니다. 그러면 페이징이 중지되고, 오른쪽 화살표(또는 'pagetual.next' 이벤트)가 다음 링크를 클릭하도록 바인딩됩니다.
```json
"manualMode": true
```

[openInNewTab](rules/openInNewTab)
--
모든 링크를 새 탭에서 열려면 true로 설정하고, 현재 탭에서 열려면 false로 설정합니다.
```json
"openInNewTab": true
```

[pageElementCss](rules/pageElementCss)
--
모든 페이지 요소에 설정하려는 스타일 CSS입니다.
```json
"pageElementCss": "color: red"
```

[initRun](rules/initRun)
--
초기화 시 즉시 실행합니다.
```json
"initRun": true
```

[sideController](rules/sideController)
--
sideController의 툴바를 표시하거나 숨깁니다.
```json
"sideController": true
```

[listenUrlChange](rules/listenUrlChange)
--
URL 변경 후 스크립트를 새로 고칩니다.
```json
"listenUrlChange": false
```

[clickMode](rules/clickMode)
--
하단으로 스크롤한 후 페이지 넘기기를 중지하고 다음 링크를 클릭합니다.
```json
"clickMode": true
```

[preloadImages(doc)](rules/preloadImages)
--
페이지를 분석하고 미리 로드해야 하는 이미지 URL 배열을 반환합니다.
```json
"preloadImages": "return ['1.jpg']"
```

[child script](rules/child-script)
--
사이트에 코드 평가 제한이 있는 경우 `window` 객체 아래에 함수가 있는 자식 스크립트를 만들 수 있습니다. `pagetual`로 시작하는 이름을 camelCase로 사용해야 합니다. 예: `window.pagetualWait`, `window.pagetualNextLinkByJs`, `window.pagetualPageInit`, `window.pagetualPageAction`, `window.pagetualInit`, `window.pagetualPageBarText`.

```