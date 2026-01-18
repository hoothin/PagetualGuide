# lazyImgSrc
>圖片真實網址所在的屬性名。可用 `["lazysrc", "removeProp1,removeProp2"]` 形式移除圖片屬性。

範例 1：
--
```json
"lazyImgSrc": "data-cfsrc"
```
>從 `data-cfsrc` 取得 URL 並設定到圖片的 src。

範例 2：
--
```json
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```
>有時即使設定正確的 src，仍會被某個屬性覆蓋，需要先移除該屬性。
