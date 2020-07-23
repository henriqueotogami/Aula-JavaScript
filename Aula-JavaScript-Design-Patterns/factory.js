/*- Factory:
    - Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o "new", são consideradas funções factory (fábrica). 

    - Exemplo do que NÃO É uma Factory:*/
        function FakeUser() {
            this.name: 'Guilherme';
            this.lastName: 'Cabrini';
        }

        // não é Factory
        const user = new FakeUser();

// - Exemplo do que é uma Factory:
        function FakeUser() {
            return{
                name: 'Guilherme',
                lastName: 'Cabrini'
            }
        }

        // Factory
        const user = FakeUser();

//Outro exemplo

function Pessoa(customProperties) {
    return{
        name: 'Guilherme',
        lastName: 'Cabrini',
        ...customProperties
    }
}

const p = Pessoa({name: 'Custom Name', age:27});

console.log(p);
//{name: 'Custom Name', lastName: 'Cabrini', age:27}