# 安裝指南
## 1 安裝腳本管理器 - 3秒
東方永頁機基於油猴插件，因此需要一個腳本管理器以運行腳本。
::: details 💡 Q：什麼是“瀏覽器油猴腳本”？
A：“油猴”是一種在瀏覽器上運行和管理腳本的插件。所謂腳本就是一段代碼，它們能夠優化您的網頁瀏覽體驗。安裝之後，有些腳本能為網站添加新的功能，有些能使網站的界面更加易用，有些則能隱藏網站上煩人的廣告。
:::

::: details 💡 Q：為什麼寫成使用者腳本而非擴充？
A：因為東方永頁機具有強大的自訂程式碼執行能力，而擴充為了安全對自訂程式碼執行能力有所限制。 此外，使用者腳本更為靈活，可以運行於幾乎任何作業系統上，例如 Windows / MAC / iOS / Android。
:::

::: details 💡 Q：使用者腳本是否安全？
A：使用者腳本本身並不具有惡意行為，但安全性取決於您選擇安裝的腳本。 建議只從可信賴的來源取得腳本，並仔細閱讀腳本程式碼。
:::

::: details 💡 Q：如何安裝使用者腳本？
A：首先，您需要在瀏覽器上安裝腳本管理器外掛程式（如Tampermonkey）。 然後，您可以在插件管理介面中安裝和管理使用者腳本。
:::

::: details 💡 Q：我可以在行動裝置上使用使用者腳本嗎？
A：通常情況下，行動裝置的預設瀏覽器不支援使用者腳本。 但一些特定瀏覽器提供相關功能的插件或擴充功能。
:::

::: details 💡 Q：如何停用或刪除使用者腳本？
A：您可以在使用者腳本插件管理介面中停用或刪除特定的油猴腳本。 您也可以暫時停用整個腳本管理器插件，以停止所有腳本的運作。
:::

### 🛠️ 推薦腳本管理器

+ PC端
  - Chrome: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) | [Violentmonkey](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag)
  - Firefox: [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/) | [Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/) | [Violentmonkey](https://addons.mozilla.org/firefox/addon/violentmonkey/)
  - Safari: [Tampermonkey](http://tampermonkey.net/?browser=safari) | [Userscripts](https://apps.apple.com/app/userscripts/id1463298887)
  - Microsoft Edge: [Tampermonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd) | [Violentmonkey](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao)
  - Opera: [Tampermonkey](https://addons.opera.com/extensions/details/tampermonkey-beta/) | [Violentmonkey](https://violentmonkey.github.io/get-it/)
  - Maxthon: [Violentmonkey](http://extension.maxthon.com/detail/index.php?view_id=1680)
  - [AdGuard](https://adguard.com/)
+ 移動端 (Android)
  - Firefox: [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/) | [Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/) | [Violentmonkey](https://addons.mozilla.org/firefox/addon/violentmonkey/)
  - Maxthon: [Violentmonkey](http://extension.maxthon.com/detail/index.php?view_id=1680)
  - Dolphin: [Tampermonkey](https://play.google.com/store/apps/details?id=net.tampermonkey.dolphin)
  - UC: [Tampermonkey](https://www.tampermonkey.net/?browser=ucweb&ext=dhdg)
  - Kiwi: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) | [Violentmonkey](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag)
  - [XBrowser](https://www.xbext.com/)
+ 移動端 (iOS)
  - Safari: [Tampermonkey](http://tampermonkey.net/?browser=safari) | [Userscripts](https://apps.apple.com/app/userscripts/id1463298887)
  - [Gear](https://gear4.app/)

## 2 安裝東方永頁機 - 2秒
<div style="display: flex"><a style="transition: box-shadow .2s; display: inline-block; background-color: #005200; padding: 0.7rem 1.1rem; color: #fff; text-decoration: none; font-weight: 700; height: fit-content; margin: 6px 0 0 10px;" href="https://greasyfork.org/zh-TW/scripts/438684-pagetual">訪問 Greasyfork 安裝</a><a style="transition: box-shadow .2s; display: inline-block; background-color: #e2510a; padding: 0.7rem 1.1rem; color: #fff; text-decoration: none; font-weight: 700; height: fit-content; margin: 6px 0 0 10px;" href="https://hoothin.github.io/UserScripts/Pagetual/pagetual.user.js">Github 庫</a></div>

## 3 安裝之後
安裝之後建議前往**進階自訂**頁導入基礎規則庫，基礎庫針對諸多常用站點編寫了規則。