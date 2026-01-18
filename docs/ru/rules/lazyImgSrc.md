# lazyImgSrc
>Атрибут изображения с реальным src. Можно задать как ["lazysrc", "removeProp1,removeProp2"] для удаления свойств изображения.

Пример 1:
--
```json
"lazyImgSrc": "data-cfsrc"
```
>Берёт URL из "data-cfsrc" и устанавливает в src изображения.

Пример 2:
--
```json
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```
>Иногда правильный src сбрасывается свойством — его нужно удалить.
