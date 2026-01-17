# Benutzerhandbuch
## 1 Erste Schritte
Besuchen Sie [Bing](https://bing.com/search?q=pagetual) und scrollen Sie nach unten, die nächste Seite wird automatisch zusammengefügt.

## 2 Seiten-Trenner
Beim Blättern gibt es zwischen den Seiten Abstandshalter. Das Tai Chi-Symbol links vom Abstandshalter bringt Sie zurück zum Seitenanfang, und das Symbol rechts führt Sie zum Seitenende. Das Wort "Seite" in der Mitte ist der Link zur nächsten Seite.
### 2.1 Nahtloses, immersives Erlebnis
Der Seiten-Trenner kann auf der Konfigurationsseite ausgeblendet werden. Immersive Erlebnisse können erzielt werden, indem Trenner ausgeblendet und Seitenleisten hinzugefügt werden.
### 2.2 Benutzerdefinierte Seitenzahl
Wenn in der aktuellen Regel eine `pageNum` festgelegt ist, können Sie auf die Zahl nach `Page` klicken, um eine Seitenzahl einzugeben und zu dieser Seite zu springen.
### 2.3 Paging stoppen
Ein Klick auf den Seiten-Trenner kann das Paging anhalten.

## 3 Befehlsmenü
Klicken Sie auf das Tampermonkey-Symbol, um drei Optionen unter "Pagetual" zu sehen.
### 3.1 Konfigurieren
Klicken Sie, um zur Konfigurationsseite zu gelangen, wo persönliche Konfigurationen und Regelanpassungen zu finden sind.
### 3.2 Auf der Seite deaktivieren
Klicken Sie, um Pagetual auf der aktuellen Website zu deaktivieren.
### 3.3 Zwangsweise beitreten
Klicken Sie darauf, wenn die intelligente Regel falsch ist. Das Skript aktiviert den Zwangsmodus, alle Inhalte der nächsten Seite werden in die Fußzeile eingefügt, wenn Sie `join full body` wählen, andernfalls lädt Pagetual dynamische Inhalte in einem iFrame und gibt diese zurück.
### 3.4 Online-Regeln aktualisieren
Klicken Sie, um die Regelartikel, die Sie online importiert haben, zu aktualisieren, und Pagetual wird standardmäßig alle zwei Tage automatisch die Online-Regeln aktualisieren.

## 4 Persönlichkeitseinstellungen
Nachdem Sie zur Konfigurationsseite gegangen sind, können Sie persönliche Einstellungen vornehmen, wie den Transparenzwert des Trenners, die Aufzeichnung der Historie, das Öffnen einer neuen Tab-Seite und das Doppelklicken, um den Trenner auszublenden usw.

Sie können Regel-Links importieren, die von anderen geschrieben wurden, oder Sie können die Regeln auch selbst im Eingabefeld anpassen. Die Regeln aus Links unterstützen Sortierung und Hot-Update. Klicken Sie auf die Auf- und Abwärtspfeile vor dem Link, um zu sortieren, und klicken Sie auf die Aktualisierungszeit, um die Regeln zu aktualisieren.
### 4.1 Historie aufzeichnen
Wenn diese Option aktiviert ist, wird Pagetual die URL der nächsten Seite in die Historie aufzeichnen, jedes Mal, wenn die Seite gewechselt wird, sodass Sie beim Klicken auf den Link zur vorherigen Seite zur zuletzt angesehenen Seitenzahl zurückkehren.
### 4.2 Neue Tab-Seite öffnen
Wenn diese Option aktiviert ist, werden alle Links, die in die aktuelle Seite eingefügt werden, in neuen Tabs geöffnet.
### 4.3 Nächste Seite vorladen, um das Browsen zu beschleunigen
Nach der Aktivierung werden beim Lesen der aktuellen Seite alle Bilder der nächsten Seite vorab geladen.

## 5 [Benutzerdefinierte Regeln](/rule.html)
![Custom rules](https://s3.bmp.ovh/imgs/2024/01/10/fa4f00c3e9f77878.gif)
### 5.1 Visuelles Erfassen
Nachdem Sie auf `Edit rule for current` geklickt haben, erscheint ein blauer Kasten, der der Maus folgt. Klicken Sie jetzt auf das entsprechende Element, um den Hauptinhalt, den Sie einfügen möchten, zu erfassen und in den Selektor-Code zu konvertieren.
### 5.2 Selektor anpassen
Nachdem Sie den Körperinhalt ausgewählt haben, fahren Sie mit der Maus über den Selektor-Code, um den gesamten Text zu erweitern. Sie können auf den übergeordneten Knoten umschalten, indem Sie auf die Schaltfläche `√` klicken, um das entsprechende Element des Selektors zu überprüfen.
### 5.3 Mit der Bearbeitung beginnen
Wenn Sie bereit sind, klicken Sie einfach auf das Bleistift-Symbol, um zur Konfigurationsseite zu springen und mit der Regelbearbeitung zu beginnen.
### 5.4 Ihre erste benutzerdefinierte Regel
Zum Beispiel:
```json
   {
     "name":"beauty", // rule name
     "url":"^https://www\\.beautyxxx\\.com/", // matching regularity corresponding to page URL
     "pageElement":"p>img" // The element you want to insert in the next page
   }
```
Andere Elemente können nach Bedarf hinzugefügt werden, wie "Selektor für den nächsten Seitenknopf", "Methode zum Erfassen von Elementen", "Zeitintervall für das Blättern von Seiten" usw.
### 5.5 Menüfenster verschieben
Ziehen Sie die Menüüberschrift, um das Menüfenster zu verschieben.
### 5.6 Visuelles Crawlen pausieren
Klicken Sie auf das Tai Chi-Symbol auf der linken Seite der Menüüberschrift, um das visuelle Crawlen zu pausieren.
### 5.7 Schnellbearbeitung
Klicken Sie auf das 🔽-Symbol unten, um die Schnellbearbeitungsfunktion zu öffnen, den Selektor über das Selektoreingabefeld oben zu überprüfen und zu kopieren, ihn in das entsprechende Attribut einzufügen und nach Abschluss auf das Speichersymbol zu klicken.