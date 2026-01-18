# pageElementByJs (over, pageNum)
>JavaScript を実行して挿入する要素を作成します。`over(eles)` を呼び出して要素配列を返す必要があります。`pageNum` は現在のページ番号です。

例：
--
```json
"pageElementByJs": "fetch(url.replace(/&offset=\\d+/,'') + '&offset=' + (pageNum + 1), {headers:{'X-Requested-With': 'XMLHttpRequest'}}).then(res => res.json()).then(res => {over(eles)})"
```
>要素を作成し、読み込み後に `over` で返します。

*現在ページに nextLink がない場合、ここで挿入要素を生成できます。*
