# pageElementByJs (over, pageNum)
>Usa JavaScript para crear los elementos a insertar. Debes llamar a over(eles) para devolver el arreglo de elementos. pageNum es el número de página actual.

Ejemplo:
--
```json
"pageElementByJs": "fetch(url.replace(/&offset=\\d+/,'') + '&offset=' + (pageNum + 1), {headers:{'X-Requested-With': 'XMLHttpRequest'}}).then(res => res.json()).then(res => {over(eles)})"
```
>Crea elementos y usa `over` para devolverlos tras la carga.

*Cuando no hay nextLink en la página actual, puedes usar esta opción para crear nuevos elementos a insertar.*
