// Maneira clássica 

function log (value) {
    console.log(value);
}

log ('teste');
// teste


// Função anônima: sem nome.
    // Devem estar atribuídas a uma variável.
    // Ou passada como parâmetro para outra função.

var log = log (value) {
    console.log(value);
}

log ('teste');
// teste


// No JavaScript, as funções são de primeira classe.
// Ou seja, elas podem ser passadas como parâmetros para outras funções.


// return
var sum = function (a, b) {
    return a + b;
};

console.log(sum (5, 5))
// 10


// Arrow Function
    // Também são funções anônimas.
    // Return é implícito

var sum = (a, b) => a + b;

console.log(sum (5, 5));
// 10


// Objetos Literais

var createObj = () => ({ test: 123});1

console.log(createObj());


// Função construtora

function Cra() {
    this.foo = 'bar';
};

console.log(new Car());
// Car {foo: 'bar'}

    // Não podemos usar arrow functions como construtoras
    var Car = () => {
        this.foo = 'bar';
    };

    console.log(new Car());
    // Error Car is not a constructor

// Hoisting
// Capacidade das variáveis e funções definidas com 'var' de serem invocadas de qualquer lugar do código para o topo. Ou seja, é um içamento.

    // Exemplo

    log('teste');

    function log(value) {
        console.log(value);
    }

    // Essa característica de hoisting não funciona com arrow functions


// Contexto de invocação
    // Variável this

    var obj = {
        showContext: function showContext() {
            console.log(this);
        },
        log: function log(value) {
            console.log(value);
        }
    };

    obj.showContext();
    // {showContext: f, log: f}

    // Segundo exemplo
    var obj = {
        showContext: function showContext() {
            this.log('teste');

            setTimeout(function() {
                this.log('after 1000ms');
            }, 1000);
        },
        log: function log(value) {
            console.log(value);
        }
    };

    obj.showContext();
    // this.log is not a function

    // O problema que enfrentamos no segundo exemplo diz respeito ao contexto de invocação da variável this. Considerando que a função TimeOut, assim como request listeners, callback, são funções de escopo global. Dessa forma, não podemos considerar a mudança de escopo, ou de contexto. Para usá-las devemos definir um escopo ou contexto global.
    
        // Segundo exemplo RESOLVIDO
        var obj = {
            showContext: function showContext() {
                this.log('teste');
    
                setTimeout(
                    function() {
                   console.log(this);
                }.bind(this), 1000);
            },
            log: function log(value) {
                console.log(value);
            }
        };
    
        obj.showContext();
        // {showContext: f, log: f}

        // Segundo exemplo modificado
        var obj = {
            showContext: function showContext() {
                var _that = this;
    
                setTimeout(function() {
                   _that.log('after 1000ms');
                }, 1000);
            },
            log: function log(value) {
                console.log(value);
            }
        };
    
        obj.showContext();
        // after 1000ms

        // ARROW FUNCTION SAVES THE DAY
        var obj = {
            showContext: function showContext() {
    
                setTimeout(() => {
                   this.log('after 1000ms');
                }, 1000);
            },
            log: function log(value) {
                console.log(value);
            }
        };
    
        obj.showContext();
        // after 1000ms      
        
        // Para saber o contexto de uma arrow function basta localizar as chaves ao seu redor.