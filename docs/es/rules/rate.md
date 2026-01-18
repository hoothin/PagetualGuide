# rate
>Multiplicador de windowHeight. Puedes establecer 2 o 3 cuando un sitio carga la siguiente página lentamente.

Ejemplo:
--
```json
"rate": 3
```
>Comienza a cargar la siguiente página cuando la distancia entre el scrollTop y el final de la página es menor que `3 * windowHeight`.
