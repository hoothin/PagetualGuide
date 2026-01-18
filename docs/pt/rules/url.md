# url
>RegExp para a URL do site alvo. Para garantir desempenho, a URL é truncada nos primeiros 500 caracteres para comparação.

Exemplo:
--
```json
"url": "^https://abc\\.com/\\d+"
```
>Quando a URL corresponde ao RegExp `/^https://abc\.com/\d+/`, esta regra entra em vigor.
