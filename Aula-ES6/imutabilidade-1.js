const user={
    name:'Guilherme',
    lastname:'Cabrini da Silva'
};

function getUserWithFullName(user){
    return{
        ...user,
        fullname: `${user.name} ${user.lastName}` // = user.name + ' ' + user.lastName. É uma nova sintaxe
    }
}

const userWithFullName=getUserWithFullName(user);

console.log(userWithFullName)

/*Aqui, neste caso, a função cria um novo objeto. 
Ou seja, teremos dois objetos, o user e o fullname. 
Assim, garantimos que o objeto original esteja intacto, e  apenas criamos a variação que necessitamos, sem reatribuir um novo valor para user.*/