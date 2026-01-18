# delay
>JavaScript zum Verzögern der nächsten Aktion, bis true zurückgegeben wird. Nützlich, um vollständig geladene Lazy‑Elemente abzuwarten.

Beispiel:
--
```json
"delay": "return document.querySelector('#feed_pagenation>li.cur').innerText>=curpage"
```

*Manchmal lädt die nächste Seite den Inhalt nicht vollständig (z. B. erst nach Scroll). Damit prüfst du, ob die Seite komplett ist; geprüft wird nur am Seitenende.*
