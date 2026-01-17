# CSS-Selektoren-Spickzettel

## Grundlagen-Selektoren

```css
.css3-class {
  font-weight: bold;
}
```

| Selektor           | Beschreibung                  |
| ------------------ | ----------------------------- |
| `*`                | Alle Elemente                 |
| `div`              | Tag-Name = "div"             |
| `.class`           | Klasse = "class"              |
| `#id`              | ID = "id"                    |
| `[disabled]`       | Hat Attribut "disabled"       |
| `[role="dialog"]`  | Attribut Rolle = "dialog"     |

## Kombinatoren

| Selektor             | Beschreibung                      |
| -------------------- | --------------------------------- |
| `.parent .child`     | Nachkomme                        |
| `.parent > .child`   | Direkter Nachkomme               |
| `.child + .sibling`  | Benachbarter Geschwister          |
| `.child ~ .sibling`  | Entfernte Geschwister             |
| `.class1.class2`     | Hat beide Klassen                 |
| `.class1,.class2`    | .class1 oder .class2             |

## Attribut-Selektoren

| Selektor            | Beschreibung                                   |
| ------------------- | ----------------------------------------------- |
| `[role="dialog"]`   | `=` Genau, Rolle = "dialog"                    |
| `[class~="box"]`    | `~=` Hat Wort, Klasse enthält das Wort "box"   |
| `[class\|="box"]`   | `\|=` Genau oder Präfix (z. B. `value-`)      |
| `[href$=".doc"]`    | `$=` Endet mit, href endet mit ".doc"          |
| `[href^="/index"]`  | `^=` Beginnt mit, href beginnt mit "/index"    |
| `[class*="-is-"]`   | `*=` Enthält, Klasse enthält den String "-is-"  |

## Pseudo-Klassen

| Selektor               | Beschreibung                                    |
| ---------------------- | ----------------------------------------------- |
| `:target`              | Stellt ein eindeutiges Element dar (das Ziel-Element) mit einer ID, die dem Fragment der URL entspricht, z. B. `h2#foo:target` |
| `:focus`               | Fokussiertes Element                             |
| `:active`              | Aktives Element                                 |
| `:nth-child(3)`        | 3. Kind.                                       |
| `:nth-child(3n+2)`     | 2. Kind in Gruppen von 3. Benutzt eine Formel (a + b). Beschreibung: a repräsentiert die Gruppengröße, n ist ein Zähler (beginnt bei 0), und b ist ein Offset-Wert. |
| `:nth-child(-n+4)`     | 4, 3, 2, 1 weniger als 5.                      |
| `:nth-last-child(2)`   | Elemente basierend auf ihrer Position in einer Gruppe von Geschwistern, gezählt vom Ende. |
| `:nth-of-type(2)`      | Elemente basierend auf ihrer Position unter Geschwistern des gleichen Typs (Tag-Name). |
| `:checked`             | Überprüfte Eingaben                             |
| `:disabled`            | Deaktivierte Elemente                           |
| `:enabled`             | Aktivierte Elemente                             |
| `:default`             | Standardelement in einer Gruppe                 |
| `:empty`               | Elemente ohne Kinder                            |

## Pseudo-Klassen-Variationen

| Selektor              | Beschreibung                                    |
| --------------------- | ----------------------------------------------- |
| `:first-of-type`      | Stellt das erste Element seines Typs unter einer Gruppe von Geschwistern dar. |
| `:last-of-type`       | Stellt das letzte Element seines Typs unter einer Gruppe von Geschwistern dar. |
| `:only-of-type`       | Stellt ein Element dar, das keine Geschwister des gleichen Typs hat. |
| `:first-child`        | Stellt das erste Element unter einer Gruppe von Geschwistern dar. |
| `:last-child`         | Stellt das letzte Element unter einer Gruppe von Geschwistern dar. |
| `:only-child`         | Stellt ein Element ohne Geschwister dar. Dies ist dasselbe wie `:first-child:last-child` oder `:nth-child(1):nth-last-child(1)`, hat jedoch eine niedrigere Spezifität. |
| `::first-letter`      | Wendet Stile auf den ersten Buchstaben der ersten Zeile eines Blockcontainers an, jedoch nur, wenn er nicht von anderem Inhalt (wie Bildern oder Inline-Tabellen) vorangegangen wird. |
| `::first-line`        | Wendet Stile auf die erste Zeile eines Blockcontainers an. |

## <a href="#test-your-css-selector-skill-with-pagetual" data-pagetual-picker>Teste deine CSS-Selektoren-Fähigkeiten mit Pagetual</a>
![Picker](/img/picker.jpeg)