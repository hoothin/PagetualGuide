---
sidebar: false
title: 欢迎使用东方永页机
---
<section class="fr-hero">
  <div class="fr-hero__title">欢迎使用东方永页机</div>
  <div class="fr-hero__subtitle">已完成安装。按以下清单完成初始化，可确保安全且稳定地使用。</div>
  <div class="fr-hero__meta">
    <span class="fr-badge">首次运行</span>
    <span class="fr-dot"></span>
    <span class="fr-muted">导入规则</span>
  </div>
</section>

<section class="fr-card">
  <div class="fr-card__title">清单</div>
  <ol class="fr-list">
    <li>阅读使用教程，了解核心概念与常用操作。</li>
    <li><strong>导入在线规则（以下两个地址指向同一规则库，任选其一）。</strong> 规则可执行代码，请仅导入可信来源的规则。</li>
  </ol>
</section>

<p name="click2import"></p>
<pre class="fr-card" name="pagetual" style="display: none; overflow: hidden;" title="这是代理地址，如果是大陆用户可用这个">
https://ghfast.top/https://raw.githubusercontent.com/hoothin/UserScripts/master/Pagetual/pagetualRules.json
</pre>
<pre class="fr-card" name="pagetual" style="display: none; overflow: hidden;" title="这是源地址，发布在 github io">
https://hoothin.github.io/UserScripts/Pagetual/pagetualRules.json
</pre>

<section class="fr-callout">
  <div class="fr-callout__title">安全提示</div>
  <div class="fr-callout__body">规则具有代码执行能力。导入前请确认作者与来源可信，避免使用来历不明的规则库。</div>
</section>

---

<section class="fr-grid">
  <div class="fr-card fr-card--mini">
    <div class="fr-card__title">社区与动态</div>
    <div class="fr-text">获取更新、交流经验、提交反馈。</div>
    <div class="fr-links fr-links--stack">
      <a href="https://discord.com/invite/keqypXC6wD"><img alt="" src="/img/discord.png" /> Discord</a>
      <a href="https://github.com/hoothin/UserScripts"><img alt="" src="/img/github.png" /> GitHub</a>
      <a href="https://twitter.com/intent/follow?screen_name=HoothinDev" title="在推特上关注我"><img alt="" src="/img/twitter.png" /> Twitter</a>
    </div>
  </div>
  <div class="fr-card fr-card--mini">
    <div class="fr-card__title">微信公众号</div>
    <div class="fr-text">按需关注，无需关注也可正常使用全部功能。</div>
    <div class="fr-qrcode">
      <img src="https://www.hoothin.com/img/qrcode_for_gh.jpg" width="200" />
    </div>
  </div>
</section>

<section class="fr-card fr-card--video">
  <div class="fr-card__title">视频演示</div>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/3px6HILj94w?si=NAvtubgx2au_KeFO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</section>

<component :is="'script'" src = "/js/fireWorks.js">
</component>

<div class="fr-cta">
  <a class="fr-cta__btn" href="/cn/usage">上手教程</a>
  <button class="fr-reward__btn" type="button" onclick="window.pagetualOpenRewardImage ? window.pagetualOpenRewardImage(this) : this.nextElementSibling.click()">支付宝领红包，买东西省亿点！</button>
  <img class="fr-reward__image" src="https://s2.loli.net/2024/07/04/1CIsVfT9rxjKwRU.jpg" alt="支付宝红包二维码" />
</div>
