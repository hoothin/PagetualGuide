# lazyImgSrc
>Attribute of the image that holds the real src. Can be set to ["lazysrc", "removeProp1,removeProp2"] to remove image properties.

Example 1:
--
```json
"lazyImgSrc": "data-cfsrc"
```
>Get the URL from "data-cfsrc" and set it to the image src.

Example 2:
--
```json
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```
>Sometimes the correct src is overwritten by another property that must be removed.
