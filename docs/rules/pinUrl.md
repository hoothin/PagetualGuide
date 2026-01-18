# pinUrl
>Sometimes nextLink or pageElement doesn’t exist. Set this to true to pin the rule by url only instead of relying on intelligent matching.

Example:
--
```json
"pinUrl": true
```
>When the URL matches the RegExp you set, the rule applies even if elements don’t match.

*For example, if nextLink appears only after scrolling or clicking, set pinUrl to true.*
