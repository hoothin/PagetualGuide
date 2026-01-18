# filter
>Filter elements inserted from the next page.

Example:
--
```json
"filter": "20"
```
>Remove elements when the word count is less than 20.

```json
"filter": "😈"
```
>Remove elements when the text contains 😈.

```json
"filter": {
    "count": 20,
    "words": "spams\\d",
    "link": "^https://spams\\.xxx",
    "selector": "div#spam"
}
```
>Remove elements if the text matches `/spams\d/`, or word count is under 20, or inserted links match `/^https:\/\/spams\.xxx/`, or a child matches `div#spam`.
