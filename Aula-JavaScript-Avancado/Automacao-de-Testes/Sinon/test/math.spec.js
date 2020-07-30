const assert = require('assert'); // Módulo nativo do NodeJS
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

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
        expect(value).to.equal(10); 
        done();  
        }); 
    });

    it('Multiply two numbers', function() {
        const math = new Math();

        const obj = {
            name: 'Celso Henrique'
        };

        const obj2 = {
            name: 'Celso Henrique'
        };

        expect(obj)
            .to.have.property('name');
            .to.have.property('name').equal('Celso Henrique');
            .to.equal(obj2);
            .to.deep.equal(obj2);

        expect(math.multiply(value, 5).to.equal(0));
    });

    it.only('Calls req with sem and index values', function() {
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.calledOnce).to.be.true;

        expect(res.load.arg[0].to.equal('index'));

        expect(res.load.arg[0][1].to.equal(10));

    });
});