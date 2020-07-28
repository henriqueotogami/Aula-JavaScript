// Rest e Spread Operator

    // modo antigo
    function sum(a, b) {
        var value = 0;

        for (var i = 0; i < arguments.length; i++) {
            value += arguments[i];
        }

        return value;
    };

    console.log(sum(5,5,5,2,3));
    // 20

    // Rest operator: transforma os argumentos em um array
        // Função normal
        function sum(...args) {
            return args.reduce((acc, value) => acc + value, 0);

        };

        console.log(sum(5, 5, 5, 2, 3));

        // arrow function
        const sum = (...rest) => {
        };

            // Podemos também considerar somente os argumentos restantes
            const sum = (a, b, ...rest) => {};        

        // com apply
        const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

        const sum = (...rest) => {
            return multiply.apply(undefined, rest);
        };

        console.log(sum(5, 5, 5, 2, 3));
        // 750

    // Spread operator e sem apply
    // Pode ser usados em strings, arrays, literals objects e iterals objects
    // "Quebra os objetos"

    const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

    const sum = (...rest) => {
        return multiply(...rest);
    };

    console.log(sum(5, 5, 5, 2, 3));
    // 750

    // "Quebrando objetos"

    const str = 'Digital Innovation One';

    function logArgs(...args) {
        console.log(args);
    }

    logArgs(...str);
    //  (22) ["D", "i", "g", "i", "t", "a", "l", " ", "I", "n", "n", "o", "v", "a", "t", "i", "o", "n", " ", "O", "n", "e"]
    /*
    0: "D"
    1: "i"
    2: "g"
    3: "i"
    4: "t"
    5: "a"
    6: "l"
    7: " "
    8: "I"
    9: "n"
    10: "n"
    11: "o"
    12: "v"
    13: "a"
    14: "t"
    15: "i"
    16: "o"
    17: "n"
    18: " "
    19: "O"
    20: "n"
    21: "e"
    length: 22__proto__: Array(0)undefined */

    // Ou utilizando arguments

    const str = 'Digital Innovation One';

    function logArgs() {
        console.log(arguments);
    }

    logArgs(...str);
    //  (22) ["D", "i", "g", "i", "t", "a", "l", " ", "I", "n", "n", "o", "v", "a", "t", "i", "o", "n", " ", "O", "n", "e"]
    /*
    0: "D"
    1: "i"
    2: "g"
    3: "i"
    4: "t"
    5: "a"
    6: "l"
    7: " "
    8: "I"
    9: "n"
    10: "n"
    11: "o"
    12: "v"
    13: "a"
    14: "t"
    15: "i"
    16: "o"
    17: "n"
    18: " "
    19: "O"
    20: "n"
    21: "e"
    length: 22__proto__: Array(0)undefined */


    // Passando argumentos em arrays

    const str = 'Digital Innovation One';
    const arr = [1, 2, 3, 4];

    function logArgs(a, b, c) {
        console.log(a, b, c);
    }

    logArgs(...arr);
    // 1 2 3


    // Construir arrays

    const arr = [1, 2, 3, 4];

    function logArgs(a, b, c) {
        console.log(a, b, c);
    }

    const arr2 = [5, 6, 7].concat(arr);

    console.log(arr2);
    // (7) [5, 6, 7, 1, 2, 3, 4]

    // construindo arrays com spread operator

    const arr = [1, 2, 3, 4];

    function logArgs(a, b, c) {
        console.log(a, b, c);
    }

    const arr2 = [...arr,5, 6, 7];

    console.log(arr2);
    // [1, 2, 3, 4, 5, 6, 7]

    // Shallow object

    const obj = {
        test: 123,
        subObj: {
            test: 123
        }
    };

    const obj2 = { ...obj};

    obj2.subObj.test = 456;

    console.log(obj);
    // {test: 123, subObj: {...}}
        // > subObj: {test: 456}
        // test: 123


    //Sub spread
    const obj = {
        test: 123,
        subObj: {
            test: 123
        }
    };

    const obj2 = { ...obj, subObj: { ...obj.subObj}};

    obj2.subObj.test = 456;

    console.log(obj);
    // {test: 123, subObj: {...}}
        // > subObj: {test: 123}
        // test: 123