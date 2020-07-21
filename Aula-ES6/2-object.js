const user = {
    name: 'Guilherme',
    lastName: 'Cabrini da Silva'    
}

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

// Retorna um array de arrays contendo [name_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.defineProperties(user));

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Guilherme Cabrini da Silva'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 26}));

// Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.ber = 'foo';

console.log('\nVariável newObj após as alterações:', newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'Guilherme'};
Object.seal(person);

person.name = 'Guilherme Cabrini';
delete person.name;
person.age = 26;

console.log('\nVariável person após as alterações:', person);