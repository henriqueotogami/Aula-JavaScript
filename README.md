# Aula JavaScript ES6 — Bootcamp Desenvolvedor Full Stack Python 2020

> Repositório com exercícios e códigos desenvolvidos durante o Bootcamp Desenvolvedor Full Stack Python 2020 da Digital Innovation One, focados no aprendizado de JavaScript (ES6), React, Promises, Callbacks e programação web.

## 📋 Sobre o Projeto

Este projeto contém uma coleção de programas em JavaScript desenvolvidos como parte do Bootcamp Desenvolvedor Full Stack Python da DIO. Os códigos incluem desde conceitos básicos da linguagem até tópicos avançados como ES6, Programação Orientada a Objetos, Design Patterns, Promises, Callbacks, React e automação de testes com Mocha, Chai e Sinon. O repositório reúne conteúdos de múltiplos instrutores em uma estrutura organizada por temas.

**Autor:** Henrique Matheus Alves Pereira

## 📁 Estrutura do Projeto

### Aula-JavaScript
Conceitos básicos da linguagem:
- Lista, Dicionário, Lista de Dicionários
- Loops (While, For)
- Data, Funções
- Console.log(), Alert(), document.getElementById().innerHTML

### Aula-JQuery-Ajax
Aplicação web que retorna informações de CEP:
- HTML5 + JSON + Bootstrap + JavaScript + jQuery + Ajax
- Uso de `$.ajax({url, type, success})`
- Componentes Bootstrap: Navbar, ProgressBar, Table

### Aula-ES6
Conceitos de ECMAScript 6:
- Closure, Currying, Hoisting (funções e variáveis)
- Imutabilidade
- Variáveis (escopo global, de bloco, de função; var, let, const)
- Tipos: String, Number, Boolean, Null, Undefined, Symbol
- Object, function, array
- Operadores: aritméticos, atribuição, comparação, condicional, lógicos, Spread
- Estruturas condicionais (if, else, switch case)
- Estruturas de repetição (for, while, do...while, for...in, for...of)

### Aula-JavaScript-POO
Programação Orientada a Objetos:
- Classes, Herança
- Modificadores de acesso
- Encapsulamento, Static

### Aula-JavaScript-Design-Patterns
Padrões de projeto:
- Factory, Singleton, Decorator
- Observer, Module

### Aula-Criação-de-Array
Manipulação de arrays:
- Criação de Array
- Manipulação e iteração
- Busca em Arrays
- Transformar elementos em Arrays

### Desafio-Prático-1 (Caio Delgado)
- Explicação da função Map
- Explicação da função Filter
- Explicação da função Reduce
- Introdução a Promises

### Desafio-Prático-2 (Lucas Santos)
Callbacks e Promises:
- syncFull, syncSentence
- callbacksSingleParam, callbacksSingleFunction, callbackUnordered
- callbackHell, callbackRecursive
- promise, promisify, chaining
- throwContinuous, throwStop, multipleCatch
- lock, finally, await, error

### Desafio-Prático-3 (Rogério Munhoz)
- async, await

### Aula-JavaScript-Avancado (Celso Henrique da Silva)
Tópicos avançados:
- Arrow functions, Default function arguments
- Enhanced object literals
- Rest e Spread operators
- Destructuring (React)
- Symbols, Iterators, Generator
- Callback, Promises, Fetch
- Tratamento de erros, debugging no navegador
- **Automacao-de-Testes:** TDD, BDD, Mocha, Chai, Sinon

### Aula-ReactJs (Eduardo Gonçalves Costa)
Introdução ao React:
- Formulário
- Stateful vs Stateless
- Estilização
- Flux, Redux

### SnakeGame (Gabriela Pinheiro)
- Recriação do jogo da cobrinha com JavaScript + HTML5 + CSS3

## 📂 Estrutura do repositório

```
LICENSE
README.md
package-lock.json
Aula-JavaScript/
├── index.html
└── js/
    ├── main.js           # conceitos básicos em JavaScript
    └── main-obsoleta.js
Aula-JQuery-Ajax/
├── index.html            # aplicação de consulta de CEP
└── js/
    ├── main.js
    └── jquery-3.5.1.min.js
Aula-ES6/
├── variaveis-1.js        # escopo, var, let, const
├── closure.js            # closure e currying
├── hoisting-*.js         # hoisting
├── operadores-aritmeticos.js
├── condicional.js
├── controle-repeticao.js # for, while, do...while
└── ...                   # demais arquivos de variáveis e operadores
Aula-JavaScript-POO/
├── classes.js
├── heranca.js
├── encapsulamento.js
├── modificadores-de-acesso.js
└── static.js
Aula-JavaScript-Design-Patterns/
├── factory.js
├── singleton.js
├── decorator.js
├── observer.js
├── module.js
└── questao*.js
Aula-Criação-de-Array/
├── criar-array.js
├── manipulacao.js
└── iteracao.js
Desafio-Prático-1/
├── map.js
├── filter.js
├── reduce.js
├── promise.js
└── map-forEach.js
Desafio-Prático-2/
├── promises.js
└── promises-talk-master/  # exemplos de callbacks e promises
Desafio-Prático-3/
├── original/             # versão original dos exemplos
├── refactored/           # versão refatorada
└── assets/               # arquivos de apoio
Aula-JavaScript-Avancado/
├── functions.js
├── callback-promises.js
├── fetch-async-await.js
└── Automacao-de-Testes/
    ├── Mocha/            # TDD com Mocha
    ├── Chai/             # BDD com Chai
    └── Sinon/            # mocks com Sinon
Aula-ReactJs/
├── src/
├── public/
└── *.jsx                 # exemplos de formulário, flux, redux
SnakeGame/
├── index.html
├── script.js
└── style.css
```

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+)** — Linguagem de programação principal
- **HTML5** — Estrutura das páginas
- **CSS3** — Estilização
- **jQuery** — Biblioteca para manipulação do DOM e Ajax
- **Bootstrap** — Framework CSS para layout responsivo
- **React** — Biblioteca para interfaces de usuário
- **Node.js** — Ambiente de execução (para testes e exemplos)
- **Mocha / Chai / Sinon** — Testes unitários e mocks

