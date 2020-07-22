// Static
    // Acessar métodos ou atributos sem instanciar

// Exemplo 1
    // Em funções

    'use strict';

    function Person() {}

    Person.walk = function() {
        console.log('walking...');
    }

    console.log(Person.walk());
    // walking...

    // Em classes
    
    'use strict';

    class Person {
        static walk() {
            console.log('walking...');
        }
    }

    console.log(Person.walk());
    // walking...