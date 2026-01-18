# pagePre (response, doc)
>JavaScript, выполняемый после получения ответа по URL nextLink. Можно изменить текст ответа и вернуть его или вернуть массив pageElement.

Пример:
--
```json
"pagePre": "return decodeURI(response).replace(/[\\\\]/g,'')"
```

*Работает только при `action`==0 или `action`==1*
