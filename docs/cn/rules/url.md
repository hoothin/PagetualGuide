# url
>RegExp for the url of target site. To ensure performance, the url will be truncated to the first 500 characters for comparison.

Example:
--
```json
"url": "^https://abc\\.com/\\d+"
```
>When the url matches the RegExp `/^https://abc\.com/\d+/`, current rule will take effect.