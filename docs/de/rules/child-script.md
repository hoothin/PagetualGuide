# child script
>Wenn die Site code eval einschränkt, kannst du ein Child‑Script anlegen und Funktionen unter window bereitstellen.

Beispiel 1: Einzelregel für die aktuelle Site
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
>Bei einer Einzelregel kann die url entfallen, da das Script die Filterung bereits enthält.


Beispiel 2: Regelsammlung für mehrere Sites
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
