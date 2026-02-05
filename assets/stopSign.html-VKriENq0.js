import{_ as n,o as s,c as a,b as e}from"./app-QjLVMi9E.js";const t={},o=e(`<h1 id="stopsign" tabindex="-1"><a class="header-anchor" href="#stopsign" aria-hidden="true">#</a> stopSign</h1><blockquote><p>Останавливает загрузку следующей страницы при совпадении условия.</p></blockquote><h2 id="пример-1" tabindex="-1"><a class="header-anchor" href="#пример-1" aria-hidden="true">#</a> Пример 1:</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.disable&quot;</span><span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Останавливается, если &quot;#pagenum&quot; не существует или &quot;.disable&quot; существует.</p></blockquote><h2 id="пример-2" tabindex="-1"><a class="header-anchor" href="#пример-2" aria-hidden="true">#</a> Пример 2:</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
        <span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;(\\\\d+)&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
        <span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\\\\/(\\\\d+)&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Останавливается, если число из 1‑й группы <code>(\\\\d+)</code> равно числу из 1‑й группы <code>\\\\/(\\\\d+)</code> в &quot;#pagenum&quot;.</p></blockquote><h2 id="пример-3" tabindex="-1"><a class="header-anchor" href="#пример-3" aria-hidden="true">#</a> Пример 3:</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#pagenum&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.disable&quot;</span><span class="token punctuation">,</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Останавливается при совпадении правила 1 или 2.</p></blockquote><h2 id="пример-4" tabindex="-1"><a class="header-anchor" href="#пример-4" aria-hidden="true">#</a> Пример 4:</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;stopSign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;if (doc.querySelector(&#39;.disable&#39;)) return true; if (nextLink.className === &#39;disable&#39;) return true; return false;&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Останавливается, если stopSign(doc, nextLink) возвращает true.</p></blockquote>`,14),i=[o];function p(u,c){return s(),a("div",null,i)}const d=n(t,[["render",p],["__file","stopSign.html.vue"]]);export{d as default};
