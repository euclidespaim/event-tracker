# 📺 Event Tracker 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## 🔨 Funcionalidades do projeto

## 🪖 Técnicas e tecnologias utilizadas
Se liga nessa lista de tudo que usaremos nesse treinamento:

- `React`
- `React Hooks`
- `React Router`
- `TypeScript`
- `MUI`
- `JSON Server`

## Abrir e rodar o projeto
Para abrir e rodar o projeto, execute `npm i` para instalar as dependências e `npm start` para inicar o projeto.

Depois, acesse <a href="http://localhost:3000/">http://localhost:3000/</a> no seu navegador.

## 📚 Mais informações do curso

Busque na plataforma da Alura o curso **React: gerenciando estado com Recoil** publicado na Escola Frontend.

## 🎲 Recoil

- Analisar o projeto de calendário criado por outras pessoas
- Criar **atoms** utilizando o [Recoil](https://recoiljs.org/)
    - Atoms são as variáveis que armazenam estado compartilhado do projeto
- Acessar **atoms**
    - Utilizamos o hook `useRecoilValue` para acessar a lista de eventos
- Modificar o estado dos **atoms**
    - Utilizamos o hook `useRecoilState` para modificar o estado dos `atoms` e adcionar um novo evento

## Remover eventos do estado
- Para remover um evento, manipulamos a lista de eventos através do método `filter`. O método `filter` retorna uma nova lista, sem o evento que foi removido.
- Para saber mais sobre métodos de arrays:
    - [indexOf](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf): Retorna o índice do primeiro elemento que corresponde ao valor especificado.
    - [slice](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice): Retorna uma nova lista que contém os elementos da lista original a partir do índice especificado ou de um intervalo.
- Atualizar eventos específicos
    - Vimos que a lista que recebemos é imutável, mas podemos definir uma nova lista reposicionando o evento alterado.
- Hook personalizado
    - Criamos um hook reaproveitável e responsável por atualizar um evento, inclusice encapsulando o recoil.

## O que aprendemos:
- Diminuir o acoplamento da aplicação
    - Ao extrair a comunicação com o `recoil` em **hooks**, estamos desacoplados da lib em si. Se trocarmos por qualquer outra solução, não precisamos mudar o código da aplicação, somente os hooks.
- Aumentar a coesão do código
    - Ao remover a responsabilidade de alterar o estado para os hooks, nossos componentes ficam mais coesos e não precisamo se preocupar com implementações relacionadas a manipular o estado.
- Derivar estados com seletores
    - Mantendo a responsabilidade bem definida para cada parte do sistema.
- Adicionar funcionalidades de forma incremental
    - Primeiro, colocamos o fitro para funcionar. Em seguida, melhoramos a implementação e extraímos a lógica.
- Usamos [json-server](https://github.com/typicode/json-server#getting-started) para emular um servidor de dados no formato de uma API REST. 

