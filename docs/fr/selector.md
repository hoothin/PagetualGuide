# Aide-mémoire des sélecteurs CSS

## Sélecteurs de base

```css
.css3-class {
  font-weight: bold;
}
```

| Sélecteur         | Description           |
| ----------------- | --------------------- |
| `*`               | Tous les éléments     |
| `div`             | Nom de balise = "div" |
| `.class`          | Classe = "class"      |
| `#id`             | ID = "id"             |
| `[disabled]`      | Possède l'attribut "disabled" |
| `[role="dialog"]` | Attribut role = "dialog" |

## Combinateurs

| Sélecteur           | Description              |
| ------------------- | ------------------------ |
| `.parent .child`    | Descendant               |
| `.parent > .child`  | Descendant direct        |
| `.child + .sibling` | Frère adjacent           |
| `.child ~ .sibling` | Frère éloigné            |
| `.class1.class2`    | Possède les deux classes |
| `.class1,.class2`   | .class1 ou .class2       |

## Sélecteurs d'attributs

| Sélecteur          | Description                               |
| ------------------ | ----------------------------------------- |
| `[role="dialog"]`  | `=` Exact, role = "dialog"                |
| `[class~="box"]`   | `~=` Contient le mot, la classe contient le mot "box" |
| `[class\|="box"]`  | `\|=` Exact ou préfixe (ex: `value-`)     |
| `[href$=".doc"]`   | `$=` Se termine par, href se termine par ".doc" |
| `[href^="/index"]` | `^=` Commence par, href commence par "/index" |
| `[class*="-is-"]`  | `*=` Contient, la classe contient la chaîne "-is-" |

## Pseudo-classes

| Sélecteur            | Description                               |
| -------------------- | ----------------------------------------- |
| `:target`            | Représente un élément unique (l'élément cible) avec un id correspondant au fragment de l'URL. Ex: `h2#foo:target` |
| `:focus`             | Élément ciblé                             |
| `:active`            | Élément actif                             |
| `:nth-child(3)`      | 3ème enfant.                              |
| `:nth-child(3n+2)`   | 2ème enfant dans des groupes de 3. Utilise une formule (an + b). Description: a représente la taille d'un cycle, n est un compteur (commence à 0), et b est une valeur de décalage. |
| `:nth-child(-n+4)`   | 4, 3, 2, 1 moins de 5.                    |
| `:nth-last-child(2)` | Éléments basés sur leur position parmi un groupe de frères, en comptant depuis la fin. |
| `:nth-of-type(2)`    | Éléments basés sur leur position parmi les frères du même type (nom de balise). |
| `:checked`           | Entrées cochées                           |
| `:disabled`          | Éléments désactivés                       |
| `:enabled`           | Éléments activés                          |
| `:default`           | Élément par défaut dans un groupe         |
| `:empty`             | Éléments sans enfants                     |

## Variations de pseudo-classes

| Sélecteur         | Description                               |
| ----------------- | ----------------------------------------- |
| `:first-of-type`  | Représente le premier élément de son type parmi un groupe d'éléments frères. |
| `:last-of-type`   | Représente le dernier élément de son type parmi un groupe d'éléments frères. |
| `:only-of-type`   | Représente un élément qui n'a pas de frères du même type. |
| `:first-child`    | Représente le premier élément parmi un groupe d'éléments frères. |
| `:last-child`     | Représente le dernier élément parmi un groupe d'éléments frères. |
| `:only-child`     | Représente un élément sans aucun frère. C'est la même chose que :first-child:last-child ou :nth-child(1):nth-last-child(1), mais avec une spécificité plus faible. |
| `::first-letter`  | Applique des styles à la première lettre de la première ligne d'un conteneur de bloc, mais seulement lorsqu'elle n'est pas précédée par d'autre contenu (comme des images ou des tableaux en ligne). |
| `::first-line`    | Applique des styles à la première ligne d'un conteneur de bloc. |

## <a href="#test-your-css-selector-skill-with-pagetual" data-pagetual-picker>Testez vos compétences en sélecteurs CSS avec Pagetual</a>
![Sélecteur](/img/picker.jpeg)
