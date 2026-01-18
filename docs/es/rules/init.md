# init (doc, win, iframe, click, enter, input, sleep)
>Código JavaScript que se ejecuta solo una vez en la página principal o en el iframe espejo. Úsalo para tareas de inicialización o para reflejar el estado de la página principal en el iframe.

Ejemplo:
--
```json
"init": "if (iframe == null) return; await click('#btn'); await input('#input', 'here you are'); await enter('#input');"
```
>Al extraer contenido en el iframe espejo, primero haz clic en `#btn`, luego escribe `here you are` en `#input` y finalmente pulsa Enter en `#input`.

*Este código se ejecuta una sola vez.*
