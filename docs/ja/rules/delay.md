# delay
>次の処理を遅延させる JavaScript。true を返すまで進みません。遅延ロード要素の完全読み込み待ちに使えます。

例：
--
```json
"delay": "return document.querySelector('#feed_pagenation>li.cur').innerText>=curpage"
```

*次ページの内容が一度に揃わない場合（スクロールでロードされる場合など）、この項目で完全読み込みを判定します。チェックは下部スクロール後に行われます。*
