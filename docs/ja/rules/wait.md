# wait (doc)
>ページが準備完了になるまで待つ時間（ms）。URL が確実に一致する場合は、true/false を返す JavaScript を指定して判定できます。

例 1：
--
```json
"wait": 500
```
>500ms ごとにチェックして一致するまで待機します。

例 2：
--
```json
"wait": "await fetch('https://xxx.xxx');let img=doc.querySelector('ul.list img');return img!=null"
```
>コードが true を返すまで繰り返しチェックします。`doc` はサイトの document を意味し、この例では `ul.list img` の存在を確認しています。

*`wait` を設定すると、URL が一致したときにルールが有効になります。*
