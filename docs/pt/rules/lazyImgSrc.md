# lazyImgSrc
>Atributo da imagem que aponta para o src real. Pode ser definido como ["lazysrc", "removeProp1,removeProp2"] para remover propriedades da imagem.

Exemplo 1:
--
```json
"lazyImgSrc": "data-cfsrc"
```
>Obtém a URL de "data-cfsrc" e define como src da imagem.

Exemplo 2:
--
```json
"lazyImgSrc": ["data-lazy-src", "removeProp1,removeProp2"]
```
>Às vezes, ao definir o src correto, ele é revertido por uma propriedade que precisa ser removida.
