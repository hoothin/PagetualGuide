# child script
>If the site has some limit for code eval. You can make a child script with function under object window.

Example 1: Single rule for current site
--
```JS
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
>You can omit the url with single rule since the script itself already includes the filtering.


Example 2: Rules collection for sites
--
```JS
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