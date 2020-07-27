// Default Functions Arguments

function multiply (a,b) {
    return a * b;
};

console.log(multiply(5, 5));
// 25

// Caso o segundo parâmetro não seja fornecido, no ES6 existe o recurso de definir um valor padrão para a os argumentos da função. 

function multiply (a, b = 1) {
    return a * b;
};

console.log(multiply(5));

// lazy evaluation
// 

function randomNumber () {
    console.log('Generating a random number...');

    return Math.random() * 10;
}

function multiply (a, b = randomNumber()) {
    return a * b;
};

console.log(multiply(5));