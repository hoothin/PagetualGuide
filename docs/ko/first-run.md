---
sidebar: false
title: 🎉 Pagetual에 오신 것을 환영합니다
---
<section class="fr-hero">
  <div class="fr-hero__title">🎉 Pagetual에 오신 것을 환영합니다</div>
  <div class="fr-hero__subtitle">설치가 완료되었습니다. 아래 체크리스트로 안전하게 시작하세요.</div>
  <div class="fr-hero__meta">
    <span class="fr-badge">첫 실행</span>
    <span class="fr-dot"></span>
    <span class="fr-muted">보안 우선</span>
  </div>
</section>

<section class="fr-card">
  <div class="fr-card__title">체크리스트</div>
  <ol class="fr-list">
    <li>사용자 가이드를 읽어 핵심 기능을 이해합니다.</li>
    <li><strong>온라인 규칙을 가져옵니다. 규칙은 코드를 실행할 수 있으므로 신뢰할 수 있는 출처만 사용하세요.</strong></li>
  </ol>
</section>

<p name="click2import"></p>
<pre name="pagetual" style="display: none; border: 1px solid; border-radius: 20px; overflow: hidden;">
https://hoothin.github.io/UserScripts/Pagetual/pagetualRules.json
</pre>

<section class="fr-callout">
  <div class="fr-callout__title">보안 안내</div>
  <div class="fr-callout__body">규칙은 코드를 실행할 수 있습니다. 비공식 규칙은 출처를 확인한 후에만 가져오세요.</div>
</section>

---

<section class="fr-grid">
  <div class="fr-card fr-card--mini">
    <div class="fr-card__title">커뮤니티 & 업데이트</div>
    <div class="fr-text">업데이트 확인, 피드백, 커뮤니티 참여.</div>
    <div class="fr-links">
      <a href="https://discord.com/invite/keqypXC6wD"><img alt="" src="/img/discord.png" /> Discord</a>
      <a href="https://github.com/hoothin/UserScripts"><img alt="" src="/img/github.png" /> GitHub</a>
      <a href="https://twitter.com/intent/follow?screen_name=HoothinDev"><img alt="" src="/img/twitter.png" /> Twitter</a>
    </div>
  </div>
  <div class="fr-card fr-card--mini">
    <div class="fr-card__title">지원 & 외주</div>
    <div class="fr-text">웹/게임/앱 외주 문의: <a href="mailto:rixixi@gmail.com">rixixi@gmail.com</a></div>
  </div>
</section>

<section class="fr-card fr-card--video">
  <div class="fr-card__title">영상 안내</div>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/3px6HILj94w?si=NAvtubgx2au_KeFO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</section>

<component :is="'script'" src = "/js/fireWorks.js">
</component>

<div class="fr-cta">
  <a class="fr-cta__btn" href="/ko/usage">빠른 시작</a>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.fr-card--video iframe {
  margin-top: 10px;
  border-radius: 12px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
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
}
.fr-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}
.fr-links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #0f172a;
}
.fr-links img {
  width: 18px;
  height: 18px;
}
.fr-text {
  color: #475569;
  font-size: 14px;
  margin-top: 6px;
  text-align: center;
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
.fr-cta__btn:hover { opacity: 0.95; }
@media (max-width: 640px) {
  .fr-hero { padding: 22px 18px; }
  .fr-hero__title { font-size: 24px; }
  .fr-card { padding: 14px 16px; }
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
