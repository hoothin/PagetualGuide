# pageElementByJs (over, pageNum)
>Führt JavaScript aus und erzeugt die einzufügenden Elemente. Ein over(eles) ist nötig, um das Array zurückzugeben. pageNum ist die aktuelle Seitenzahl.

Beispiel:
--
```json
"pageElementByJs": "fetch(url.replace(/&offset=\\d+/,'') + '&offset=' + (pageNum + 1), {headers:{'X-Requested-With': 'XMLHttpRequest'}}).then(res => res.json()).then(res => {over(eles)})"
```
>Erstellt Elemente und gibt sie nach dem Laden über `over` zurück.

*Wenn es auf der aktuellen Seite keinen nextLink gibt, kannst du damit neue Elemente erzeugen.*
