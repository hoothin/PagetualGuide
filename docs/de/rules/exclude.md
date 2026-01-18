# exclude
>Selector oder XPath eines Elements, das nicht vorhanden sein darf.

Beispiel 1:
--
```json
"exclude": "div.content"
```
>Ignoriere die Regel, wenn `div.content` vorhanden ist.

Beispiel 2:
--
```json
"exclude": "//a[contains(@href,'-') and text()='next']"
```
>Ignoriere die Regel, wenn `//a[contains(@href,'-') and text()='next']` vorhanden ist.

*Bei dynamischen Inhalten, bei denen nextLink wechselt, ist exclude hilfreich.*
