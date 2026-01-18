# child script
>如果站點限制程式碼 eval，可在子腳本中把函式掛到 window 物件下。

範例 1：目前站點單條規則
--
```js
// ==UserScript==
// @name         Rule for Pagetual
// @namespace    hoothin
// @version      0.1
// @author       You
// @match        https://www.xxx.win/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.pagetualRule = {
        name: "xxx",
        pageElement: "#post-list > .card",
        lazyImgSrc: "file",
        css: "img.sl_lazyimg{opacity:1}",
        pageAction: (doc, eles) => {
            eles.forEach(ele => {
                let img = ele.querySelector('img');
                img.classList.remove('sl_lazyimg')
            })
        }
    }
})();
```
>單條規則時腳本本身已包含過濾條件，可省略 url。


範例 2：多站點規則集合
--
```js
// ==UserScript==
// @name         Rules collection for Pagetual
// @namespace    hoothin
// @version      0.1
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.pagetualRules = [
        {
            name: "xxx",
            url: "^https://www\\.xxx\\.",
            pageElement: "#post-list > .card",
            lazyImgSrc: "file",
            css: "img.sl_lazyimg{opacity:1}",
            pageAction: (doc, eles) => {
                eles.forEach(ele => {
                    let img = ele.querySelector('img');
                    img.classList.remove('sl_lazyimg')
                })
            }
        },
        {
            name: "yyy",
            url: "^http://yyy\\.",
            pageElement: "#main > li",
            pageAction: (doc, eles) => {
                eles.forEach(ele => {
                    let img = ele.querySelector('img');
                    img.classList.remove('lazy')
                })
            }
        }
    ]
})();
```
