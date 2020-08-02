const { memberExpression } = require("@babel/types")
const { delay } = require("q")

O que é flux?

É um padrão de projeto para tráfego de dados de maneira unidirecional.

ARQUITETURA

Action -> Dispatcher -> Store -> View -> Action

- Action:
    É como um telégrafo. Ele formata a mensagem a ser enviada.
- Dispacther:
    É como um telefonista. Ele sabe todos os callbacks para diferentes Stores.
- Store:
    É como um gerente super controlador. Ele guarda a informação e todas as alterações têm que ser feitas por ele mesmo, mais ninguém.
- View:
    É como um gerente intermediário (middleware) que recebe as notificações da store e passa os dados para as visões abaixo dela.

A arquitetura em flux tem diversas implementações:

    - Redux (mais popular);
    - Reflux;
    - Mobx;
    - Vuex (baseado em Redux e Elm);
    - NgRx/store (baseada em Redux e RxJS);

Bibliotecas baseadas em Flux:

    - Servem para comunicação entre componentes;
    - Centralizam a informação;
    - "Flux libraries are like glasses: you'll know when you need them." - Dan Abramov