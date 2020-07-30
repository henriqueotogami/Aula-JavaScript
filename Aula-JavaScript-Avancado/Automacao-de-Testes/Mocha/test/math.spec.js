const assert = require('assert'); // Módulo nativo do NodeJS
const Math = require('../src/math.js');

describe('Math class', function() {
    
    // Hooks
    beforeEach(function() {
        value = 0;
    });

    it('Sum two numbers', function(done){
        const math = new Math();
        this.timeout(3000);

        value = 5;

        math.sum(value, 5, value => {
        assert.equal(value, 10);  
        done();  
        }); 
    });

    it.only('Multiply two numbers', function() {
        const math = new Math();

        assert.equal(math.multiply(value, 5), 0);
    });
});