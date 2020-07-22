// continue
console.log('\nExemplo de utilização de continue');
const array = [1,2,3,4,5,6];

for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element % 2 === 0) {
        continue;
    }
    console.log(element);
}

//Para o caso acima, ele desconsiderar os valores pares.
//Ou seja, o continue vai executar uma função de "pular"