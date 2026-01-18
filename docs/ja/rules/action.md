# action
>0 は URL を読み込んで静的 HTML として挿入、1 は iframe で読み込んでページ内の動的 JavaScript を実行、2 は完全な iframe をページ下部に強制挿入します。

例：
--
```json
"action": 1
```

+ action: 0
nextLink の URL を取得して静的 HTML を直接挿入します。動的処理は行わず、デフォルトかつ最速です。
+ action: 1
iframe で URL を読み込み、読み込み完了後に内容を取得します。ページ表示後に内容が生成される場合に適します。
+ action: 2
nextLink に対応するページ全体の iframe を作成し、トリミングして現在のページ下部に挿入します。
