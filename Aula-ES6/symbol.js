const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos
// Resultado abaixo será false
console.log('symbol1 é igual ao symbol2:', symbol1 === symbol2);

// Prevenir conflito entre nome de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Guilherme',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Cabrini da Silva'
}

console.log(user);

// Symbols criam propriedades que não são enumberables
// Ou seja, não conseguimos acessar por operadores padrão como "for". 
//Neste caso, o único retono será do conteúdo do atributo lastName.
for (const key in user) {
    if(user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log('Propriedades do objeto user:', Object.keys(user));
console.log('Valores das propriedades do objeto user:', Object.values(user));

// Exibir todos os symbols de um objeto
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user));

// Acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user:', Reflect.ownKeys(user));

// Criar um enum
const directions = {
    UP   : Symbol(   'UP'   ),
    DOWN : Symbol(   'DOWN' ),
    LEFT : Symbol(   'LEFT' ),
    RIGHT: Symbol(   'RIGHT')
};