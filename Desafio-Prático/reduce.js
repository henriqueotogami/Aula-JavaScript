// Desafio prático

    // Array.prototype.reduce()

    /*
    Executa uma função para cada elemento retornando um único valor de retorno.
    */

    var newArray = arr.map(callback[ , valorInicial]);

    /*
     Explicação com emoji

     reduce([hambúrguer, batata-frita, coxa-de-frango, pipoca], eat)
     => dejeto
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
            weight: 1
        },
        {
            name: "pé de pano",
            type: "horse",
            age: 1,
            weight: 1
        }
    ]
    
    const totalWeight = pets.reduce((total, pet) => {
        //console.log(`Total: ${total}`)
        //console.log(`Pet: ${pet.name}`)
        return total + pet.weight
    }, 0)

    console.log(totalWeight);
    // 40


    // retornando um objeto
    const totalWeight = pets.reduce((total, pet) => {
        return {
            totalAge: total.totalAge + pet.age,
            totalWeight: total.totalWeight + pet.weight
        }
    }, { totalAge: 0, totalWeight: 0})

    console.log(totalWeight);
    // {totalAge: 29, totalWeight: 40}


    // Usando a função do map e filter no reduce
    const totalWeight = pets.reduce((total, pet) => {
        if (pet.type !== 'dog') return total
        return total + pet.weight
    }, 0)

    console.log(totalWeight);
    // 35


    // Encadeando filter e reduce
    const totalWeightDogs = pets
    .filter ((pet)  => {
        return pet.type === 'dog'})
    .reduce((total, pet) => {
        return total + pet.weight
    }, 0);

    console.log(totalWeightDogs);
    // 35