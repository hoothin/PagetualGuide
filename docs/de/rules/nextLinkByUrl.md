# nextLinkByUrl
>Wenn kein next‑Element existiert, kannst du den href aus der aktuellen URL erzeugen. [0] = RegExp‑String, [1] = Ersetzungs‑String, [2] = Selector/XPath, das existieren muss, [3] = Selector/XPath, das nicht existieren darf. {} erlaubt einfache Berechnungen (+ - * /).

Beispiel 1:
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)",
    "&page={$1+1}"
]
```
>Erzeugt `http://abc.xxx/d?page=2` aus `http://abc.xxx/d?page=1`.

Beispiel 2:
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)&pn=(\\d+)",
    "&page={$1+1}&pn={$2*10}",
    ".article>.item",
    ".disable>button"
]
```
>Erzeugt `http://abc.xxx/d?page=2&pn=10` aus `http://abc.xxx/d?page=1&pn=1`. Stoppt, wenn `.article>.item` fehlt oder `.disable>button` vorhanden ist.
