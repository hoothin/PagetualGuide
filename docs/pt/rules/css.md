# css
>Adiciona CSS para mostrar elementos ocultos etc. Se começar com `inIframe:`, o CSS só afeta o next iframe.

Exemplo 1:
--
```json
"css": ".card-lazy{display:none}"
```

Exemplo 2:
--
```json
"css": "inIframe:.card-lazy{display:none}"
```
>Adiciona CSS apenas nos iframes seguintes.

Exemplo 3:
--
```json
"css": ".card-lazy{display:block}inIframe:.card-lazy{display:none}"
```
>Adiciona `.card-lazy{display:block}` na página atual e `.card-lazy{display:none}` nos iframes seguintes.
