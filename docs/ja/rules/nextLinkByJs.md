# nextLinkByJs (doc)
>JavaScript を実行して次ページの URL を返します。`doc` は読み込んだ各ページの document。

例：
--
```json
"nextLinkByJs": "let n=doc.querySelector('a.curr+a');if(n)return n.href.replace(/^javascript:.*\\((\\d+)'\\);/,'$1_.html');"
```
>`doc` は読み込んだページの document を指します。このコードは `a.curr+a` をチェックし、存在すれば href からリンクを生成し、なければ停止します。

>`#p{x=1&y=2}` 形式で POST データを組み立てられます。例：`https://www.xxx.com/pageAjax#p{x=1&y=2}`。
