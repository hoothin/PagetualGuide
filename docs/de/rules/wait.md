# wait (doc)
>Wartezeit, bis die Seite bereit ist. Wenn die URL sicher passt, kannst du auch JavaScript nutzen, das true/false zurückgibt.

Beispiel 1:
--
```json
"wait": 500
```
>Prüft alle 500 ms, bevor die Regel greift.

Beispiel 2:
--
```json
"wait": "await fetch('https://xxx.xxx');let img=doc.querySelector('ul.list img');return img!=null"
```
>Wiederholt die Prüfung bis true zurückgegeben wird. `doc` ist das document der Site; geprüft wird `ul.list img`.

*Wenn `wait` gesetzt ist, greift die Regel, sobald die URL passt.*
