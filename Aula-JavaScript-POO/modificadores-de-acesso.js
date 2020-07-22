// Modificadores de acesso
    // Atualmente não existe para o JavaScript
    // A versão 12 do NodeJs já considera, mas não tem suporte nos browsers
    // Controle do que é privado e do que é público

// Exemplo 1 de funções para modificadores de acesso
    // Em funções
        'use strict';

        function Person(initialName) {
            let name = initialName;
            
            this.getName = function() {
                return name;
            }
            
            this.setName = function(newName) {
                name = newName;
            }
        }

        const p = new Person('Guilherme');

    
        'use strict';

        console.log(p);
        // Person {getName: f, setName: f}

        p.getName();
        // 'Guilherme'

        p.name;
        // undefined

        p.setName('Thiago');
        p.getName();
        // 'Thiago'
    
    //Implementação que funciona no NodeJS versão 12

    'use strict';

    class Person {
        #name = '';

        construtor(initialName) {
            this.#name = initialName;
        }

        setName(name) {
            this.#name = name;
        }

        getName() {
            return this.#name
        }
    }

    'use strict';

    console.log(p);
    // Person {}

    p.getName();
    // 'Guilherme'

    p.name;
    // undefined

    p.setName('Thiago');
    p.getName();
    // 'Thiago'