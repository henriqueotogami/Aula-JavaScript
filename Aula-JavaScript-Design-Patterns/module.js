// Module
/*  
É um pattern que possibilita organizarmos melhor o nosso código, sem a necessidade de expor variáveis globais.
*/

// Exemplo antigo

(function($) {
    // your plugin here
}) (JQuery);

// Modelo novo

class Person {
    constructor(name) {
        this.name = name;
    }
}

export default Person;

// Utilizar Person
import Person from ',/models/person';

// Outro exemplo

let name = 'default';

function getName() {
    return name;
}

function setName(newName) {
    name = newName;
}

module.exports = {
    getName,
    setName
};