// arrays
var arr = ['maçã', 'banana', 'laranja'];

var maca = arr[0];
var banana = arr[1];
var laranja = [2];

// Destructuring assingment
// a decalaração abaixo, simplifica o modelo declarado acima.

var [maca2, banana2, laranja2] = ['maçã', 'banana', 'laranja'];

console.log(maca);
// maça

console.log(maca2);
// maça

//arrays de arrays
var arr = ['maçã', 'banana', 'laranja', ['tomate']];

var maca = arr[0];
var banana = arr[1];
var laranja = [2];
var tomate = arr[3][0]

// Destructuring assingment

var [maca2, banana2, laranja2, [tomate2]] = ['maçã', 'banana', 'laranja', ['tomate']];

console.log(tomate2);
// tomate


// Utilizando objetos

var obj = {
    name: 'Celso'
};

// Destructuring assingment

var {name} = obj;

console.log(name);
// Celso


var obj = {
    name: 'Celso',
    props: {
        age:26
    }
};

var {props: {age}} = obj;

console.log(age);
// 26


// Destructuring de multi níveis utilizando arrays
var obj = {
    name: 'Celso',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
};

var age = obj.props.age;

var {
    props: { age: age2, favoriteColors: [color1, color2]}
} = obj;

console.log(age2);


// Destructuring

var arr = [{name: 'apple', type: 'fruit'}];

var fruit1 = arr[0].name;

var [{name}] = arr;

console.log(name);
// apple


//Destructuring

var arr = [{name: 'apple', type: 'fruit'}];

var fruit1 = arr[0].name;

var [{name: fruitName}] = arr;

console.log(fruitName);
// apple

//Destructuring funciona com qualquer variável const var ou let


// functions
function sum(arr) {
    return arr[0] + arr[1];
}

console.log(sum([5, 5]));
//10

// Destruindo em variáveis
function sum([a, b]) {
    return a + b;
}

console.log(sum([5, 5]));
//10

// Destruindo em variáveis
function sum([a, b] = [0, 0]) {
    return a + b;
}

console.log(sum());
// 0


// Destruindo em variáveis
function sum({a, b}) {
    return a + b;
}

console.log(sum({a: 5, b: 5}));
// 10