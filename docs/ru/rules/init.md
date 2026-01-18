# init (doc, win, iframe, click, enter, input, sleep)
>JavaScript, выполняемый один раз на главной странице или зеркальном iframe. Используйте для одноразовой инициализации или синхронизации состояния.

Пример:
--
```json
"init": "if (iframe == null) return; await click('#btn'); await input('#input', 'here you are'); await enter('#input');"
```
>При извлечении контента в зеркальном iframe сначала кликните `#btn`, затем введите `here you are` в `#input` и нажмите Enter.

*Этот код выполняется только один раз.*
