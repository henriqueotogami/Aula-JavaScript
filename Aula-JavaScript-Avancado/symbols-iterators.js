// Symbols
    // É a maneira de gerar um identificador único
    // Não pode ser invocado utilizando new
    // well know symbols = propriedades

    const uniqueID = Symbol('Hello');

    Symbol.iterator;
    Symbol.split;
    Symbol.toStringTag;

    const arr = [1, 2, 3, 4];

    const it = arr[Symbol.iterator]();

    while (true) {
        let { value, done} = it.next();
        if(done) {
            break;
        };
        console.log(value);
        // 1
        // 2
        // 3
        // 4
    };

    // segundo exemplo

    const arr = [1, 2, 3, 4];

    for (let value of arr) {
        console.log(value);
    };

    // terceiro exemplo
    const arr = [1, 2, 3, 4];

    console.log(arr[Symbol.iterator]().next());

    const obj = {
        values: [1, 2, 3, 4],
        [Symbol.iterator](){
            let i = 0;

            return {
                next: () => {
                    i++;

                    return {
                        value: this.values[i - 1],
                        done: i > this.values.length
                    };
                }
            };
        }
    };

    for (let value of obj) {
        console.log(value);
    };

    // ou

    const arr2 = [...obj];

    console.log(arr2)

    // GENERATORS
    // Funções com pausa

    function* hello() {
        console.log('Hello');
        yield 1;
        //

        console.log('From');
        yield 2;


        console.log('Function!');
    }

    const it = hello();

    console.log(it.next());
    // Hello
    // {value: 1, done: false}
    console.log(it.next());
    // From
    // {value: 2, done: false}
    console.log(it.next());
    // Function!
    // {value: undefined, done: true}


    // segundo exemplo

    function* naturalNumbers() {
        let number = 0;
        while (true) {
            yield number;
            number++;
        }
    }

    const it = naturalNumbers();

    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());

    // Adicionando Generators em Symbols para que sejam iterators

    const obj = {
        values: [1, 2, 3, 4],
        *[Symbol.iterator]() {
            for (var i = 0; i < this.values.length; i++) {
                yield this.values[i];
            }
        }
    };

    for (let value of obj) {
        console.log(value);
        // 1
        // 2
        // 3
        // 4
    };