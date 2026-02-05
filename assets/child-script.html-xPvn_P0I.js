import{_ as n,o as s,c as a,b as t}from"./app-QjLVMi9E.js";const p={},e=t(`<h1 id="child-script" tabindex="-1"><a class="header-anchor" href="#child-script" aria-hidden="true">#</a> child script</h1><blockquote><p>サイトが code eval を制限している場合、子スクリプトで window オブジェクト配下に関数を置けます。</p></blockquote><h2 id="例-1-現在サイトの単一ルール" tabindex="-1"><a class="header-anchor" href="#例-1-現在サイトの単一ルール" aria-hidden="true">#</a> 例 1：現在サイトの単一ルール</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ==UserScript==</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>単一ルールではスクリプト自体にフィルタ条件が含まれるため、url は省略できます。</p></blockquote><h2 id="例-2-複数サイト向けルール集" tabindex="-1"><a class="header-anchor" href="#例-2-複数サイト向けルール集" aria-hidden="true">#</a> 例 2：複数サイト向けルール集</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ==UserScript==</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","child-script.html.vue"]]);export{r as default};
