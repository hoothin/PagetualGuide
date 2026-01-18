# wait (doc)
>Tiempo de espera hasta que la página esté lista. Si estás seguro de que la URL coincide, también puedes usar JavaScript que devuelva un booleano para comprobar la preparación.

Ejemplo 1:
--
```json
"wait": 500
```
>Comprueba cada 500ms antes de que se aplique la regla.

Ejemplo 2:
--
```json
"wait": "await fetch('https://xxx.xxx');let img=doc.querySelector('ul.list img');return img!=null"
```
>Repite la comprobación hasta que el código devuelva true. `doc` es el documento del sitio y el ejemplo comprueba la presencia de `ul.list img`.

*Al configurar `wait`, la regla se aplica cuando la URL coincide.*
