import{_ as n,o as s,c as a,b as t}from"./app-QjLVMi9E.js";const e={},o=t(`<h1 id="stopsign" tabindex="-1"><a class="header-anchor" href="#stopsign" aria-hidden="true">#</a> stopSign</h1><blockquote><p>Dừng tải trang tiếp theo khi điều kiện khớp.</p></blockquote><h2 id="vi-du-1" tabindex="-1"><a class="header-anchor" href="#vi-du-1" aria-hidden="true">#</a> Ví dụ 1:</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.disable&quot;</span><span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Dừng khi &quot;#pagenum&quot; không tồn tại hoặc &quot;.disable&quot; tồn tại.</p></blockquote><h2 id="vi-du-2" tabindex="-1"><a class="header-anchor" href="#vi-du-2" aria-hidden="true">#</a> Ví dụ 2:</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
        <span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;(\\\\d+)&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
        <span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\\\/(\\\\d+)&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Dừng khi số trong nhóm 1 của <code>(\\\\d+)</code> bằng số trong nhóm 1 của <code>\\\\/(\\\\d+)</code> ở &quot;#pagenum&quot;.</p></blockquote><h2 id="vi-du-3" tabindex="-1"><a class="header-anchor" href="#vi-du-3" aria-hidden="true">#</a> Ví dụ 3:</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.disable&quot;</span><span class="token punctuation">,</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Dừng khi khớp quy tắc 1 hoặc quy tắc 2.</p></blockquote><h2 id="vi-du-4" tabindex="-1"><a class="header-anchor" href="#vi-du-4" aria-hidden="true">#</a> Ví dụ 4:</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;if (doc.querySelector(&#39;.disable&#39;)) return true; if (nextLink.className === &#39;disable&#39;) return true; return false;&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Dừng khi stopSign(doc, nextLink) trả về true.</p></blockquote>`,14),i=[o];function p(u,c){return s(),a("div",null,i)}const d=n(e,[["render",p],["__file","stopSign.html.vue"]]);export{d as default};
