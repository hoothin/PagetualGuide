# init (doc, win, iframe, click, enter, input, sleep)
>JavaScript, das nur einmal auf der Hauptseite oder dem Spiegel‑iframe läuft. Für einmalige Initialisierungen oder um den Status der Hauptseite im iframe zu spiegeln.

Beispiel:
--
```json
"init": "if (iframe == null) return; await click('#btn'); await input('#input', 'here you are'); await enter('#input');"
```
>Beim Extrahieren im Spiegel‑iframe zuerst `#btn` klicken, dann `here you are` in `#input` eingeben und mit Enter bestätigen.

*Dieser Code läuft nur einmal.*
