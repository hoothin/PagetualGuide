# lazyImgSrc
>图片真实地址所在的属性名。可用 `["lazysrc", "removeProp1,removeProp2"]` 形式来移除图片属性。

示例 1：
--
```json
"lazyImgSrc": "data-cfsrc"
```
>从 `data-cfsrc` 获取 URL 并设置到图片的 src。

示例 2：
--
```json
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```
>有时即使设置了正确的 src，仍会被某个属性覆盖，需要先移除该属性。
