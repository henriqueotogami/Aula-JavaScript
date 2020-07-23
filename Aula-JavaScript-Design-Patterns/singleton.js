/*
Singleton:
    O objetivo desse pattern é criar uma única instância de uma função construtora e retorná-la toda vez em que for necessário utilizá-la.

    *JQuery
*/

var settings = {
    api: 'http://localhost',
    trackJsToken: '12345'
}

function MyApp() {
    if(!MyApp.instance) {
        MyApp.instance = this;
    }
    return MyApp.instance;
}

// Outro exemplo

function Pessoa() {
    if(!Pessoa.instance) {
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}

const p = Pessoa.call({ name: 'Guilherme'});

const p2 = Pessoa.call({ name: 'Custom Name'});

console.log(p);
//{ name: 'Guilherme'}

console.log(p2);
//{ name: 'Guilherme'}