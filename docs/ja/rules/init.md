# init (doc, win, iframe, click, enter, input, sleep)
>一度だけ実行される JavaScript。メインページまたはミラー iframe に対して動作します。1回だけ必要な処理や、メインページの状態を iframe に反映したい場合に使います。

例：
--
```json
"init": "if (iframe == null) return; await click('#btn'); await input('#input', 'here you are'); await enter('#input');"
```
>ミラー iframe で内容を抽出する際、`#btn` をクリックし、`#input` に `here you are` を入力し、最後に Enter を送信します。

*このコードは一度だけ実行されます。*
