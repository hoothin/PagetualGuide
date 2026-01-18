# pinUrl
>nextLink や pageElement が見つからない場合、true を設定すると url だけでルールを固定できます（自動判定を使いません）。

例：
--
```json
"pinUrl": true
```
>URL が指定した RegExp に一致すれば、要素が一致しなくてもルールが有効になります。

*例：スクロールやクリック後に nextLink が表示されるサイトでは true が有効です。*
