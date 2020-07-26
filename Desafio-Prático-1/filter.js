// Desafio Prático - Desmistificando as funções map, filter e reduce

    // Primeiro Exemplo:

        for(var i = 0; i < Array.length; i++) {
            if (Array.indexOf(array[i]) === i) {
                models.push(array[i]);
            }
        }

        // O modelo acima foi refeito, conforme mostra abaixo:

        var uniquePoducts = array.filter( function (elem, i, array) {
            return array.indexOf(elem) === i;
        });

        // Array.prototype.filter()

        /*
        Cria um novo array com todos os elementos que passaram no teste da função fornecida.
        */

        var newArray = arr.filter(callback[ , thisArg])

        /* 

        Explicação com emoji:

        filter([hambúrguer, batata-frita, costela, pipoca], isVegetarian)
        => [batata-frita, pipoca]

        */

        // Exemplo dois

        const pets = [
            {
                name: 'rex',
                type: 'dog',
                age: 10
            },
            {
                name: 'miau',
                type: 'cat',
                age: 2
            },
            {
                name: 'gulp',
                type: 'fish',
                age: 1
            },
        ];

        const lessThanFive = (number) => {
            return number < 5;
        }

        const newPets = pets.filter((pet) => {
            return lessThanFive(pets.age);
            // Ou utilizar: return pet.age < 5;
        });

        // Ou utilizar: const newPets = pets.filter(( {age} ) => lessThanFive(age))

        console.log(pets);
        // [ {name: 'rex', type: 'dog', age: 10},
        //   {name: 'miau', type: 'cat', age: 2},
        //   {name: 'gulp', type: 'fish', age: 1} ]

        console.log(newPets);
        // [ {name: 'miau', type: 'cat', age: 2},
        //   {name: 'gulp', type: 'fish', age: 1} ]