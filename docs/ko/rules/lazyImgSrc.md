# lazyImgSrc
>이미지의 실제 URL이 들어 있는 속성명. `["lazysrc", "removeProp1,removeProp2"]` 형태로 이미지 속성을 제거할 수 있습니다.

예시 1:
--
```json
"lazyImgSrc": "data-cfsrc"
```
>`data-cfsrc`에서 URL을 가져와 이미지 src에 설정합니다.

예시 2:
--
```json
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```
>올바른 src를 설정해도 다른 속성에 의해 되돌아가는 경우가 있으니 해당 속성을 제거합니다.
