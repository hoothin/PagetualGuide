# url
>RegExp for the target site URL. For performance, the URL is truncated to the first 500 characters for comparison.

Example:
--
```json
"url": "^https://abc\\.com/\\d+"
```
>When the URL matches the RegExp `/^https://abc\.com/\d+/`, this rule takes effect.
