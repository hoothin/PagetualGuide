# include
>Selector или XPath элемента, который должен присутствовать.

Пример 1:
--
```json
"include": "div.content"
```
>Игнорирует правило, если на странице нет `div.content`.

Пример 2:
--
```json
"include": "//a[contains(@href,'-') and text()='next']"
```
>Игнорирует правило, если на странице нет `//a[contains(@href,'-') and text()='next']`.

*Если контент динамический и nextLink меняется, используйте include.*
