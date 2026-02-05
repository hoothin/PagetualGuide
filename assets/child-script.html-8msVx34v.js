import{_ as n,o as s,c as a,b as t}from"./app-QjLVMi9E.js";const p={},e=t(`<h1 id="child-script" tabindex="-1"><a class="header-anchor" href="#child-script" aria-hidden="true">#</a> child script</h1><blockquote><p>Nếu site hạn chế eval code, bạn có thể tạo child script với các hàm dưới object window.</p></blockquote><h2 id="vi-du-1-quy-tac-đon-cho-site-hien-tai" tabindex="-1"><a class="header-anchor" href="#vi-du-1-quy-tac-đon-cho-site-hien-tai" aria-hidden="true">#</a> Ví dụ 1: Quy tắc đơn cho site hiện tại</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ==UserScript==</span>
<span class="token comment">// @name         Rule for Pagetual</span>
<span class="token comment">// @namespace    hoothin</span>
<span class="token comment">// @version      0.1</span>
<span class="token comment">// @author       You</span>
<span class="token comment">// @match        https://www.xxx.win/*</span>
<span class="token comment">// @grant        none</span>
<span class="token comment">// ==/UserScript==</span>

<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span>pagetualRule <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pageElement</span><span class="token operator">:</span> <span class="token string">&quot;#post-list &gt; .card&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lazyImgSrc</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token string">&quot;img.sl_lazyimg{opacity:1}&quot;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">pageAction</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">doc<span class="token punctuation">,</span> eles</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            eles<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">ele</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> img <span class="token operator">=</span> ele<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                img<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;sl_lazyimg&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Với quy tắc đơn, có thể bỏ url vì script đã có lọc.</p></blockquote><h2 id="vi-du-2-bo-quy-tac-cho-nhieu-site" tabindex="-1"><a class="header-anchor" href="#vi-du-2-bo-quy-tac-cho-nhieu-site" aria-hidden="true">#</a> Ví dụ 2: Bộ quy tắc cho nhiều site</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ==UserScript==</span>
<span class="token comment">// @name         Rules collection for Pagetual</span>
<span class="token comment">// @namespace    hoothin</span>
<span class="token comment">// @version      0.1</span>
<span class="token comment">// @author       You</span>
<span class="token comment">// @match        *://*/*</span>
<span class="token comment">// @grant        none</span>
<span class="token comment">// ==/UserScript==</span>

<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span>pagetualRules <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;^https://www\\\\.xxx\\\\.&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pageElement</span><span class="token operator">:</span> <span class="token string">&quot;#post-list &gt; .card&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lazyImgSrc</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token string">&quot;img.sl_lazyimg{opacity:1}&quot;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">pageAction</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">doc<span class="token punctuation">,</span> eles</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                eles<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">ele</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> img <span class="token operator">=</span> ele<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    img<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;sl_lazyimg&#39;</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;yyy&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;^http://yyy\\\\.&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pageElement</span><span class="token operator">:</span> <span class="token string">&quot;#main &gt; li&quot;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">pageAction</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">doc<span class="token punctuation">,</span> eles</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                eles<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">ele</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> img <span class="token operator">=</span> ele<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    img<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;lazy&#39;</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","child-script.html.vue"]]);export{r as default};
