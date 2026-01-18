# url
>RegExp para la URL del sitio objetivo. Para garantizar el rendimiento, la URL se recorta a los primeros 500 caracteres para la comparación.

Ejemplo:
--
```json
"url": "^https://abc\\.com/\\d+"
```
>Cuando la URL coincide con el RegExp `/^https://abc\.com/\d+/`, esta regla entra en vigor.
