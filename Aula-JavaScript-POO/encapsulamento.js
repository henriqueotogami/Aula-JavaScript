// Encapsulamento
    // Serve para ocultar detalhes do funcionamento interno

//Exemplo 1 
    // Em funções

    'use strict';

    function Person(initialName) {
        var name = initialName;

        Object.defineProperty(this, 'name', {
            get: function() {
                return name;
            },
            set: function(value) {
                name = value;
            }
        });    
    }

    // Na nova versão

    'use strict';

    class Person {
        #name = '';

        construtor(name) {
            this.#name = name;
        }

        get name() {
            return this.#name;
        }

        set name(name) {
            this.#name = name;
        }
    }