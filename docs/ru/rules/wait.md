# wait (doc)
>Время ожидания готовности страницы. Если URL точно совпадает, можно задать JavaScript, возвращающий boolean.

Пример 1:
--
```json
"wait": 500
```
>Проверяет каждые 500 мс перед применением правила.

Пример 2:
--
```json
"wait": "await fetch('https://xxx.xxx');let img=doc.querySelector('ul.list img');return img!=null"
```
>Повторяет проверку, пока код не вернёт true. `doc` — document сайта; пример проверяет `ul.list img`.

*При установке `wait` правило применяется, когда URL совпадает.*
