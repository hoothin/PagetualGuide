# lazyImgSrc
>画像の実 URL を持つ属性名。`["lazysrc", "removeProp1,removeProp2"]` の形で画像の属性を削除できます。

例 1：
--
```json
"lazyImgSrc": "data-cfsrc"
```
>`data-cfsrc` から URL を取得し、画像の src に設定します。

例 2：
--
```json
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```
>正しい src を設定しても、別の属性で上書きされる場合があります。その場合は該当属性を削除します。
