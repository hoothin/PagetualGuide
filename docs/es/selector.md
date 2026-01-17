# Hoja de trucos de selectores CSS

## Selectores básicos

```css
.css3-class {
  font-weight: bold;
}
```

| Selector          | Descripción                               |
| ----------------- | ----------------------------------------- |
| `*`               | Todos los elementos                       |
| `div`             | Nombre de etiqueta = "div"                |
| `.class`          | Clase = "class"                           |
| `#id`             | ID = "id"                                 |
| `[disabled]`      | Tiene el atributo "disabled"              |
| `[role="dialog"]` | Atributo role = "dialog"                  |

## Combinadores

| Selector            | Descripción                               |
| ------------------- | ----------------------------------------- |
| `.parent .child`    | Descendiente                              |
| `.parent > .child`  | Descendiente directo                      |
| `.child + .sibling` | Hermano adyacente                         |
| `.child ~ .sibling` | Hermano lejano                            |
| `.class1.class2`    | Tiene ambas clases                        |
| `.class1,.class2`   | .class1 o .class2                         |

## Selectores de atributo

| Selector           | Descripción                               |
| ------------------ | ----------------------------------------- |
| `[role="dialog"]`  | `=` Exacto, role = "dialog"               |
| `[class~="box"]`   | `~=` Tiene palabra, la clase contiene la palabra "box" |
| `[class\|="box"]`  | `\|=` Exacto o prefijo (ej., `value-`)   |
| `[href$=".doc"]`   | `$=` Termina en, href termina en ".doc"   |
| `[href^="/index"]` | `^=` Comienza con, href comienza con "/index" |
| `[class*="-is-"]`  | `*=` Contiene, la clase contiene la cadena "-is-" |

## Pseudo-clases

| Selector             | Descripción                               |
| -------------------- | ----------------------------------------- |
| `:target`            | Representa un elemento único (el elemento objetivo) con un id que coincide con el fragmento de la URL. Ej., `h2#foo:target` |
| `:focus`             | Elemento enfocado                         |
| `:active`            | Elemento activo                           |
| `:nth-child(3)`      | 3er hijo.                                 |
| `:nth-child(3n+2)`   | 2do hijo en grupos de 3. Usando una fórmula (an + b). Descripción: a representa el tamaño de un ciclo, n es un contador (comienza en 0), y b es un valor de desplazamiento. |
| `:nth-child(-n+4)`   | 4, 3, 2, 1 menos de 5.                    |
| `:nth-last-child(2)` | Elementos basados en su posición entre un grupo de hermanos, contando desde el final. |
| `:nth-of-type(2)`    | Elementos basados en su posición entre hermanos del mismo tipo (nombre de etiqueta). |
| `:checked`           | Entradas marcadas                         |
| `:disabled`          | Elementos deshabilitados                  |
| `:enabled`           | Elementos habilitados                     |
| `:default`           | Elemento predeterminado en un grupo      |
| `:empty`             | Elementos sin hijos                       |

## Variaciones de pseudo-clases

| Selector          | Descripción                               |
| ----------------- | ----------------------------------------- |
| `:first-of-type`  | Representa el primer elemento de su tipo entre un grupo de elementos hermanos. |
| `:last-of-type`   | Representa el último elemento de su tipo entre un grupo de elementos hermanos. |
| `:only-of-type`   | Representa un elemento que no tiene hermanos del mismo tipo. |
| `:first-child`    | Representa el primer elemento entre un grupo de elementos hermanos. |
| `:last-child`     | Representa el último elemento entre un grupo de elementos hermanos. |
| `:only-child`     | Representa un elemento sin hermanos. Esto es lo mismo que :first-child:last-child o :nth-child(1):nth-last-child(1), pero con una especificidad menor. |
| `::first-letter`  | Aplica estilos a la primera letra de la primera línea de un contenedor de bloque, pero solo cuando no está precedida por otro contenido (como imágenes o tablas en línea). |
| `::first-line`    | Aplica estilos a la primera línea de un contenedor de bloque. |

## <a href="#test-your-css-selector-skill-con-pagetual" data-pagetual-picker>Prueba tu habilidad con los selectores CSS con Pagetual</a>
![Selector](/img/picker.jpeg)
