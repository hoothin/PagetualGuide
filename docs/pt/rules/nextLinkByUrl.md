# nextLinkByUrl
>Se não houver elemento next, você pode gerar um href a partir da URL atual. [0] é a string RegExp, [1] a string de substituição, [2] o selector/XPath que deve existir, [3] o selector/XPath que NÃO deve existir. Você pode usar {} para cálculos simples (+ - * /).

Exemplo 1:
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)",
    "&page={$1+1}"
]
```
>Cria o próximo link `http://abc.xxx/d?page=2` a partir da URL atual `http://abc.xxx/d?page=1`.

Exemplo 2:
--
```json
"nextLinkByUrl": [
    "&page=(\\d+)&pn=(\\d+)",
    "&page={$1+1}&pn={$2*10}",
    ".article>.item",
    ".disable>button"
]
```
>Cria `http://abc.xxx/d?page=2&pn=10` a partir de `http://abc.xxx/d?page=1&pn=1`. Para se `.article>.item` não existir ou se `.disable>button` aparecer.
