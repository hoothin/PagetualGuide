# lazyImgSrc
>The attr of image which target to real src, can be set by ["lazysrc", "removeProp1,removeProp2"] to remove props of image.

Example1:
--
```JSON
"lazyImgSrc": "data-cfsrc"
```
>Get the url from "data-cfsrc" and set it to src of target image.

Example2:
--
```JSON
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```
>Sometimes when you set the right src, it will recover from a prop which is needed to be removed.