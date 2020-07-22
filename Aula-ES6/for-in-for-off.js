let arr = [3, 5, 7];
arr.foo = 'hello';

// somente considera as propriedades
for (let i in arr) {
    console.log(i); // 0, 1, 2, foo
}

// somente considera os enumeráveis
for (let i of arr) {
    console.log(i); // 3, 5, 7
}