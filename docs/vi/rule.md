# Quy tắc nâng cao

<ScriptNotice>

**Chưa phát hiện Pagetual chạy trên trang này.** Hãy [cài đặt và bật script](install.html), hoặc làm theo [hướng dẫn của Tampermonkey](https://www.tampermonkey.net/faq.php?q=Q209) để cho phép chạy userscript, rồi tải lại trang. Thông báo này sẽ tự động biến mất khi script chạy.

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

[![discord](/img/discord.png) Discord](https://discord.com/invite/keqypXC6wD "Join our Discord") [![github](/img/github.png) Github](https://github.com/hoothin/UserScripts "Star our Github") [![twitter](/img/twitter.png) Twitter](https://twitter.com/intent/follow?screen_name=HoothinDev "Follow me on twitter") <a href="mailto:rixixi@gmail.com" title="If you require website/game/app outsourcing services, please feel free to send your project requirements to my email." target="_blank" rel="noopener noreferrer"><svg width=32 viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M511.693598 511.692984m-511.692984 0a511.692984 511.692984 0 1 0 1023.385968 0 511.692984 511.692984 0 1 0-1023.385968 0Z" fill="#cccccc"></path><path d="M474.791324 739.496654c-7.545425-10.355643-15.090849-20.715379-23.19709-31.837537-35.841023 13.953868-45.806756 8.215743-50.101907-31.75055-28.079664 7.637529-46.576342 8.9403-51.145761-37.83765-6.172041 1.373384-12.918201 5.035059-18.314515 3.604366-9.803014-2.602471-22.433644-5.90596-27.121775-13.243638-4.687108-7.318233-5.510933-24.423106-0.379676-29.478633 26.591661-26.201751 19.320504-47.441103-3.613576-70.701643-4.882574-4.950118-2.401887-17.160136-3.314747-26.023682 2.304665-0.708183 4.610354-1.414319 6.912972-2.120455 9.812225 12.069814 18.874307 24.878513 29.748807 35.899356 5.641927 5.724821 14.298749 11.196866 21.930138 11.705489 19.24375 1.281279 28.162558 11.08634 28.52279 28.947495 0.261987 13.047148 6.048211 16.188943 18.130306 19.222259 9.3998 2.364022 20.08395 11.791453 24.007611 20.782922 5.31649 12.184433 11.434291 17.482502 24.272669 20.384825 8.42349 1.905545 15.713068 10.476402 22.606596 17.015839 6.718529 6.370578 11.702419 14.594507 18.523286 20.827951 7.369402 6.747184 15.715115 12.549782 24.135535 17.975775 6.27745 4.043398 13.208843 9.039568 20.118744 9.489858 5.44032 0.357162 13.091153-4.374975 16.265697-9.167492 1.781715-2.688435-2.091801-11.756658-5.916194-15.051961-13.071709-11.264409-27.61607-20.821811-40.762487-32.008443-3.453928-2.935071-3.882726-9.423338-5.70026-14.280327 5.278625 0.277338 11.833412-1.36622 15.627104 1.153356 23.995331 15.924909 47.493296 32.613264 70.923718 49.373256 10.967627 7.841183 22.309814 12.676682 31.763854-0.367396 9.533864-13.154603 3.393548-23.733344-8.729483-32.328763-24.5541-17.401655-49.140947-34.791029-72.950022-53.172064-4.757721-3.676002-6.095287-11.777126-9.010913-17.840688 6.194555 1.086836 13.615127 0.355115 18.371825 3.562406 28.12981 18.969482 55.638425 38.855918 83.34967 58.436363 3.138725 2.215631 6.161807 4.611377 9.40287 6.658149 10.144825 6.4197 20.578245 8.991469 28.810362-2.274987 8.425537-11.53356 4.815031-21.768443-6.085053-29.762111-32.5273-23.863314-65.140564-47.613032-97.714939-71.410849-3.617669-2.640336-8.098053-4.700412-10.543946-8.173784-2.174695-3.090626-2.081567-7.778757-2.988287-11.762799 3.57264-0.797218 7.624225-3.055831 10.606372-2.071333 5.304209 1.75306 10.194971 5.134327 14.847284 8.42042 32.92949 23.299428 65.871261 46.582483 98.548999 70.225769 12.753436 9.221731 25.091377 13.703138 37.285021 0.020467 10.450818-11.731073 8.634307-25.243862-6.188415-38.289986-54.305976-47.821803-108.712245-95.544337-163.635323-142.664097-21.899436-18.78732-52.986832-8.809306-60.854623 19.171089-7.366332 26.182307-22.498117 44.937901-49.021212 51.281871-9.610618 2.298525-21.448123-0.436986-31.033156-4.102754-4.524389-1.730546-9.307695-11.54277-8.515594-16.881775 2.974983-19.956026 7.783874-39.678721 12.755482-59.278609 2.930977-11.54584 7.46253-22.688467 12.1742-36.693504h-54.849395c1.989462-19.605005 10.745553-26.648971 28.12367-25.008483 12.701243 1.197362 25.770905 1.546336 38.373904-0.076754 19.260124-2.477617 39.035011-4.771025 57.199088-11.110901 31.636954-11.051545 62.484877-10.102866 94.197562-2.069287 20.980436 5.312397 42.45312 8.717202 63.405924 14.128867 5.747336 1.488003 12.718641 5.983738 15.234124 11.041311 25.094447 50.373104 49.463314 101.110534 73.704257 151.903226 2.025281 4.250122 3.975854 11.137509 1.983322 14.257813-10.658565 16.690402-6.115755 31.706544 0.530114 48.484957 7.997761 20.192429-4.501875 43.16028-26.569146 49.577934-11.407683 3.319864-15.94947 8.690594-18.809834 19.70018-6.012393 23.137733-25.320616 28.153348-45.704418 29.481703-13.205773 33.931385-26.162862 39.823018-60.887371 29.867519-4.384185-1.254671-10.479472 2.580979-15.524765 4.677897-11.335023 4.710646-24.388311 16.162335-33.363406 13.500508-21.933208-6.506688-32.837386 4.402606-44.458957 18.061739h-15.387631z m-169.206636-453.785713c12.220252 6.705225 24.315651 13.649922 36.697597 20.039944 10.348479 5.342075 13.442175 12.308263 8.15741 23.279984-28.717234 59.657262-57.196018 119.428119-85.72802 179.168276-5.543682 11.611337-14.465561 13.902698-25.22851 8.315011-14.068487-7.309023-27.73376-15.390702-41.575055-23.13671v-11.539701c17.156042-33.092209 34.485037-66.098453 51.412864-99.30528 16.40283-32.166044 32.396306-64.537789 48.571945-96.821524h7.691769z m419.177869 0c6.312245 10.208275 13.425801 20.004126 18.7996 30.681112 26.138301 51.942978 51.350438 104.359784 77.90935 156.083758 8.509454 16.571689 5.122047 25.126172-11.520255 32.699228-40.448307 18.411737-40.226232 18.966412-60.021587-21.418445-24.471205-49.915651-48.638465-99.984809-73.492417-149.71011-7.12072-14.234275-5.965317-23.619748 9.732401-30.499972 10.82026-4.750558 20.635555-11.803734 30.898069-17.835571h7.694839z m0 0" fill="#040000"></path></svg> Outsource<span><svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg><span class="external-link-icon-sr-only">open in new window</span></span></a>

<div id="jsoneditor"></div>

<table>
    <tr>
        <th colspan="5">Nếu bạn thấy Pagetual hữu ích và có thể, hãy ủng hộ để giúp tài trợ cho việc phát triển. Nếu không, không sao cả – hãy tận hưởng!💞</th>
    </tr>
    <tr>
        <th><a href="https://paypal.me/hoothin"><img src="https://www.paypal.me/favicon.ico"><br>PayPal</a></th>
        <th><a href="https://ko-fi.com/hoothin"><img src="https://ko-fi.com/favicon-32x32.png"><br>Ko-fi</a></th>
        <th><a href="https://afdian.com/@hoothin"><img src="https://static.afdiancdn.com/favicon.ico"><br>愛發電</a></th>
    </tr>
    <tr>
        <th colspan="3"><a href="https://discord.com/invite/keqypXC6wD">Join 💬Discord</a></th>
    </tr>
    <tr>
        <th colspan="3"><a href="https://twitter.com/intent/follow?screen_name=HoothinDev">Follow 🕊️twitter</a></th>
    </tr>
    <tr>
        <th colspan="3"><a href="mailto:rixixi@gmail.com">Send 📧E-Mail</a></th>
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

[Xem thêm ví dụ về quy tắc](https://github.com/hoothin/UserScripts/blob/master/Pagetual/pagetualRules.json)

## name

Tên của trang web mục tiêu

```json
"name": "Site name"
```

## author

Tác giả của quy tắc này

```json
"author": "Hoothin"
```

## example

URL ví dụ của quy tắc này

```json
"example": "https://abc.com"
```

## [url](rules/url)

Biểu thức chính quy (RegExp) cho URL của trang web mục tiêu

```json
"url": "^https://abc\\.com/\\d+"
```

## [pinUrl](rules/pinUrl)

Đôi khi liên kết tiếp theo hoặc phần tử trang không tồn tại, hãy đặt giá trị này là true để bạn có thể ghim quy tắc chỉ bằng URL thay vì tìm các phần tử bằng các quy tắc thông minh

```json
"pinUrl": true
```

## [enable](rules/enable)

0 có nghĩa là dừng hành động khi tất cả đã khớp

```json
"enable": 0
```

## [include](rules/include)

Bộ chọn (Selector) hoặc xpath của phần tử phải bao gồm

```json
"include": "div.content"
```

## [exclude](rules/exclude)

Bộ chọn (Selector) hoặc xpath của phần tử không được bao gồm

```json
"exclude": "div.content"
```

## [wait](rules/wait)

Thời gian chờ trang sẵn sàng khi bạn chắc chắn URL khớp với trang web, bạn cũng có thể sử dụng mã JavaScript trả về giá trị boolean để kiểm tra xem trang đã sẵn sàng chưa

```json
"wait": 500
"wait": "let img=doc.querySelector('ul.list img');return img!=null"
```

## [waitElement](rules/waitElement)

Mảng ["tồn tại", "không tồn tại"] chứa "bộ chọn hoặc xpath của phần tử phải tồn tại (đối với một số phần tử lazyload)" & "bộ chọn hoặc xpath của phần tử không được tồn tại (đối với một số placeholder đang tải cần cuộn vào chế độ xem để tải)"

```json
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```

## [action](rules/action)

0 có nghĩa là tải URL và chèn bằng HTML tĩnh, 1 có nghĩa là tải bằng iframe để mã JavaScript động trên trang có thể có hiệu lực, 2 có nghĩa là buộc chèn iframe vào cuối

```json
"action": 1
```

## [nextLink](rules/nextLink)

Bộ chọn (Selector) hoặc xpath của liên kết trang tiếp theo, tắt khi đặt thành 0, bạn có thể đặt nó thành một mảng để chứa nhiều liên kết tiếp theo.

```json
"nextLink": ".page-next>a"
"nextLink": [
    ".page1-next>a",
    ".page2-next>a",
    ".page3-next>a"
]
```

## [nextLinkByUrl](rules/nextLinkByUrl)

Nếu không có phần tử tiếp theo, bạn có thể sử dụng cái này để tạo một href từ URL hiện tại, [0] có nghĩa là chuỗi RegExp, [1] có nghĩa là chuỗi thay thế, [2] có nghĩa là bộ chọn hoặc xpath của phần tử phải bao gồm, [3] có nghĩa là bộ chọn hoặc xpath của phần tử không được bao gồm, bạn có thể sử dụng {} để đánh giá mã đơn giản

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

Sử dụng cái này để đánh giá mã JavaScript và trả về URL mục tiêu của trang tiếp theo với doc (tài liệu của mỗi trang đã tải)

```json
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\\((\\d+)'\\);/,'$1_.html');"
```

## [stopSign](rules/stopSign)

Dừng tải trang tiếp theo khi khớp với dấu hiệu này

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

Bộ chọn (Selector) hoặc xpath của nội dung chính cần chèn, bạn có thể đặt nó thành một mảng để chứa nhiều phần tử trang.

```json
"pageElement": ".Context>.Article"
```

## [pageElementByJs `(over)`](rules/pageElementByJs)

Sử dụng cái này để đánh giá mã JavaScript và tạo các phần tử bạn muốn chèn, cần có over(eles) để gọi lại với mảng các phần tử để chèn

```json
"pageElementByJs": "let src=match[1]+match[3];img.onload=()=>{over([img])};img.onerror=e=>{over()};img.src=src;"
```

## [replaceElement](rules/replaceElement)

Bộ chọn (Selector) hoặc xpath của phần tử bạn muốn thay thế bằng cái mới, có thể là một mảng

```json
"replaceElement": "#page"
"replaceElement": ["#page1", "#page2"]
```

## [lazyImgSrc](rules/lazyImgSrc)

Thuộc tính của hình ảnh mà mục tiêu là src thật, có thể được đặt bằng ["lazysrc", "removeProp1,removeProp2"] để xóa các thuộc tính của hình ảnh

```json
"lazyImgSrc": "data-cfsrc"
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```

## [css](rules/css)

Thêm css để bạn có thể hiển thị một số phần tử bị ẩn, bắt đầu với "inIframe:" thì css này sẽ chỉ có hiệu lực trong trang iframe tiếp theo

```json
"css": ".card-lazy{display:none}"
```

## [insert](rules/insert)

Vị trí bạn muốn chèn, bạn có thể đặt nó thành một mảng để chứa nhiều vị trí.

```json
"insert": "ul#feed-main"
```

## [insertPos](rules/insertPos)

1 có nghĩa là chèn trước, 2 có nghĩa là chỉ thêm vào cuối của mục tiêu

```json
"insertPos": 2
```

## [iframeInit `(win, iframe)`](rules/iframeInit)

Mã JavaScript để chạy nhanh nhất có thể trước khi bất kỳ mã nào trong iframe đang chạy.

```json
"iframeInit": "win.self=win.top;"
```

## [init `(doc, win, iframe, click, enter, input)`](rules/init)

Mã JavaScript để chỉ chạy một lần với trang chính hiện tại hoặc mỗi iframe với doc:(tài liệu của trang chính hoặc iframe)

```json
"init": "if(doc)doc.querySelector('[data-title=sh]').click();"
```

## [pagePre `(response)`](rules/pagePre)

Mã JavaScript để chạy sau khi nhận phản hồi từ URL của liên kết tiếp theo, bạn có thể sửa đổi nội dung phản hồi và trả về nó

```json
"pagePre": "return decodeURI(response).replace(/[\\\\]/g,'')"
```

## [pageInit `(doc, eles)`](rules/pageInit)

Mã JavaScript để chạy với mỗi trang được chèn với doc:(tài liệu của mỗi trang đã tải) và eles:(các phần tử được tìm thấy bằng quy tắc), chạy trước khi chèn, bạn có thể kích hoạt sự kiện như onView()

```json
"pageInit": "let ops=doc.querySelectorAll('op');[].forEach.call(ops,op=>{img.src=op.value;imgCon.appendChild(img)})"
```

## [pageAction `(doc, eles)`](rules/pageAction)

Mã JavaScript để chạy với mỗi trang được chèn với doc:(tài liệu của mỗi trang đã tải) và eles:(các phần tử được tìm thấy bằng quy tắc), chạy sau khi chèn, bạn có thể thêm các chức năng như click()

```json
"pageAction": "let j=document.querySelector('.lazy');eles.forEach(i=>{i.src=i.dataset.srcset;})"
```

## [filter](rules/filter)

Lọc các phần tử được chèn từ trang tiếp theo.

```json
"filter": {
    "count": 20,
    "words": "spams\\d",
    "link": "^https://spams\\.xxx",
    "selector": "div#spam"
}
```

## [loadMore](rules/loadMore)

Bộ chọn (Selector) của nút "tải thêm"

```json
"loadMore": ".loadMore"
```

## [sleep](rules/sleep)

Thời gian ngủ (ms) khi tải trang tiếp theo nếu trang web bị giới hạn bởi khoảng thời gian

```json
"sleep": 1000
```

## [rate](rules/rate)

Multi-windowHeight mà bạn có thể đặt thành 2 hoặc 3 trong khi một số trang web tải trang tiếp theo chậm

```json
"rate": 3
```

## [autoLoadNum](rules/autoLoadNum)

Số lượng trang để tự động chuyển sau khi mở trang

```json
"autoLoadNum": 5
```

## [listenHashChange](rules/listenHashChange)

Đặt giá trị này là true để pagetual sẽ khởi động lại khi hash thay đổi

```json
"listenHashChange": true
```

## [refreshByClick](rules/refreshByClick)

Nếu trang web tải lại nội dung mà không thay đổi URL khi nhấp vào nút gửi. Đặt giá trị này bằng bộ chọn của nút mục tiêu, pagetual sẽ đặt lại sau khi nhấp vào nó.

```json
"refreshByClick": "#sreach"
```

## [pageNum](rules/pageNum)

Chỉ số trang bằng $p trong URL hiện tại, bạn có thể sử dụng {} để đánh giá chuỗi kết quả từ số trang, như {$p\*25+1}

```json
"pageNum": "&start={15*($p-1)}"
```

## [pageBar `(pageBar)`](rules/pageBar)

Mã JavaScript để thay đổi pageBar, 0 có nghĩa là ẩn

```json
"pageBar": "pageBar.classList.add('j_thread_list');"
```

## [pageBarText](rules/pageBarText)

Đặt thành 1 để tiêu đề tài liệu của trang tiếp theo sẽ được hiển thị trên thanh trang

```json
"pageBarText": 1
```

## [autoClick](rules/autoClick)

Bộ chọn css hoặc xpath của phần tử mà bạn muốn tự động nhấp

```json
"autoClick": "#btn-sky"
```

## [history](rules/history)

Đặt thành 0 thì việc ghi lịch sử sẽ bị tắt. Đặt thành 1 thì việc ghi lịch sử sẽ được bật. Đặt thành 2 thì việc ghi lịch sử sẽ hoạt động ngay lập tức sau khi nối. Bất kể giá trị nào là tùy chọn chung.

```json
"history": 1
```

## [lockScroll](rules/lockScroll)

Đặt thành true nếu bạn không muốn trang tự động cuộn khi điều hướng đến trang tiếp theo

```json
"lockScroll": true
```

## [wheel](rules/wheel)

Đặt thành true để hành động trang tiếp theo chỉ có hiệu lực khi cuộn chuột

```json
"wheel": true
```

## [fitWidth](rules/fitWidth)

Đặt thành false nếu bạn thấy pageElement có chiều rộng nhỏ sai

```json
"fitWidth": false
```

## [delay](rules/delay)

Mã JavaScript để trì hoãn hành động tiếp theo cho đến khi trả về true, sử dụng thuộc tính này để có được các phần tử trang hoàn chỉnh với lazy load.

```json
"delay": "return document.querySelector('#feed_pagenation>li.cur').innerText>=curpage"
```

## [manualMode](rules/manualMode)

Đặt thành true để bật chế độ thủ công, sau đó phân trang sẽ dừng, mũi tên phải (hoặc sự kiện 'pagetual.next') sẽ được liên kết để nhấp vào liên kết tiếp theo.

```json
"manualMode": true
```

## [openInNewTab](rules/openInNewTab)

Đặt thành true để tất cả các liên kết mở trong các tab mới, false để chúng mở trong cùng một tab.

```json
"openInNewTab": true
```

## [pageElementCss](rules/pageElementCss)

Kiểu css mà bạn muốn đặt cho mỗi phần tử trang.

```json
"pageElementCss": "color: red"
```

## [initRun](rules/initRun)

Chạy ngay lập tức khi khởi tạo.

```json
"initRun": true
```

## [sideController](rules/sideController)

Hiển thị hoặc ẩn thanh công cụ của sideController.

```json
"sideController": true
```

## [listenUrlChange](rules/listenUrlChange)

Làm mới script sau khi URL thay đổi.

```json
"listenUrlChange": false
```

## [clickMode](rules/clickMode)

Dừng chuyển trang và nhấp vào liên kết tiếp theo sau khi cuộn xuống cuối trang.

```json
"clickMode": true
```

## [preloadImages(doc)](rules/preloadImages)

Phân tích trang và trả về một mảng các URL hình ảnh cần được tải trước.

```json
"preloadImages": "return ['1.jpg']"
```

## [child script](rules/child-script)

Nếu trang web có một số giới hạn đối với việc đánh giá mã. Bạn có thể tạo một child script với hàm nằm trong đối tượng `window`. Bạn nên đặt tên chúng bắt đầu bằng `pagetual` sử dụng camelCase. Ví dụ: `window.pagetualWait`, `window.pagetualNextLinkByJs`, `window.pagetualPageInit`, `window.pagetualPageAction`, `window.pagetualInit`, `window.pagetualPageBarText`.
