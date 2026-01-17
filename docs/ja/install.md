# 設置ガイド
## 1 スクリプトマネージャーのインストール - 3s
東方永頁機は Greasemonkey プラグインに基づいているため、スクリプトを実行するにはスクリプト マネージャーが必要です。
::: details 💡 Q：ブラウザのGreasemonkeyスクリプトとは何ですか？
A：『Greasemonkey』とは、ブラウザ上でスクリプトを実行および管理するためのプラグインです。スクリプトとは、ウェブページのブラウジング体験を最適化するためのコードです。インストールすると、一部のスクリプトはウェブサイトに新しい機能を追加し、一部はウェブサイトのインターフェースをより使いやすくし、また一部はウェブサイト上の迷惑な広告を非表示にすることができます。
:::

::: details 💡 Q: なぜ拡張機能ではなくユーザー スクリプトとして記述されているのですか?
A: 東方永頁機には強力なカスタム コード実行機能があり、拡張機能にはセキュリティ上の理由からカスタム コード実行機能に制限があるためです。 さらに、ユーザー スクリプトはより柔軟であり、Windows/MAC/iOS/Android などのほぼすべてのオペレーティング システムで実行できます。
:::

::: details 💡 Q：ユーザースクリプトは安全ですか？
A：ユーザースクリプト自体には悪意のある行為はありませんが、安全性はインストールするスクリプトの選択によって異なります。信頼できるソースからのスクリプトのみを入手し、スクリプトのコードを注意深く読むことをおすすめします。
:::

::: details 💡 Q：ユーザースクリプトのインストール方法は？
A：まず、Tampermonkeyなどのスクリプトマネージャープラグインをブラウザにインストールする必要があります。その後、プラグインの管理インターフェースからユーザースクリプトをインストールおよび管理することができます。
:::

::: details 💡 Q：モバイルデバイスでユーザースクリプトを使用することはできますか？
A：通常、モバイルデバイスのデフォルトのブラウザはユーザースクリプトをサポートしていません。ただし、特定のブラウザでは、関連する機能を提供するプラグインや拡張機能があります。
:::

::: details 💡 Q：ユーザースクリプトを無効化または削除する方法は？
A：特定のGreasemonkeyスクリプトを無効化または削除するには、ユーザースクリプトのプラグイン管理インターフェースで行うことができます。また、スクリプトマネージャープラグイン全体を一時的に無効にすることで、すべてのスクリプトの動作を停止することもできます。
:::

### 🛠️ 推奨されるスクリプト マネージャ

+ PC版
  - Chrome: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) | [Violentmonkey](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag)
  - Firefox: [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/) | [Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/) | [Violentmonkey](https://addons.mozilla.org/firefox/addon/violentmonkey/)
  - Safari: [Tampermonkey](http://tampermonkey.net/?browser=safari) | [Userscripts](https://apps.apple.com/app/userscripts/id1463298887)
  - Microsoft Edge: [Tampermonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd) | [Violentmonkey](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao)
  - Opera: [Tampermonkey](https://addons.opera.com/extensions/details/tampermonkey-beta/) | [Violentmonkey](https://violentmonkey.github.io/get-it/)
  - Maxthon: [Violentmonkey](http://extension.maxthon.com/detail/index.php?view_id=1680)
  - [AdGuard](https://adguard.com/)
+ 携帯端末 (Android)
  - Firefox: [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/) | [Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/) | [Violentmonkey](https://addons.mozilla.org/firefox/addon/violentmonkey/)
  - Maxthon: [Violentmonkey](http://extension.maxthon.com/detail/index.php?view_id=1680)
  - Dolphin: [Tampermonkey](https://play.google.com/store/apps/details?id=net.tampermonkey.dolphin)
  - UC: [Tampermonkey](https://www.tampermonkey.net/?browser=ucweb&ext=dhdg)
  - Kiwi: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) | [Violentmonkey](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag)
  - [XBrowser](https://www.xbext.com/)
+ 携帯端末 (iOS)
  - Safari: [Tampermonkey](http://tampermonkey.net/?browser=safari) | [Userscripts](https://apps.apple.com/app/userscripts/id1463298887)
  - [Gear](https://gear4.app/)

## 2 東方永頁機のインストール - 2s
<div style="display: flex"><a style="transition: box-shadow .2s; display: inline-block; background-color: #005200; padding: 0.7rem 1.1rem; color: #fff; text-decoration: none; font-weight: 700; height: fit-content; margin: 6px 0 0 10px;" href="https://greasyfork.org/ja/scripts/438684-pagetual?locale_override=1">Greeasyfork インストールにアクセス</a><a style="transition: box-shadow .2s; display: inline-block; background-color: #e2510a; padding: 0.7rem 1.1rem; color: #fff; text-decoration: none; font-weight: 700; height: fit-content; margin: 6px 0 0 10px;" href="https://hoothin.github.io/UserScripts/Pagetual/pagetual.user.js">Githubリポジトリ</a></div>

## 3 設置後
インストール後は、**高度なカスタマイズ**ページにアクセスし、基本ルールライブラリを導入することをおすすめします。基本ライブラリには、多くの一般的なウェブサイトに対してルールが記述されています。