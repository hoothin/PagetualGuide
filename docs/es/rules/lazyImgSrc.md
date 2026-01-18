# lazyImgSrc
>Atributo de imagen que apunta al src real. Puede establecerse como ["lazysrc", "removeProp1,removeProp2"] para eliminar propiedades de la imagen.

Ejemplo 1:
--
```json
"lazyImgSrc": "data-cfsrc"
```
>Obtiene la URL desde "data-cfsrc" y la asigna al src de la imagen.

Ejemplo 2:
--
```json
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```
>A veces al fijar el src correcto se revierte por una propiedad que debe eliminarse.
