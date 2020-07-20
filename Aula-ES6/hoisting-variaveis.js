//Sempre declarar uma função antes de usar.
/*No JavaScript, ao utilizar uma variável antes de ser declarada, não será retornado um erro. E sim, o valor "undefined".*/

function fn(){
    console.log(text);
    var text='Exemplo';
    console.log(text);
}

fn();

/*No exemplo acima, o resultado do primeiro console será "undefined, enquanto do segundo será a variável 'Exemplo'.*/