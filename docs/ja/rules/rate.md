# rate
>次ページ読み込みを開始する距離のしきい値（windowHeight の倍率）。読み込みが遅いサイトでは 2 や 3 を指定します。

例：
--
```json
"rate": 3
```
>ページの scrollTop と下端の距離が `3 * windowHeight` 未満になったら次ページを読み込みます。
