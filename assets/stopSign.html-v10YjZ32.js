import{_ as n,o as s,c as a,b as e}from"./app-QjLVMi9E.js";const t={},o=e(`<h1 id="stopsign" tabindex="-1"><a class="header-anchor" href="#stopsign" aria-hidden="true">#</a> stopSign</h1><blockquote><p>条件に一致したら次ページの読み込みを停止します。</p></blockquote><h2 id="例-1" tabindex="-1"><a class="header-anchor" href="#例-1" aria-hidden="true">#</a> 例 1：</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.disable&quot;</span><span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><code>#pagenum</code> が存在しない、または <code>.disable</code> が存在する場合に停止します。</p></blockquote><h2 id="例-2" tabindex="-1"><a class="header-anchor" href="#例-2" aria-hidden="true">#</a> 例 2：</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
        <span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;(\\\\d+)&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
        <span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\\\/(\\\\d+)&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>#pagenum</code> の <code>(\\\\d+)</code> の 1 つ目のグループと <code>\\\\/(\\\\d+)</code> の 1 つ目のグループが一致したら停止します。</p></blockquote><h2 id="例-3" tabindex="-1"><a class="header-anchor" href="#例-3" aria-hidden="true">#</a> 例 3：</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.disable&quot;</span><span class="token punctuation">,</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>ルール 1 またはルール 2 に一致したら停止します。</p></blockquote><h2 id="例-4" tabindex="-1"><a class="header-anchor" href="#例-4" aria-hidden="true">#</a> 例 4：</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;if (doc.querySelector(&#39;.disable&#39;)) return true; if (nextLink.className === &#39;disable&#39;) return true; return false;&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>stopSign(doc, nextLink) が true を返したら停止します。</p></blockquote>`,14),i=[o];function p(u,c){return s(),a("div",null,i)}const d=n(t,[["render",p],["__file","stopSign.html.vue"]]);export{d as default};
