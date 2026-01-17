# Folha de Consulta de Seletores CSS

## Seletores básicos

```css
.css3-class {
  font-weight: bold;
}
```

| Seletor           | Descrição                               |
| :---------------- | :-------------------------------------- |
| ``*``             | Todos os elementos                      |
| ``div``           | Nome da tag = "div"                     |
| ``.class``        | Classe = "class"                        |
| ``#id``           | ID = "id"                               |
| ``[disabled]``    | Possui o atributo "disabled"            |
| ``[role="dialog"]`` | Atributo role = "dialog"                |

## Combinadores

| Seletor             | Descrição                               |
| :------------------ | :-------------------------------------- |
| ``.parent .child``  | Descendente                             |
| ``.parent > .child`` | Descendente direto                      |
| ``.child + .sibling`` | Irmão adjacente                         |
| ``.child ~ .sibling`` | Irmão distante                          |
| ``.class1.class2``  | Possui ambas as classes                 |
| ``.class1,.class2`` | .class1 ou .class2                      |

## Seletores de atributo

| Seletor             | Descrição                               |
| :------------------ | :-------------------------------------- |
| ``[role="dialog"]`` | ``=`` Exato, role = "dialog"            |
| ``[class~="box"]``  | ``~=`` Tem a palavra, classe contém a palavra "box" |
| ``[class\|="box"]`` | ``\|=`` Exato ou prefixo (ex: ``value-``) |
| ``[href$=".doc"]``  | ``$=`` Termina em, href termina em ".doc" |
| ``[href^="/index"]`` | ``^=`` Começa com, href começa com "/index" |
| ``[class*="-is-"]`` | ``*=`` Contém, classe contém a string "-is-" |

## Pseudo-classes

| Seletor              | Descrição                               |
| :------------------- | :-------------------------------------- |
| ``:target``          | Representa um elemento único (o elemento alvo) com um id que corresponde ao fragmento da URL. Ex: ``h2#foo:target`` |
| ``:focus``           | Elemento focado                         |
| ``:active``          | Elemento ativo                          |
| ``:nth-child(3)``    | 3º filho.                               |
| ``:nth-child(3n+2)`` | 2º filho em grupos de 3. Usando uma fórmula (an + b). Descrição: 'a' representa o tamanho do ciclo, 'n' é um contador (começa em 0) e 'b' é um valor de deslocamento. |
| ``:nth-child(-n+4)`` | 4, 3, 2, 1, menos que 5.                |
| ``:nth-last-child(2)`` | Elementos baseados em sua posição entre um grupo de irmãos, contando a partir do final. |
| ``:nth-of-type(2)``  | Elementos baseados em sua posição entre irmãos do mesmo tipo (nome da tag). |
| ``:checked``         | Inputs marcados (checked)               |
| ``:disabled``        | Elementos desabilitados                 |
| ``:enabled``         | Elementos habilitados                   |
| ``:default``         | Elemento padrão em um grupo             |
| ``:empty``           | Elementos sem filhos                    |

## Variações de pseudo-classe

| Seletor             | Descrição                               |
| :------------------ | :-------------------------------------- |
| ``:first-of-type``  | Representa o primeiro elemento de seu tipo entre um grupo de elementos irmãos. |
| ``:last-of-type``   | Representa o último elemento de seu tipo entre um grupo de elementos irmãos. |
| ``:only-of-type``   | Representa um elemento que não possui irmãos do mesmo tipo. |
| ``:first-child``    | Representa o primeiro elemento entre um grupo de elementos irmãos. |
| ``:last-child``     | Representa o último elemento entre um grupo de elementos irmãos. |
| ``:only-child``     | Representa um elemento sem irmãos. Isso é o mesmo que :first-child:last-child ou :nth-child(1):nth-last-child(1), mas com uma especificidade menor. |
| ``::first-letter``  | Aplica estilos à primeira letra da primeira linha de um contêiner de bloco, mas apenas quando não precedida por outro conteúdo (como imagens ou tabelas inline). |
| ``::first-line``    | Aplica estilos à primeira linha de um contêiner de bloco. |

## <a href="#test-your-css-selector-skill-with-pagetual" data-pagetual-picker>Teste sua habilidade com seletores CSS com Pagetual</a>
![Picker](/img/picker.jpeg)
