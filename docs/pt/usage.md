# Manual do usuário
## 1 Primeiros passos
Visite [Bing](https://bing.com/search?q=pagetual) e role para baixo, a próxima página será costurada automaticamente.

## 2 Divisor de página
Ao virar as páginas, haverá barras de espaço entre elas. O ícone de Tai Chi à esquerda da barra de espaço serve para retornar ao topo da página, e o ícone à direita serve para ir para o final da página. A palavra "Page" no meio é o link da próxima página.
### 2.1 Experiência imersiva sem interrupções
A barra divisora de página pode ser configurada para ficar oculta na página de configuração. Experiências imersivas podem ser alcançadas ocultando os divisores e adicionando barras laterais.
### 2.2 Número de página personalizado
Se houver um `pageNum` definido na regra atual. Você pode clicar no número após `Page` para inserir um número de página para pular para essa página.
### 2.3 Parar paginação
Clicar na barra divisora de página pode parar a paginação.

## 3 Menu de comandos
Clique no ícone do Tampermonkey e você verá três opções em "Pagetual".
### 3.1 Configurar
Clique para ir para a página de configuração, onde a configuração pessoal e a personalização de regras estão todas lá.
### 3.2 Desativar no site
Clique para desativar o Pagetual no site atual.
### 3.3 Forçar a junção
Clique aqui se a regra inteligente estiver errada. O script ativará o modo de junção forçada, todo o conteúdo da próxima página será unido ao rodapé se você escolher `join full body`, caso contrário, o Pagetual carregará conteúdo dinâmico em um iframe e os retornará.
### 3.4 Atualizar regras online
Clique para atualizar os itens de regra que você importou online, e o Pagetual atualizará automaticamente as regras online a cada dois dias por padrão.

## 4 Configurações de Personalidade
Após acessar a página de configuração, você pode fazer configurações pessoais, como o valor de transparência do divisor, histórico de escrita, abrir uma nova página de aba e se o clique duplo deve ocultar o divisor, entre outros.

Você pode importar links de regras escritos por outras pessoas, ou pode simplesmente personalizar as regras na caixa de entrada por conta própria. As regras de link suportam ordenação e atualização em tempo real. Clique nas setas para cima e para baixo na frente do link para ordenar, e clique no tempo de atualização para atualizar as regras.
### 4.1 Histórico de escrita
Após esta opção ser ativada, o Pagetual escreverá a URL da próxima página no registro do histórico toda vez que a página for virada, de modo que, ao clicar no link e retornar à página anterior, ele retornará ao número da página que você navegou pela última vez.
### 4.2 Abrir uma nova aba
Após habilitar esta opção, todos os links inseridos na página atual serão abertos em novas abas.
### 4.3 Pré-carregar a próxima página para acelerar a navegação
Após abrir, ao ler a página atual, o Pagetual pré-carregará todas as imagens da próxima página antecipadamente.

## 5 [Regras personalizadas](/rule.html)
![Custom rules](https://s3.bmp.ovh/imgs/2024/01/10/fa4f00c3e9f77878.gif)
### 5.1 Captura visual
Após clicar em `Edit rule for current`, uma caixa azul aparecerá na página atual seguindo o mouse. Neste momento, clique no elemento correspondente para capturar o conteúdo que você deseja unir e convertê-lo para o código do seletor.
### 5.2 Ajustar o seletor
Após selecionar o conteúdo do corpo, passe o mouse sobre o código do seletor para expandir o texto inteiro, você pode clicar para alternar para o nó pai. Ao inserir manualmente um seletor na caixa de entrada, verifique o elemento correspondente do seletor clicando no botão de verificação `√`.
### 5.3 Iniciar edição
Quando estiver pronto, basta clicar no ícone de lápis para ir para a página de configuração e começar a editar a regra.
### 5.4 Sua primeira regra personalizada
Por exemplo
```json
   {
     "name":"beauty", // nome da regra
     "url":"^https://www\.beautyxxx\.com/", // regularidade de correspondência correspondente à URL da página
     "pageElement":"p>img" // O elemento que você deseja inserir na próxima página
   }
```
Outros itens podem ser adicionados conforme necessário, como "seletor para o botão da próxima página", "método de captura de elementos", "intervalo de tempo de virada de página", etc.
### 5.5 Mover a janela do menu
Arraste e solte o título do menu para mover a janela do menu.
### 5.6 Pausar a varredura visual
Clique no ícone do Tai Chi no lado esquerdo da barra de título do menu para pausar a varredura visual.
### 5.7 Edição Rápida
Clique no ícone 🔽 abaixo para abrir a função de edição rápida, verifique e copie o seletor através da caixa de entrada do seletor acima, cole-o no atributo correspondente e clique no ícone de salvar após a conclusão.
