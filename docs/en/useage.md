# User manual
## 1 Getting started
Visit [Google](https://www.google.com/search?q=pagetual) and scroll down, the next page will be stitched automatically.

## 2 Page divider
When turning pages, there will be space bars between the pages. The Tai Chi icon on the left of the space bar is to return to the top of the page, and icon on the right is to go to the end of the page. The word "Page" in the middle is the link of the next page.
### 2.1 Seamless Immersive Experience
The page divider bar can be set to hidden on the configuration page. Immersive experiences can be achieved by hiding dividers and adding sidebars.
### 2.2 Custom page number
If there is a `pageNum` set in current rule. You can click the number after `Page` to input a page number for jumping to that page.
### 2.3 Stop pager
Click page divider bar can stop paging.

## 3 Command menu
Click on the Tampermonkey icon and you will see three options under "Pagetual".
### 3.1. Configure
Click to go to the [configuration page](https://github.com/hoothin/UserScripts/tree/master/Pagetual), where personal configuration and rule customization are all there.
### 3.2. Disable on the site
Click to disable Pagetual on the current website.
### 3.3. Force to join
Click this if the smart rule is wrong. The script will turn on the forced splicing mode, all the content on the next page will be spliced ​​to the footer if you choose `join full body`, otherwise pagetual will load dynamic content in a iframe and return them.
### 3.4. Update online rules
Click to update the rule items you have imported online, and the Pagetual will automatically update the online rules every two days by default.

## 4 Personality Settings
After going to the configuration page, you can make personal settings, such as the transparent value of the divider, write history, open a new tab page, and double-click whether to hide the divider, etc.

You can import rule links written by other people, or you can just customize the rules in the input box by yourself. The rules from link support sorting and hot update. Click the up and down arrows in front of the link to sort, and click the update time to update the rules.

## 5 [Custom rules](/en/rule.html)
### 5.1 Visual grab
After clicking `Edit rule for current`, one blue box will appear in the current page following the mouse. At this time, click the corresponding element to grab the subject content you want to stitch and convert it to the selector code.
### 5.2 Adjust the selector
After you select the body content, hover over the selector code to expand the entire text, you can click to switch to the parent node. When you manually enter a selector into the input box, check the corresponding element of the selector by clicking check button `√`.
### 5.3 Start editing
When you are ready, just click the pencil icon to jump to the configuration page and start editing rule.
### 5.4 Your first custom rule
For example
```JSON
   {
     "name":"beauty", // rule name
     "url":"^https://www\\.beautyxxx\\.com/", // matching regularity corresponding to page URL
     "pageElement":"p>img" // The element you want to insert in the next page
   }
```
Other items can be added as needed, such as "selector for next page button", "method of grabbing elements", "page turning time interval", etc.
### 5.5 Move the menu window
Drag and drop the menu title to move the menu window.
### 5.6 Pause visual crawling
Click the Tai Chi icon on the left side of the menu title bar to pause the visual crawling.
### 5.7 Quick Edit
Click the 🔽 icon below to open the quick editing function, verify and copy the selector through the selector input box above, paste it to the corresponding attribute, and click the save icon after completion.