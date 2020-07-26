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

const mapPets = pets.map((pet) => {
    return pet.name
})

console.log(mapPets)

// A função acima retorna um novo array somente com os nomes dos pets

// Abaixo será comparado o desempenho com a função forEach

const forEachPetNames = pets.forEach((pet) => {
    return forEachPetNames.push(pet.name);
})

console.log(forEachPetNames)
// undefined

console.log(pets)

// Para obter um array, semelhantemente ao map, devemos:

const forEachPetNames = []

pets.forEach((pet) => {
    forEachPetNames.push(pet.name)
})

console.log(forEachPetNames);
// ['bolinha', 'mingal', 'rex', 'marrom', 'gulp', 'pé de pano']

