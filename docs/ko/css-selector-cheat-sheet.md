# CSS Selector Cheat Sheet

This document provides a quick reference for CSS selectors.

## Basic Selectors

*   `*`: Selects all elements.
*   `#id`: Selects the element with the specified ID.
*   `.class`: Selects all elements with the specified class.
*   `element`: Selects all elements of the specified type.

## Combinators

*   `selector1 selector2`: Descendant selector. Selects `selector2` elements that are descendants of `selector1`.
*   `selector1 > selector2`: Child selector. Selects `selector2` elements that are direct children of `selector1`.
*   `selector1 + selector2`: Adjacent sibling selector. Selects `selector2` elements that are immediately preceded by `selector1`.
*   `selector1 ~ selector2`: General sibling selector. Selects `selector2` elements that are preceded by `selector1`.

## Pseudo-classes

*   `:hover`: Selects an element when the user mouses over it.
*   `:active`: Selects an element when it is being activated by the user.
*   `:focus`: Selects an element when it has received focus.
*   `:nth-child(n)`: Selects elements that are the nth child of their parent.
*   `:first-child`: Selects elements that are the first child of their parent.
*   `:last-child`: Selects elements that are the last child of their parent.

## Pseudo-elements

*   `::before`: Inserts content before the content of an element.
*   `::after`: Inserts content after the content of an element.
*   `::first-line`: Selects the first line of a block-level element.
*   `::first-letter`: Selects the first letter of a block-level element.

## Attribute Selectors

*   `[attribute]`: Selects elements with the specified attribute.
*   `[attribute=value]`: Selects elements with the specified attribute and value.
*   `[attribute~=value]`: Selects elements with the specified attribute whose value contains a specified word.
*   `[attribute|=value]`: Selects elements with the specified attribute whose value starts with the specified value, followed by a hyphen or not.
*   `[attribute^=value]`: Selects elements with the specified attribute whose value starts with the specified value.
*   `[attribute$=value]`: Selects elements with the specified attribute whose value ends with the specified value.
*   `[attribute*=value]`: Selects elements with the specified attribute whose value contains the specified value.