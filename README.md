<img align="center" alt="Pokedex logo" height="150" width="300" src="https://github.com/marislaradev/pokedex/assets/121054908/6587846f-8925-4c5b-aaa1-91726ebe6b32">

A Pokédex foi desenvolvida como o desafio final do curso de Front-End do Dev em Dobro.

## Propósito

Fornecer uma interface para os usuários explorarem e visualizarem informações sobre Pokémon, permitindo que eles filtrem e naveguem pela lista de Pokémon disponíveis, além de oferecer a opção de alternar entre os temas claro e escuro para personalizar a experiência de uso. 

## Funcionalidades

1. **Listagem de Pokémon:** Na página Home a aplicação permite listar os Pokémons em uma lista. 

2. **Filtragem por Tipo:** Os usuários podem filtrar os Pokémons da lista usando o seletor de tipos disponível na página Home.

3. **Carregamento Adicional:** A aplicação possui um botão "Load More" que permite uma navegação contínua pela lista de Pokémon, carregando mais Pokémons à medida que o usuário avança.

4. **Detalhes do Pokémon:** A aplicação possui uma página de detalhes para cada Pokémon, que é acessível clicando em um Pokémon na lista. Na página de detalhes é possível ver informações dos movimentos do Pokémon, suas habilidades e também a descrição das habilidades.

5. **Tratamento de Erros:** Há tratamento de erros para casos em que a lista de Pokémon está vazia ou não pode ser carregada.

6. **Feedback Visual:** A aplicação fornece feedback visual ao usuário sobre o estado da lista de Pokémon, indicando se está vazia, se todos os Pokémon foram carregados ou se há mais para carregar.

7. **Responsividade:** A interface é responsiva, ajustando-se a diferentes tamanhos de tela para uma boa experiência do usuário em dispositivos móveis e desktops.
   
8. **Alternador de temas:**  O tema pode pode ser alternado entre claro e escuro para melhorar a experiência do usuário, tornando a aplicação mais acessível e adequada para diferentes condições de iluminação ou preferências pessoais.

## Ferramentas Utilizadas

- **Linguagem de Programação:** JavaScript, porque é uma linguagem amplamente utilizada no desenvolvimento web e possui suporte robusto para criação de interfaces interativas e dinâmicas.

- **Framework:** React.js, porque é uma biblioteca JavaScript popular para construção de interfaces de usuário, oferecendo um modelo de desenvolvimento declarativo, componentizado e eficiente, facilitando a criação de interfaces reativas e escaláveis.

- **Outras Ferramentas:** 
    - CSS Modules: Utilizado para modularizar e encapsular estilos CSS, evitando conflitos de nomenclatura e facilitando a manutenção do código CSS.
    - Fetch API: Utilizada para fazer requisições HTTP para a PokeAPI e obter os dados necessários para exibir os Pokémon na aplicação.
    - Context API: Utilizamos a Context API do React para gerenciar o tema da aplicação de forma global. Isso permite que o tema seja facilmente acessível em qualquer parte da aplicação, garantindo consistência na aparência e facilitando futuras atualizações ou personalizações de tema.
    - PokeAPI: Fonte de dados externa que fornece informações sobre Pokémon via API RESTful. É utilizada para obter os dados dos Pokémon exibidos na aplicação.
    - React Router: Utilizado para gerenciar a navegação entre as diferentes páginas da aplicação, permitindo que o usuário navegue de forma fluida entre a página inicial e outras páginas, como a de detalhes do Pokémon.
    - Vite: O Vite é um bundler e servidor de desenvolvimento extremamente rápido para aplicações web modernas. Ele foi escolhido para este projeto devido à sua capacidade de fornecer uma experiência de desenvolvimento rápida, com recarregamento rápido e suporte para módulos ES, permitindo uma configuração mínima e uma rápida inicialização do projeto. Além disso, o Vite oferece suporte nativo ao React e outras estruturas, tornando-o uma escolha ideal para o desenvolvimento de aplicações React modernas.

## Decisões Adotadas

**Botão de alternar o tema:** Como alguém que ❤ Pokémon desde a infância, eu decidi personalizar o botão de alternar o tema fazendo uma homenagem a dois Pokémons e seus principais movimentos.<br>
![pikachu-light](https://github.com/marislaradev/pokedex/assets/121054908/ad086ee7-da70-4111-aa7b-20a661474546)
  Tema claro: Pikachu com o seu movimento Thunderbolt. <br>
  ![umbreon-dark](https://github.com/marislaradev/pokedex/assets/121054908/f9f3683a-42d0-445e-9ac6-bd7375f993d7)
   Tema escuro: Umbreon com o seu movimento Mean Eyes.

**Esquema de cores:**  O esquema de cores foi definido a partir das cores do logo do Pokémon, para que ficasse mais harmonioso. 

**Emojis:** Para alegrar e deixar a aplicação mais fofa, usei os emojis e ícones da icons8. https://icons8.com.br/ 

**Logo da Pokédex:** Utilizei o Text Studio para criar a escrita com a fonte característica do Pokémon. https://www.textstudio.com/

**Linguagem**: Optei por utilizar o inglês na aplicação toda, pois a PokeAPI ainda não tem tradução para PT-BR. Então achei que ia ficar mais uniforme manter a aplicação toda em inglês e também aproveitar e praticar o idioma. 

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (v14 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Passos

1- **Clone o repositório:**

   ```bash
   git clone https://https://github.com/marislaradev/pokedex
  ```

 2- **Instale as dependências:**

Navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências:
   ```bash
   cd pokedex
   npm install
  ```
3- **Rodando o Projeto:**

Depois de instalar as dependências, você pode iniciar o servidor de desenvolvimento com o seguinte comando:
 ```bash
   npm run dev
  ```
Isso iniciará o projeto localmente. Abra o link que vai aparecer no seu terminal para ver a aplicação em execução.

#### ✨ Obrigada por ter lido até aqui, clona aí e personalize a sua Pokédex! 💖



