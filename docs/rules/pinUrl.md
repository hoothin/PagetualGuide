# pinUrl
>Sometimes the next link or page element will be inexistence, set this to true so you can pin the rule just with url instead of finding elements by intelligent rules

Example:
--
```JSON
"pinUrl": true
```
>When the url matches the RegExp you set before, current rule will take effect no matter the element matches your rule or not.

*For example, when the site shows next link only when you scrolled something or clicked something, you should set pinUrl to true.*