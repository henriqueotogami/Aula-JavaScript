// push
// Adicionar um ou mais elementos no final do array e retorna o tamanho do novo array

const arr = ['banana', 'melancia', 'abacate'];
const arrLength = arr.push('acerola');

console.log(arrLength);
// 4

console.log(arr);
// ['banana', 'melancia', 'abacate', 'acerola']

// pop
// Remove o último elemento de um array e retorna o elemento removido

const arr = ['banana', 'melancia', 'abacate'];
const removedItem = arr.pop();

console.log(removedItem);
// 'abacate'

console.log(arr);
// ['banana', 'melancia']

// unshift
// Adicionar um ou mais elementos no início do array e retorna o tamanho do novo array

const arr = ['banana', 'melancia', 'abacate'];
const arrLength = arr.unshift('acerola');

console.log(arrLength);
// 4

console.log(arr);
// ['acerola', 'banana', 'melancia', 'abacate' ]

// shift
// Remove o primeiro elemento de um array e retorna o elemento removido

const arr = ['banana', 'melancia', 'abacate'];
const removedItem = arr.shift();

console.log(removedItem);
// 'banana'

console.log(arr);
// ['melancia', 'abacate' ]

// concat
// Concatena um ou mais arrays retornando um novo array

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const novoArr = arr.concat(arr2);

console.log(arr);
// (3) [1, 2, 3]

console.log(arr2);
// (3) [4, 5, 6]

console.log(novoArr);
// (6) [1, 2, 3, 4, 5, 6]

// slice
// Retorna um novo array "fatiando" o array de acordo com início e fim

const arr = [1, 2, 3, 4, 5, 6]

arr.slice(0, 2);
// [1, 2]

arr.slice(2);
// [3, 4, 5]

arr.slice(-1);
// [5]

arr.slice(-3);
// [3, 4, 5]

// splice
// Altera um array adicionando novos elementos enquanto remove elementos antigos

const arr = [1, 2, 3, 4, 5];

arr.splice(2)
// [3, 4, 5]

console.log(arr);
// [1, 2]

arr.splice(0, 0, 'first');
// []

console.log(arr);
// ["first", 1, 2]