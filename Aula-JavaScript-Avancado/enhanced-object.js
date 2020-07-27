// Atribuindo valor a propriedade

var prop1 = "DIO";

var obj = {
    prop1: prop1
};

console.log(obj);
// {prop1: "DIO"}



// short hand: Omitindo o valor do lado direito do método

var prop1 = "DIO";

var obj = {
    prop1
};

console.log(obj);
// {prop1: "DIO"}



function method1() {
    console.log('method');
};

var obj = {
    method1
};

obj.method1();
// method called


// Outra forma de lidar com métodos

var obj = {
    sum: function sum(a, b) {
        return a+ b;
    }
};


console.log(obj.sum(1, 5));
// 6

// Poderia ser uma função anônima
var obj = {
    sum: function (a, b) {
        return a+ b;
    }
};


console.log(obj.sum(1, 5));
// 6

// Poderia ser

var obj = {
    sum(a,b) {
        return a + b;
    }
};

console.log(obj.sum(1, 5));
// 6

console.log(obj);
// {sum: f}



// Criando métodos em objetos

var propName = 'teste';

var obj = {};

obj[propName] = 'prop value';

console.log(obj);
// {test: "prop value"}

// Criando métodos em objetos

var propName = "teste" ;

var obj = {
    [propName + 'concat']: 'prop value'
};

console.log(obj);
// {testconcat: "prop value"}
