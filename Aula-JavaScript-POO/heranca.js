// Herança
    // baseada em protótipos;
    // prototype
    // __proto__
    // construtor

'use strict';

const myText = 'Hello prototype!';

myText.split(' ') // <- de onde vem esse "split" ?

//---------------------------------------------------

/* String é uma função construtora. 
Toda função construtora tem um prototype atrelado a ela.
*/
'use strict';

const myText = String('Hello prototype!');

console.log(myText.__proto__.split);
// f split () { [native code]}

//---------------------------------------------------

'use strict';

console.log(String.prototype.split);
// f split( {[native code]}),

//---------------------------------------------------

'use strict';

const myText = String('Hello prototype!');

console.log(myText.__proto__.split === String.prototype.split);
// true

console.log(myText.constructor === String);
// true

//---------------------------------------------------

__proto__ -> prototype _> construtor

const myText = 'Hello prototype!';

myText.construtor -> String
myText.__proto__ -> String.prototype

//---------------------------------------------------

'use strict';

function Animal() {}

console.log(Animal.constructor);
// f function() {[native code]}

// A guide to prototype-based class inheritance in JavaScript

f Animal.constructor -> f Function -> Function.prototype.constructor -> f Object() {} -> Object.prototype = null

//---------------------------------------------------

'use strict';

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.qtdePatas);
// 4

//---------------------------------------------------

new Foo(...);

/* 
O que ocorre?

1 - Um novo objeto é criado, herdando Foo.prototype;

2 - A função construtora Foo é chamada com os argumentos especificados e com o 'this
 vinculado ao novo objeto criado;

3 - Caso a função construtora tenha um retorno explícito, será respeitado o seu 'return'. Senão, será retornado o objeto criado no passo1.

 */

 //---------------------------------------------------

function Pessoa(name) {
    this.name = name;
}

const p = new Pessoa ('Guilherme')

console.log(p)
// Pessoa {name: 'Guilherme'}

//---------------------------------------------------

function Pessoa(name) {
    this.name = name;

    return {
        name: 'Teste'
    };
}

const p2 = new Pessoa ('Guilherme');

console.log(p2);
// {name: 'Teste'}

//---------------------------------------------------

'use strict';

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.__proto__ === Animal.prototype);
// true

console.log(Animal.__proto__ === Function.prototype);

//---------------------------------------------------

'use strict';

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro instanceof Animal);
// true 

console.log(cachorro instanceof Function);
// false

//---------------------------------------------------

'use strict';

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function cachorro(morde) {
    Animal.call(this, 4);
    this.morde = morde;
}

const pug = new Cachorro(false);

console.log(pug);
// Cachorro {qtdePatas: 4, morde: false}

//---------------------------------------------------

'use strict';

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
    this.movimentar = function() {}
}

function Cachorro(morde) {
    Animal.call(this, 4);

    this.morde = morde;
    this.latir = function() {
        console.log('Au! au!');
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

//---------------------------------------------------

'use strict';

function Animal() {}

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {}

function Cachorro(morde) {
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function() {
    console.log('Au! au!');
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

//---------------------------------------------------