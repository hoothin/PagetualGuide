---
sidebar: false
title: 🎉 欢迎使用东方永页机
---
<section class="fr-hero">
  <div class="fr-hero__title">🎉 欢迎使用东方永页机</div>
  <div class="fr-hero__subtitle">已完成安装。按以下清单完成初始化，可确保安全且稳定地使用。</div>
  <div class="fr-hero__meta">
    <span class="fr-badge">首次运行</span>
    <span class="fr-dot"></span>
    <span class="fr-muted">安全优先</span>
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
<pre name="pagetual" title="这是代理地址，如果是大陆用户可用这个" style="display: none; border: 1px solid; border-radius: 20px; overflow: hidden;">
https://ghfast.top/https://raw.githubusercontent.com/hoothin/UserScripts/master/Pagetual/pagetualRules.json
</pre>
<pre name="pagetual" title="这是源地址，发布在 github io" style="display: none; border: 1px solid; border-radius: 20px; overflow: hidden;">
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
</div>

<style>
.fr-hero {
  padding: 28px 24px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 16px;
  background: radial-gradient(1200px 400px at 10% -20%, rgba(59, 130, 246, 0.10), transparent),
              linear-gradient(180deg, rgba(248, 250, 252, 0.9), rgba(255, 255, 255, 1));
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
  margin: 8px 0 18px;
}
.fr-hero__title {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.2px;
}
.fr-hero__subtitle {
  margin-top: 6px;
  font-size: 15px;
  color: #475569;
}
.fr-hero__meta {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: #64748b;
}
.fr-badge {
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.06);
  color: #0f172a;
  font-weight: 600;
}
.fr-dot {
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: #94a3b8;
}
.fr-card {
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  background: #fff;
  padding: 16px 18px;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.05);
  margin: 14px 0;
}
.fr-card--mini {
  padding: 14px 16px;
}
.fr-card--video iframe {
  margin-top: 10px;
  border-radius: 12px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
}
.fr-card--video {
  clear: both;
}
.fr-card__title {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #334155;
  text-align: center;
}
.fr-list {
  margin: 10px 0 0 18px;
}
.fr-callout {
  border: 1px solid rgba(244, 63, 94, 0.25);
  background: rgba(244, 63, 94, 0.06);
  border-radius: 14px;
  padding: 14px 16px;
  margin: 14px 0;
}
.fr-callout__title {
  font-weight: 700;
  color: #be123c;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.fr-callout__body {
  margin-top: 6px;
  color: #7f1d1d;
  font-size: 14px;
}
.fr-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 10px 0 22px;
  align-items: stretch;
  grid-auto-flow: row;
}
.fr-links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-right: 12px;
  color: #0f172a;
}
.fr-links--stack a {
  display: flex;
  margin: 0;
}
.fr-links img {
  width: 18px;
  height: 18px;
}
.fr-text {
  color: #475569;
  font-size: 14px;
  margin-top: 6px;
}
.fr-qrcode {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fr-qrcode img {
  display: block;
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 6px 14px rgba(15, 23, 42, 0.12);
}
.fr-card--mini {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.fr-links--stack {
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.fr-cta {
  margin-top: 14px;
  display: flex;
}
.fr-cta__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 10px;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.25);
}
.fr-cta__btn:hover {
  opacity: 0.95;
}
@media (max-width: 640px) {
  .fr-hero { padding: 22px 18px; }
  .fr-hero__title { font-size: 24px; }
  .fr-card { padding: 14px 16px; }
  .fr-links a { margin-right: 10px; }
  .fr-card--video iframe { width: 100%; height: 220px; }
  .fr-grid { grid-template-columns: 1fr; }
}
.dark .fr-hero {
  border-color: rgba(148, 163, 184, 0.2);
  background: radial-gradient(1200px 400px at 10% -20%, rgba(59, 130, 246, 0.22), transparent),
              linear-gradient(180deg, rgba(15, 23, 42, 0.85), rgba(2, 6, 23, 0.95));
  box-shadow: 0 12px 28px rgba(2, 6, 23, 0.5);
}
.dark .fr-hero__title { color: #e2e8f0; }
.dark .fr-hero__subtitle { color: #94a3b8; }
.dark .fr-hero__meta { color: #94a3b8; }
.dark .fr-badge {
  background: rgba(226, 232, 240, 0.08);
  color: #e2e8f0;
}
.dark .fr-dot { background: #64748b; }
.dark .fr-card {
  border-color: rgba(148, 163, 184, 0.2);
  background: rgba(2, 6, 23, 0.7);
  box-shadow: 0 10px 24px rgba(2, 6, 23, 0.45);
}
.dark .fr-card__title { color: #cbd5f5; }
.dark .fr-callout {
  border-color: rgba(251, 113, 133, 0.35);
  background: rgba(251, 113, 133, 0.12);
}
.dark .fr-callout__title { color: #fecdd3; }
.dark .fr-callout__body { color: #fecdd3; }
.dark .fr-links a { color: #e2e8f0; }
.dark .fr-text { color: #94a3b8; }
.dark .fr-cta__btn {
  background: linear-gradient(135deg, #e2e8f0, #94a3b8);
  color: #0f172a;
  box-shadow: 0 10px 20px rgba(2, 6, 23, 0.45);
}
</style>
