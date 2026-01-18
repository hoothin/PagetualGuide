# pagePre (response, doc)
>JavaScript, das nach dem Abruf der nextLink‑Antwort ausgeführt wird. Du kannst den Text bearbeiten und zurückgeben oder direkt ein pageElement‑Array zurückgeben.

Beispiel:
--
```json
"pagePre": "return decodeURI(response).replace(/[\\\\]/g,'')"
```

*Nur wirksam, wenn `action`==0 oder `action`==1*
