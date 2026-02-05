import{_ as n,o as s,c as a,b as e}from"./app-QjLVMi9E.js";const t={},o=e(`<h1 id="stopsign" tabindex="-1"><a class="header-anchor" href="#stopsign" aria-hidden="true">#</a> stopSign</h1><blockquote><p>조건에 일치하면 다음 페이지 로드를 중지합니다.</p></blockquote><h2 id="예시-1" tabindex="-1"><a class="header-anchor" href="#예시-1" aria-hidden="true">#</a> 예시 1:</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.disable&quot;</span><span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><code>#pagenum</code>이 없거나 <code>.disable</code>이 있으면 중지합니다.</p></blockquote><h2 id="예시-2" tabindex="-1"><a class="header-anchor" href="#예시-2" aria-hidden="true">#</a> 예시 2:</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
        <span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;(\\\\d+)&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
        <span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\\\/(\\\\d+)&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>#pagenum</code>의 <code>(\\\\d+)</code> 1번 그룹과 <code>\\\\/(\\\\d+)</code> 1번 그룹이 같으면 중지합니다.</p></blockquote><h2 id="예시-3" tabindex="-1"><a class="header-anchor" href="#예시-3" aria-hidden="true">#</a> 예시 3:</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.disable&quot;</span><span class="token punctuation">,</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>규칙 1 또는 규칙 2에 해당하면 중지합니다.</p></blockquote><h2 id="예시-4" tabindex="-1"><a class="header-anchor" href="#예시-4" aria-hidden="true">#</a> 예시 4:</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;if (doc.querySelector(&#39;.disable&#39;)) return true; if (nextLink.className === &#39;disable&#39;) return true; return false;&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>stopSign(doc, nextLink)이 true를 반환하면 중지합니다.</p></blockquote>`,14),i=[o];function p(u,c){return s(),a("div",null,i)}const d=n(t,[["render",p],["__file","stopSign.html.vue"]]);export{d as default};
