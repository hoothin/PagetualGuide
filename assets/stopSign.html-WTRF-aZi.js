import{_ as n,o as s,c as a,b as e}from"./app-QjLVMi9E.js";const t={},o=e(`<h1 id="stopsign" tabindex="-1"><a class="header-anchor" href="#stopsign" aria-hidden="true">#</a> stopSign</h1><blockquote><p>满足条件时停止加载下一页。</p></blockquote><h2 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.disable&quot;</span><span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><code>#pagenum</code> 不存在或 <code>.disable</code> 存在时停止。</p></blockquote><h2 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
        <span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;(\\\\d+)&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
        <span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\\\/(\\\\d+)&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>当 <code>#pagenum</code> 中匹配 <code>(\\\\d+)</code> 的第 1 组与匹配 <code>\\\\/(\\\\d+)</code> 的第 1 组数字相等时停止。</p></blockquote><h2 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例 3：</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.disable&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
        <span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;(\\\\d+)&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
        <span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\\\/(\\\\d+)&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span> 

# same as

<span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.disable&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pageNum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;(\\\\d+)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\\\/(\\\\d+)&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>匹配规则 1 或规则 2 时停止。</p></blockquote><h2 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4" aria-hidden="true">#</a> 示例 4：</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;if (doc.querySelector(&#39;.disable&#39;)) return true; if (nextLink.className === &#39;disable&#39;) return true; return false;&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>当 stopSign(doc, nextLink) 返回 true 时停止。</p></blockquote>`,14),i=[o];function p(u,c){return s(),a("div",null,i)}const d=n(t,[["render",p],["__file","stopSign.html.vue"]]);export{d as default};
