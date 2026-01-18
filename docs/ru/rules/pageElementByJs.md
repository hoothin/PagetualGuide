# pageElementByJs (over, pageNum)
>Выполняет JavaScript и создаёт элементы для вставки. Нужно вызвать over(eles) для возврата массива. pageNum — текущий номер страницы.

Пример:
--
```json
"pageElementByJs": "fetch(url.replace(/&offset=\\d+/,'') + '&offset=' + (pageNum + 1), {headers:{'X-Requested-With': 'XMLHttpRequest'}}).then(res => res.json()).then(res => {over(eles)})"
```
>Создаёт элементы и возвращает их через `over` после загрузки.

*Если на текущей странице нет nextLink, используйте этот параметр для создания новых элементов.*
