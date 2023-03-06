# action
>0 means load url and insert with static html, 1 means load by iframe so that dynamic javaScript code on page may effect, 2 means force insert iframe to bottom

Example:
--
```JSON
"action": 1
```

+ action: 0
Fetch the url of next link and get the static html without any dynamic handling, it's the default action and the most fast action.
+ action: 1
Load url in a iframe and get content after loading completed, it's for the situation when contents are loaded after page open.
+ action: 2
Create a iframe of full page of next link. Trim the page and insert into current page.