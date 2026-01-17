# lazyImgSrc
>실제 src를 대상으로 하는 이미지의 속성은 ["lazysrc", "removeProp1,removeProp2"]로 설정하여 이미지의 속성을 제거할 수 있습니다.

예시1:
--
```json
"lazyImgSrc": "data-cfsrc"
```
>"data-cfsrc"에서 URL을 가져와 대상 이미지의 src로 설정합니다.

예시2:
--
```json
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```
>때로는 올바른 src를 설정하면 제거해야 하는 속성에서 복구됩니다.
