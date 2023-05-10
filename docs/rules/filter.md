# filter
>Filter the elements inserted from next page.

Example:
--
```JSON
"filter": "20"
```
>Remove elements when the count of inner words is less than 20.

```JSON
"filter": "😈"
```
>Remove elements when the inner words contains 😈.

```JSON
"filter": {
    "count": 20,
    "words": "spams\\d",
    "link": "^https://spams\\.xxx",
    "selector": "div#spam"
}
```
>Remove elements when the inner words matched `/spams\d/`, or the count of inner words is less than 20, or the links insert matched `/^https:\/\/spams\.xxx/`, or there is child matched selector "div#spam".