# 자식 스크립트
>사이트에 코드 평가에 대한 제한이 있는 경우. window 객체 아래에 함수를 사용하여 자식 스크립트를 만들 수 있습니다.

예시 1: 현재 사이트에 대한 단일 규칙
--
```js
// ==UserScript==
// @name         Pagetual 규칙
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
>스크립트 자체에 이미 필터링이 포함되어 있으므로 단일 규칙의 경우 URL을 생략할 수 있습니다.


예시 2: 사이트 규칙 모음
--
```js
// ==UserScript==
// @name         Pagetual용 규칙 모음
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
            url: "^https://www\.xxx\.",
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
            url: "^http://yyy\.",
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