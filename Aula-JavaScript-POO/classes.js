// Classes
    // ES6
    // Simplificação da herança de protótipos
    // palavra chave class

// Exemplo  1 de transformação de estrutura
    // Em funções
        'use strict';

        function Animal(qtdePatas) {
            this.qtdePatas = qtdePatas;
        }

        function Cachorro(morde) {
            Animal.call(this, 4);
            this.morde = morde;
        }

        const pug = new Cachorro(false);

        console.log(pug);
        // Cachorro {qtdePatas: 4, morde: false}


    // Em classes
        'use strict';

        class Animal {
            construtor(qtdePatas) {
                this.qtdePatas = 4;
            }
        }

        class Cachorro extends Animal {
            construtor (morde) {
                super(4);
                this.morde = 4;
            }
        }

        const pug = new Cachorro(false);
        
        console.log(pug);
        // Cachorro {qtdePatas: 4, morde: 4}

// -------------------------------------------------------------------------

//Exemplo 2 de conversão de funções em classes
    // Em funções
        'use strict';

        function Animal() {}

        Animal.prototype.qtdePatas = 0;
        Animal.prototype.movimentar = function() {}

        function Cachorro(morde) {
            this.qtdePatas = 4;
            this.morde = morde;
        }

        Cachorro.prototype = Object.create(Animal);
        Cachorro.prototype.latir = function() {
            console.log('Au! au!');
        }

        const pug = new Cachorro(false);
        const pitbull = new Cachorro(true);

    //Em classes
        'use strict';
        
        class Animal {
            construtor() {
                this.qtdePatas = 0;
            }
            movimentar() {}
        }

        class Cachorro extends Animal {
            construtor(morde) {
                super();
                this.qtdePatas = 4;
                this.morde = morde;
            }
            latir() {
                console.log('Au1 au!');
            }
        }

        const pug = new Cachorro(false);
        const pitbull = new Cachorro(true);