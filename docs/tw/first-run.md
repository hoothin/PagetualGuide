---
sidebar: false
title: 歡迎使用東方永頁機
---
<section class="fr-hero">
  <div class="fr-hero__title">歡迎使用東方永頁機</div>
  <div class="fr-hero__subtitle">安裝完成。請依下列清單完成初始化，以確保安全且穩定使用。</div>
  <div class="fr-hero__meta">
    <span class="fr-badge">首次執行</span>
    <span class="fr-dot"></span>
    <span class="fr-muted">匯入規則</span>
  </div>
</section>

<section class="fr-card">
  <div class="fr-card__title">清單</div>
  <ol class="fr-list">
    <li>閱讀使用教程，掌握核心概念與常用操作。</li>
    <li><strong>導入線上規則。線上規則可執行程式碼，請僅導入可信來源。</strong></li>
  </ol>
</section>

<p name="click2import"></p>
<pre class="fr-card" name="pagetual" style="display: none; overflow: hidden;">
https://hoothin.github.io/UserScripts/Pagetual/pagetualRules.json
</pre>

<section class="fr-callout">
  <div class="fr-callout__title">安全提醒</div>
  <div class="fr-callout__body">規則具有程式碼執行能力。導入前請確認作者與來源可信。</div>
</section>

---

<section class="fr-grid">
  <div class="fr-card fr-card--mini">
    <div class="fr-card__title">社群與更新</div>
    <div class="fr-text">取得更新、交流經驗、提交回饋。</div>
    <div class="fr-links">
      <a href="https://discord.com/invite/keqypXC6wD"><img alt="" src="/img/discord.png" /> Discord</a>
      <a href="https://github.com/hoothin/UserScripts"><img alt="" src="/img/github.png" /> GitHub</a>
      <a href="https://twitter.com/intent/follow?screen_name=HoothinDev"><img alt="" src="/img/twitter.png" /> Twitter</a>
    </div>
  </div>
  <div class="fr-card fr-card--mini">
    <div class="fr-card__title">支援與服務</div>
    <div class="fr-text">網站、遊戲、App 外包需求，請寄信至 <a href="mailto:rixixi@gmail.com">rixixi@gmail.com</a>。</div>
  </div>
</section>

<section class="fr-card fr-card--video">
  <div class="fr-card__title">影片示範</div>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/3px6HILj94w?si=NAvtubgx2au_KeFO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</section>

<component :is="'script'" src = "/js/fireWorks.js">
</component>

<div class="fr-cta">
  <a class="fr-cta__btn" href="/tw/usage">快速上手</a>
  <button class="fr-reward__btn" type="button" onclick="window.pagetualOpenRewardImage ? window.pagetualOpenRewardImage(this) : this.nextElementSibling.click()">支付寶領紅包，買東西省億點！</button>
  <img class="fr-reward__image" src="https://s2.loli.net/2024/07/04/1CIsVfT9rxjKwRU.jpg" alt="支付寶紅包二維碼" />
</div>
