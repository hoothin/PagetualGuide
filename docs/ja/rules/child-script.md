# child script
>サイトが code eval を制限している場合、子スクリプトで window オブジェクト配下に関数を置けます。

例 1：現在サイトの単一ルール
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
>単一ルールではスクリプト自体にフィルタ条件が含まれるため、url は省略できます。


例 2：複数サイト向けルール集
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
