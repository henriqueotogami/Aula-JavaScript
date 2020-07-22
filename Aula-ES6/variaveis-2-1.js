var test='example';

(() => {
    console.log(`Valor dentro da função "${test}"`);

    if (true){
        var test='example'; //"Var" não deve estar aqui
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
}
)();

/*Exemplo acima é uma função imediata.

É a mesma coisa que:

function teste(){
    
}()

Ou seja, estamos iniciando a função assim que ela termina.

"Var" não aceita escopo de bloco, somente de função ou  global. Por isso, o correto é declara-lo antes do bloco, conforme sugestão abaixo.

var test='example';

(() => {
    console.log(`Valor dentro da função "${test}"`);
    var test; //"Var" DEVE estar aqui

    if (true){
        test = 'example';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
}
)();
*/