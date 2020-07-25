// Desafio Prático - Desmistificando as funções map, filter e reduce

    // Primeiro Exemplo:

    // Array.prototype.map()

    /*
    Chama o callback para cada elemento e devolve um novo 
    array com a mesma quantidade de itens.
    */

    var newArray = arr.map(callback[ , thisArg])

    /*
    Explicação com emojis

    map([vaca, batata, galinha, espiga-de-milho], cook)
    => [hambúrguer, batata-frita, coxa-de-frango, pipoca]

    */
    const pets = [
        {
            name: "bolinha",
            type: "dog",
            age: 15,
            weight: 30
        },
        {
            name: "mingal",
            type: "cat",
            age: 6,
            weight: 2
        },
        {
            name: "rex",
            type: "dog",
            age: 4,
            weight: 5
        },
        {
            name: "marrom",
            type: "cat",
            age: 2,
            weight: 1
        },
        {
            name: "gulp",
            type: "fish",
            age: 1,
            weight: 0.01
        },
        {
            name: "pé de pano",
            type: "horse",
            age: 1,
            weight: 55
        }
    ]

    /**
     * Map
     * Retorna um novo array com a mesma quantidade de elementos
     * que o array inicial.
     */

    const petNames = pets.map((pet) => {
        return pet.name
    })

    console.log(pets)