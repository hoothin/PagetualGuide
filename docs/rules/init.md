# init (doc, win, iframe, click, enter, input, sleep)
>JavaScript that runs only once on the main page or mirror iframe. Use for one‑time setup or to mirror state from the main page into the iframe.

Example:
--
```json
"init": "if (iframe == null) return; await click('#btn'); await input('#input', 'here you are'); await enter('#input');"
```
>While extracting in the mirror iframe, click `#btn`, input `here you are` into `#input`, then press Enter on `#input`.

*This code runs only once.*
