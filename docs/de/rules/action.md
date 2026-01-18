# action
>0 bedeutet URL laden und statisches HTML einfügen; 1 bedeutet per iframe laden, damit dynamisches JavaScript ausgeführt wird; 2 bedeutet, ein vollständiges iframe unten einzufügen.

Beispiel:
--
```json
"action": 1
```

+ action: 0
Holt die URL des nextLink und fügt statisches HTML ohne dynamische Verarbeitung ein. Standardwert und am schnellsten.
+ action: 1
Lädt die URL in einem iframe und übernimmt den Inhalt nach dem Laden. Geeignet, wenn Inhalte erst nach dem Öffnen gerendert werden.
+ action: 2
Erstellt ein vollständiges iframe der nextLink‑Seite, schneidet es zu und fügt es unten in die aktuelle Seite ein.
