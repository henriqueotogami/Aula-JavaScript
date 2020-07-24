// A sintaxe mais simples:

const arr = [1, 2, 3];
const arr2 = new Array (1, 2, 3);

// Array.of
// Cria uma nova instância de array a partir do número de parâmetros informados

const arr = Array.of(1, 2, 3);

//Array
// Cria uma nova instância de array a partir do número de parâmetros informados

const arr = Array(3);
// [empty x 3]

//No caso acima, é criado um array de três posições vazias

const arr2 = Array(3, 2);
// [3, 2]

//No caso acima, é criado um array somente com os elementos informados

//Array.from
// Cria uma nova instância de array a partir de um parâmetro array-like ou iterable object

const divs = document.querySelectorAll('div');
const arr = Array.from(divs);