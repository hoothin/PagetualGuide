---
next: usage
---
# 安裝指南

<img src="https://s2.loli.net/2024/09/11/qeM1ZQjRXvaJnSf.gif" alt="pagetual install" width=740 height=524 />

## 1. 腳本管理器 - 3秒
東方永頁機基於油猴插件，因此需要一個腳本管理器以運行腳本👇。

### 🛠️ 推薦腳本管理器

如果選擇了 MV3 版本的擴展，請務必啟用開發者模式。

<table>
  <tbody>
    <td>
      <details open>
        <summary style="cursor:pointer;">🖥️ PC端</summary>
        <ul>
          <li>Chrome: <a href="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo">Tampermonkey</a> | <a href="https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag">Violentmonkey</a></li>
          <li>Firefox: <a href="https://addons.mozilla.org/firefox/addon/greasemonkey/">Greasemonkey</a> | <a href="https://addons.mozilla.org/firefox/addon/tampermonkey/">Tampermonkey</a> | <a href="https://addons.mozilla.org/firefox/addon/violentmonkey/">Violentmonkey</a></li>
          <li>Safari: <a href="http://tampermonkey.net/?browser=safari">Tampermonkey</a> | <a href="https://apps.apple.com/app/userscripts/id1463298887">Userscripts</a></li>
          <li>Microsoft Edge: <a href="https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd">Tampermonkey</a> | <a href="https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao">Violentmonkey</a></li>
          <li>Opera: <a href="https://addons.opera.com/extensions/details/tampermonkey-beta/">Tampermonkey</a> | <a href="https://violentmonkey.github.io/get-it/">Violentmonkey</a></li>
          <li>Maxthon: <a href="http://extension.maxthon.com/detail/index.php?view_id=1680">Violentmonkey</a></li>
          <li><a href="https://adguard.com/">AdGuard</a></li>
        </ul>
      </details>
    </td>
    <td>
      <details>
        <summary style="cursor:pointer;">📱 移動端 (Android)</summary>
        <ul>
          <li>Firefox: <a href="https://addons.mozilla.org/firefox/addon/greasemonkey/">Greasemonkey</a> | <a href="https://addons.mozilla.org/firefox/addon/tampermonkey/">Tampermonkey</a> | <a href="https://addons.mozilla.org/firefox/addon/violentmonkey/">Violentmonkey</a></li>
          <li>Maxthon: <a href="http://extension.maxthon.com/detail/index.php?view_id=1680">Violentmonkey</a></li>
          <li>Dolphin: <a href="https://play.google.com/store/apps/details?id=net.tampermonkey.dolphin">Tampermonkey</a></li>
          <li>UC: <a href="https://www.tampermonkey.net/?browser=ucweb&ext=dhdg">Tampermonkey</a></li>
          <li>Kiwi: <a href="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo">Tampermonkey</a> | <a href="https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag">Violentmonkey</a></li>
          <li><a href="https://www.xbext.com/">XBrowser</a></li>
        </ul>
      </details>
    </td>
    <td>
      <details>
        <summary style="cursor:pointer;">🍎 移動端 (iOS)</summary>
        <ul>
          <li>Safari: <a href="http://tampermonkey.net/?browser=safari">Tampermonkey</a> | <a href="https://apps.apple.com/app/userscripts/id1463298887">Userscripts</a></li>
          <li><a href="https://gear4.app/">Gear</a></li>
        </ul>
      </details>
    </td>
  </tbody>
</table>

## 2. 安裝東方永頁機 - 2秒
<div style="display: flex"><a style="transition: box-shadow .2s; display: inline-block; background-color: #005200; padding: 0.7rem 1.1rem; color: #fff; text-decoration: none; font-weight: 700; height: fit-content; margin: 6px 0 0 10px;" href="https://greasyfork.org/zh-TW/scripts/438684-pagetual">📲 訪問 Greasyfork 安裝</a><a style="transition: box-shadow .2s; display: inline-block; background-color: #e2510a; padding: 0.7rem 1.1rem; color: #fff; text-decoration: none; font-weight: 700; height: fit-content; margin: 6px 0 0 10px;" href="https://hoothin.github.io/UserScripts/Pagetual/pagetual.user.js">Github 庫</a></div>

::: details 💡 Q：什麼是“瀏覽器油猴腳本”？
A：“油猴”是一種在瀏覽器上運行和管理腳本的插件。所謂腳本就是一段代碼，它們能夠優化您的網頁瀏覽體驗。安裝之後，有些腳本能為網站添加新的功能，有些能使網站的界面更加易用，有些則能隱藏網站上煩人的廣告。
:::

::: details 💡 Q：為什麼寫成使用者腳本而非擴充？
A：因為東方永頁機具有強大的自訂程式碼執行能力，而擴充為了安全對自訂程式碼執行能力有所限制。 此外，使用者腳本更為靈活，可以運行於幾乎任何作業系統上，例如 Windows / MAC / iOS / Android。
:::

::: details 💡 Q：如何安裝使用者腳本？
A：首先，您需要在瀏覽器上安裝腳本管理器外掛程式（如Tampermonkey）。 然後，您可以在插件管理介面中安裝和管理使用者腳本。
:::

::: details 💡 Q：使用者腳本是否安全？
A：使用者腳本本身並不具有惡意行為，但安全性取決於您選擇安裝的腳本。 建議只從可信賴的來源取得腳本，並仔細閱讀腳本程式碼。
:::

::: details 💡 Q：我可以在行動裝置上使用使用者腳本嗎？
A：通常情況下，行動裝置的預設瀏覽器不支援使用者腳本。 但一些特定瀏覽器提供相關功能的插件或擴充功能。
:::

::: details 💡 Q：如何停用或刪除使用者腳本？
A：您可以在使用者腳本插件管理介面中停用或刪除特定的油猴腳本。 您也可以暫時停用整個腳本管理器插件，以停止所有腳本的運作。
:::

## 安裝之後
安裝之後建議前往**進階自訂**頁導入基礎規則庫，基礎庫針對諸多常用站點編寫了規則。