## 📝 Funcionalidades Principais

### Consulta de CEP (Aula-JQuery-Ajax)
- Aplicação web que consulta API via Ajax
- Exibe informações de endereço a partir do CEP informado
- Interface com Bootstrap

### Snake Game
- Jogo clássico da cobrinha recriado com JavaScript
- HTML5 Canvas para renderização
- Lógica de pontuação e colisão

### Arrays e Métodos Funcionais
- Exemplos de Map, Filter, Reduce
- Manipulação e iteração de arrays

### Promises e Assíncrono
- Callbacks, Promises, async/await
- Tratamento de erros em operações assíncronas

### React
- Componentes Stateful e Stateless
- Formulários e gerenciamento de estado
- Conceitos de Flux e Redux

## 🚀 Como Executar

### Abrindo páginas HTML no navegador
Para os projetos que usam apenas HTML/CSS/JS:

```bash
# Aula-JavaScript
open Aula-JavaScript/index.html

# Aula-JQuery-Ajax (requer servidor para Ajax funcionar corretamente)
# Use um servidor local, por exemplo:
npx serve Aula-JQuery-Ajax

# SnakeGame
open SnakeGame/index.html
```

### Executando scripts Node.js
Para os exemplos em JavaScript puro (.js):

```bash
# Exemplo: Aula-ES6
node Aula-ES6/closure.js

# Exemplo: Desafio-Prático-1
node Desafio-Prático-1/map.js
```

### Aula-ReactJs
```bash
cd Aula-ReactJs
npm install
npm start
```

### Testes (Mocha/Chai/Sinon)
```bash
cd Aula-JavaScript-Avancado/Automacao-de-Testes/Mocha
npm install
npm test
```

## 📚 Conteúdos Abordados

- ✅ Sintaxe básica de JavaScript
- ✅ Tipos de dados (String, Number, Boolean, Null, Undefined, Symbol)
- ✅ Variáveis e escopo (var, let, const)
- ✅ Operadores e estruturas condicionais
- ✅ Laços de repetição
- ✅ Arrays e métodos funcionais (map, filter, reduce)
- ✅ Funções, closures e currying
- ✅ Programação Orientada a Objetos em JS
- ✅ Design Patterns (Factory, Singleton, Decorator, Observer, Module)
- ✅ Callbacks, Promises e async/await
- ✅ jQuery e Ajax
- ✅ React (componentes, estado, formulários)
- ✅ TDD, BDD e automação de testes
- ✅ Jogos com HTML5 e JavaScript

## ⚙️ Como funciona

### Consulta de CEP
1. O usuário informa um CEP no campo de entrada
2. A aplicação faz uma requisição Ajax para a API ViaCEP
3. Os dados retornados (logradouro, bairro, cidade, UF) são exibidos na interface

### Snake Game
1. O jogo renderiza o canvas e a cobrinha
2. O jogador controla a direção com as setas do teclado
3. A cobrinha se move e come a comida, aumentando de tamanho
4. O jogo termina em caso de colisão com as paredes ou com o próprio corpo

### Promises e Callbacks
- Os exemplos em `Desafio-Prático-2` e `Desafio-Prático-3` demonstram a evolução do código assíncrono: de callbacks para Promises e, por fim, para async/await
- Arquivos numerados (0.promise.js, 1.promisify.js, etc.) mostram conceitos progressivos

## 📄 Licença

Este projeto está licenciado sob a MIT License — veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📖 Referências

- [Digital Innovation One](https://www.dio.me/) — Plataforma do Bootcamp
- Código-fonte nos diretórios `Aula-*` e `Desafio-Prático-*` — Exemplos práticos de JavaScript, React e testes
- [GitHub da instrutora Gabriela Pinheiro](https://github.com/SpruceGabriela) — SnakeGame

---

### Hashtags

#JavaScript #ES6 #React #FullStack #Programming #DIO #Bootcamp #jQuery #Ajax #Promises #Callbacks #DesignPatterns #POO #TDD #BDD #Mocha #Chai #Sinon #OpenSource #GitHub #LearningToCode #WebDevelopment

### Meta Keywords

```
JavaScript, ES6, React, Bootcamp, Digital Innovation One, DIO, programação web,
jQuery, Ajax, Promises, async await, callbacks, design patterns, POO,
TDD, BDD, Mocha, Chai, Sinon, full stack, desenvolvimento web, código exemplo
```
