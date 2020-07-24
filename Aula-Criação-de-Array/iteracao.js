    // ITERAÇÃO:

        // for Each 
        // Iteração de cada item dentro de um array

        const arr = [1, 2, 3, 4, 5];

        arr.forEach((value, index) => {console.log(`${index}: ${value}`);
        });
        // [0:1, 1:2, 2:3, 3:4, 4:5} eu acho


        // map
        // Retorna um novo array, de mesmo tamanho, iterando cada item de um array

        const arr = [1, 2, 3, 4, 5];

        arr.map(value => value * 2);
        // [2, 4, 6, 8, 10] 

        // flat
        // Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva, de acordo com a profundidade especificada (depth)

        const arr = [1, 2, [3, 4]];

        arr.flat();
        // [1, 2, 3, 4]

        // flatMap
        // Retorna um novo array assim como a função map e executa um flat de profundidade 1

        const arr = [1, 2, 3, 4];

        arr.flatMap(value => [value * 2]);
        // [2, 4, 6, 8]

        arr.flatMap(value => [[value * 2]]);
        // [[2], [4], [6], [8]]

        // keys
        // Retorna um Array Iterator que contém as chaves paa cada elemento do array

        const arr = [1, 2, 3, 4];

        const arrIterator = arr.keys();

        arrIterator.next();
        // {value: 0, done: false}

        arrIterator.next();
        // {value: 1, done: false}

        arrIterator.next();
        // {value: 2, done: false}

        arrIterator.next();
        // {value: 3, done: true}

        // values
        // Retorna um Array Iterator que contém os valores para cada elemento do array

        const arr = [1, 2, 3, 4]

        const arrIterator = arr.values();

        arrIterator.next();
        // {value: 1, done: false}

        arrIterator.next();
        // {value: 2, done: false}

        arrIterator.next();
        // {value: 3, done: false}

        arrIterator.next();
        // {value: 4, done: true}

        // entries
        // Retorna um Array Iterator que contém os pares chave / valor para cada elemento do array

        const arr = [1, 2, 3, 4]

        const arrIterator = arr.entries();

        arrIterator.next();
        // {value: [0, 1], done: false}

        arrIterator.next();
        // {value: [1, 2], done: false}

        arrIterator.next();
        // {value: [2, 3], done: false}

        arrIterator.next();
        // {value: [3, 4], done: true}

    // BUSCA     

        // find
        // Retorna o primeiro item de um array que satisfaz a condição

        const arr = [1, 2, 3, 4];

        const firstGreaterThanTwo = arr.find(value => value > 2);

        console.log(firstGreaterThanTwo);
        // 3

        // findIndex
        // Retorna o índice do primeiro item de um array que satisfaz a condição

        const arr = [1, 2, 3, 4];

        const firstIndexGreaterThanTwo = arr.findIndex(value => value > 2);

        console.log(firstIndexGreaterThanTwo);
        // 2

        // filter
        // Retorna um novo array com todos os elementos que satisfazem a condição

        const arr = [1, 2, 3, 4];

        const allValuesGreaterThanTwo = arr.filter(value => value > 2);

        console.log(allValuesGreaterThanTwo);
        // [3, 4]

        // indexOf
        // Retorna o primeiro índice em que um elemento pode ser encontrado no array

        const arr = [1, 3, 3, 4, 3];

        const firstIndexOfItem = arr.indexOf(3);

        console.log(firstIndexOfItem);
        // 1

        // lastIndexOf
        // Retorna o último índice em que um elemento pode ser encontrado no array

        const arr = [1, 3, 3, 4, 3];

        const lastIndexOfItem = arr.lastIndexOf(3);

        console.log(lastIndexOfItem);
        // 4

        // includes
        // Retorna um booleano verificando se determinado elemento existe no array

        const arr = [1, 3, 3, 4, 3];

        const hasItemOne = arr.includes(1);
        // true

        const hasItemTwo = arr.includes(2);
        // false

        // some
        // Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição

        const arr = [1, 3, 3, 4, 3];

        const hasSomeEvenNumber = arr.some(value => value % 2 === 0);
        // true

        // every
        // Retorna um booleano verificando se todos os itens de um array satisfazem a condição

        const arr = [1, 3, 3, 4, 3];

        const allEvenNumbers = arr.every(value => value % 2 === 0);
        // false

    //TRANSFORMAÇÃO:
    
        //sort
        // Ordena s elementos de um array de acordo com a condição

        const arr = [1, 3, 2, 5, 4]

        arr.sort();
        // [1, 2, 3, 4, 5]

        // reverse 
        // Inverte os elementos de um array

        const arr = [1, 2, 3, 4, 5];

        arr.reverse();
        // [5, 4, 3, 2, 1]

        // join
        // Junta todos os elementos de um array, separados por um delimitador e retorna uma string

        const arr = [1, 2, 3, 4, 5];

        arr.join('-');
        // "1-2-3-4-5"

        // reduce
        // Retorna um novo tipo de dado iterando cada posição de um array

        const arr = [1, 2, 3, 4, 5];

        arr.reduce((total, value) => total += value, 0);
        // 15