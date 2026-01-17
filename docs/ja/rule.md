# 高度なカスタマイズ
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

[![discord](/img/discord.png) Discord](https://discord.com/invite/keqypXC6wD "Discordグループに参加してください") [![github](/img/github.png) Github](https://github.com/hoothin/UserScripts "私たちの Github にスターを付けてください") [![twitter](/img/twitter.png) Twitter](https://twitter.com/intent/follow?screen_name=HoothinDev "Twitterで私をフォローしてください")

<div id="jsoneditor"></div>

<table>
    <tr>
        <th colspan="5">Pagetualが役に立ったと感じ、余裕があれば、その開発資金を支援するための寄付をいただけると大変ありがたいです。もし難しければ、気にせず楽しんでください！💞</th>
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

[その他のルールの例](https://github.com/hoothin/UserScripts/blob/master/Pagetual/pagetualRules.json)

## name

対象サイトの名前

```json
"name": "Site name"
```

## author

このルールの作成者

```json
"author": "Hoothin"
```

## example

このルールのURLの例

```json
"example": "https://abc.com"
```

## [url](rules/url)

対象サイトのURLの正規表現

```json
"url": "^https://abc\\.com/\\d+"
```

## [pinUrl](rules/pinUrl)

次へのリンクやページ要素が存在しない場合があるため、これをtrueに設定すると、要素をインテリジェントなルールで探すのではなく、URLだけでルールを固定できます。

```json
"pinUrl": true
```

## [enable](rules/enable)

0はすべて一致したときにアクションを停止することを意味します。

```json
"enable": 0
```

## [include](rules/include)

含める必要がある要素のセレクターまたはxpath

```json
"include": "div.content"
```

## [exclude](rules/exclude)

含めてはならない要素のセレクターまたはxpath

```json
"exclude": "div.content"
```

## [wait](rules/wait)

URLがサイトと一致することが確実な場合に、ページが準備できるまで待つ時間。ページが準備できたかどうかをチェックするために、booleanを返すJavaScriptコードも使用できます。

```json
"wait": 500
"wait": "let img=doc.querySelector('ul.list img');return img!=null"
```

## [waitElement](rules/waitElement)

"存在する必要がある要素のセレクターまたはxpath（遅延読み込み要素用）"と "存在してはならない要素のセレクターまたはxpath（スクロールして読み込む必要があるローディングプレースホルダー用）"を含む配列["exist", "not exist"]

```json
"waitElement": [
    ".summary",
    "#popular.fade:not(.in)"
]
```

## [action](rules/action)

0はURLを読み込んで静的HTMLで挿入することを意味し、1は動的なJavaScriptコードがページに影響を与えるようにiframeで読み込むことを意味し、2は強制的にiframeを最下部に挿入することを意味します。

```json
"action": 1
```

## [nextLink](rules/nextLink)

次のページへのリンクのセレクターまたはxpath。0に設定すると無効になります。複数の次のリンクを含む配列にすることもできます。

```json
"nextLink": ".page-next>a"
"nextLink": [
    ".page1-next>a",
    ".page2-next>a",
    ".page3-next>a"
]
```

## [nextLinkByUrl](rules/nextLinkByUrl)

次の要素がない場合、これを使用して現在のURLからhrefを生成できます。[0]は正規表現文字列、[1]は置換文字列、[2]は含める必要がある要素のセレクターまたはxpath、[3]は含めてはならない要素のセレクターまたはxpathを意味します。簡単なコードを評価するために{}を使用できます。

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

これを使用してJavaScriptコードを評価し、doc（読み込まれた各ページのドキュメント）で次のページのターゲットURLを返します。

```json
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\\((\\d+)'\\);/,'$1_.html');"
```

## [stopSign](rules/stopSign)

このサインに一致した場合、次のページの読み込みを停止します。

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

挿入する必要がある主要なコンテンツのセレクターまたはxpath。複数のページ要素を含む配列にすることもできます。

```json
"pageElement": ".Context>.Article"
```

## [pageElementByJs `(over)`](rules/pageElementByJs)

これを使用してJavaScriptコードを評価し、挿入したい要素を何でも作成します。挿入する要素の配列をコールバックするためにover(eles)が必要です。

```json
"pageElementByJs": "let src=match[1]+match[3];img.onload=()=>{over([img])};img.onerror=e=>{over()};img.src=src;"
```

## [replaceElement](rules/replaceElement)

新しい要素に置き換えたい要素のセレクターまたはxpath。配列にすることもできます。

```json
"replaceElement": "#page"
"replaceElement": ["#page1", "#page2"]
```

## [lazyImgSrc](rules/lazyImgSrc)

実際のsrcを対象とする画像の属性。画像のプロパティを削除するために["lazysrc", "removeProp1,removeProp2"]で設定できます。

```json
"lazyImgSrc": "data-cfsrc"
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```

## [css](rules/css)

隠された要素を表示できるようにCSSを追加します。"inIframe:"で始まると、このCSSは次のiframeページでのみ効果を発揮します。

```json
"css": ".card-lazy{display:none}"
```

## [insert](rules/insert)

挿入したい位置。複数の位置を含む配列にすることもできます。

```json
"insert": "ul#feed-main"
```

## [insertPos](rules/insertPos)

1は前に挿入することを意味し、2はターゲットの最下部に単に追加することを意味します。

```json
"insertPos": 2
```

## [iframeInit `(win, iframe)`](rules/iframeInit)

iframe内のどのコードよりも速く実行されるJavaScriptコード。

```json
"iframeInit": "win.self=win.top;"
```

## [init `(doc, win, iframe, click, enter, input)`](rules/init)

現在のメインページまたは各iframeで一度だけ実行されるJavaScriptコード。docはメインページまたはiframeのドキュメントです。

```json
"init": "if(doc)doc.querySelector('[data-title=sh]').click();"
```

## [pagePre `(response)`](rules/pagePre)

次のリンクのURLからレスポンスを取得した後に実行されるJavaScriptコード。レスポンスの内容を変更して返すことができます。

```json
"pagePre": "return decodeURI(response).replace(/[\\\\]/g,'')"
```

## [pageInit `(doc, eles)`](rules/pageInit)

doc（読み込まれた各ページのドキュメント）とeles（ルールで見つかった要素）で挿入された各ページで実行されるJavaScriptコード。挿入前に実行されます。onView()のようなイベントをトリガーできます。

```json
"pageInit": "let ops=doc.querySelectorAll('op');[].forEach.call(ops,op=>{img.src=op.value;imgCon.appendChild(img)})"
```

## [pageAction `(doc, eles)`](rules/pageAction)

doc（読み込まれた各ページのドキュメント）とeles（ルールで見つかった要素）で挿入された各ページで実行されるJavaScriptコード。挿入後に実行されます。click()のような機能を追加できます。

```json
"pageAction": "let j=document.querySelector('.lazy');eles.forEach(i=>{i.src=i.dataset.srcset;})"
```

## [filter](rules/filter)

次のページから挿入された要素をフィルタリングします。

```json
"filter": {
    "count": 20,
    "words": "spams\\d",
    "link": "^https://spams\\.xxx",
    "selector": "div#spam"
}
```

## [loadMore](rules/loadMore)

「もっと読み込む」ボタンのセレクター

```json
"loadMore": ".loadMore"
```

## [sleep](rules/sleep)

サイトが時間間隔によって制限されている場合に、次のページを読み込む際の待機時間（ミリ秒）

```json
"sleep": 1000
```

## [rate](rules/rate)

ページによっては次のページの読み込みが遅い場合、2または3に設定できるmulti-windowHeight

```json
"rate": 3
```

## [autoLoadNum](rules/autoLoadNum)

ページを開いた後に自動でページをめくるページ数

```json
"autoLoadNum": 5
```

## [listenHashChange](rules/listenHashChange)

これをtrueに設定すると、ハッシュが変更されたときにpagetualが再起動します。

```json
"listenHashChange": true
```

## [refreshByClick](rules/refreshByClick)

サイトが送信ボタンをクリックしてもURLを変更せずにコンテンツをリロードする場合。これをターゲットボタンのセレクターに設定すると、クリック後にpagetualがリセットされます。

```json
"refreshByClick": "#sreach"
```

## [pageNum](rules/pageNum)

現在のURLでページ番号を$pで指定します。ページ番号から結果文字列を評価するために{}を使用できます。例：{$p\*25+1}

```json
"pageNum": "&start={15*($p-1)}"
```

## [pageBar `(pageBar)`](rules/pageBar)

ページバーを変更するためのJavaScriptコード。0は非表示を意味します。

```json
"pageBar": "pageBar.classList.add('j_thread_list');"
```

## [pageBarText](rules/pageBarText)

1に設定すると、次のページのドキュメントタイトルがページバーに表示されます。

```json
"pageBarText": 1
```

## [autoClick](rules/autoClick)

自動的にクリックしたい要素のCSSセレクターまたはxpath

```json
"autoClick": "#btn-sky"
```

## [history](rules/history)

0に設定すると、履歴の書き込みが無効になります。1に設定すると、履歴の書き込みが有効になります。2に設定すると、スプライシング直後に履歴の書き込みが実行されます。一般的なオプションの値に関係なく。

```json
"history": 1
```

## [lockScroll](rules/lockScroll)

次のページに移動したときにページが自動スクロールしないようにしたい場合は、trueに設定します。

```json
"lockScroll": true
```

## [wheel](rules/wheel)

マウスホイールが回転したときにのみ次のページのアクションが有効になるようにする場合は、trueに設定します。

```json
"wheel": true
```

## [fitWidth](rules/fitWidth)

pageElementが間違った小さな幅を取得している場合は、falseに設定します。

```json
"fitWidth": false
```

## [delay](rules/delay)

trueを返すまで次のアクションを遅延させるJavaScriptコード。このプロパティを使用して、遅延読み込みのある完全なページ要素を取得します。

```json
"delay": "return document.querySelector('#feed_pagenation>li.cur').innerText>=curpage"
```

## [manualMode](rules/manualMode)

手動モードを有効にするにはtrueに設定します。ページングは停止し、右矢印（または「pagetual.next」イベント）が次のリンクをクリックするようにバインドされます。

```json
"manualMode": true
```

## [openInNewTab](rules/openInNewTab)

すべてのリンクを新しいタブで開くようにするにはtrueに設定し、現在のタブで開くようにするにはfalseに設定します。

```json
"openInNewTab": true
```

## [pageElementCss](rules/pageElementCss)

各ページ要素に設定したいスタイルCSS。

```json
"pageElementCss": "color: red"
```

## [initRun](rules/initRun)

初期化後すぐに実行します。

```json
"initRun": true
```

## [sideController](rules/sideController)

サイドコントローラーのツールバーを表示または非表示にします。

```json
"sideController": true
```

## [listenUrlChange](rules/listenUrlChange)

URLが変更された後にスクリプトを更新します。

```json
"listenUrlChange": false
```

## [clickMode](rules/clickMode)

ページめくりを停止し、最下部までスクロールした後に次のリンクをクリックします。

```json
"clickMode": true
```

## [preloadImages(doc)](rules/preloadImages)

ページを分析し、プリロードする必要がある画像のURLの配列を返します。

```json
"preloadImages": "return ['1.jpg']"
```

## [child script](rules/child-script)

サイトがコードの評価にいくつかの制限を設けている場合。`window`オブジェクトの下に関数を持つ子スクリプトを作成できます。それらの名前は`pagetual`をキャメルケースで始める必要があります。例：`window.pagetualWait`、`window.pagetualNextLinkByJs`、`window.pagetualPageInit`、`window.pagetualPageAction`、`window.pagetualInit`、`window.pagetualPageBarText`。