# exclude
>Selector или XPath элемента, который не должен присутствовать.

Пример 1:
--
```json
"exclude": "div.content"
```
>Игнорирует правило, если на странице есть `div.content`.

Пример 2:
--
```json
"exclude": "//a[contains(@href,'-') and text()='next']"
```
>Игнорирует правило, если на странице есть `//a[contains(@href,'-') and text()='next']`.

*Если контент динамический и nextLink меняется, используйте exclude.*
