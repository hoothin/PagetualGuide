# action
>0 significa cargar la URL e insertar HTML estático; 1 significa cargar con iframe para ejecutar el JavaScript dinámico de la página; 2 significa insertar a la fuerza un iframe completo al final de la página.

Ejemplo:
--
```json
"action": 1
```

+ action: 0
Obtiene la URL de nextLink e inserta HTML estático sin manejo dinámico. Es el valor por defecto y el más rápido.
+ action: 1
Carga la URL en un iframe y toma el contenido tras completarse la carga. Útil cuando el contenido se renderiza después de abrir la página.
+ action: 2
Crea un iframe de la página completa del nextLink, lo recorta y lo inserta al final de la página actual.
