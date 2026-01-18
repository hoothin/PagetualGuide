# include
>Selector oder XPath eines Elements, das vorhanden sein muss.

Beispiel 1:
--
```json
"include": "div.content"
```
>Ignoriere die Regel, wenn `div.content` nicht vorhanden ist.

Beispiel 2:
--
```json
"include": "//a[contains(@href,'-') and text()='next']"
```
>Ignoriere die Regel, wenn `//a[contains(@href,'-') and text()='next']` nicht vorhanden ist.

*Bei dynamischen Inhalten, bei denen nextLink wechselt, ist include hilfreich.*
