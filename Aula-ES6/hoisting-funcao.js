/* Exemplo do modo incorreto

function fn(){
    log('Hoisting de função');
    function log(value){
        console.log(value);
    }
}

fn();*/

/*No caso de funções, mesmo que seja declarada depois da chamada, o JavaScript vai "içar" a função inteira, e não retornará nenhuma mensagem de erro ou algo do tipo. 
No entanto, por questão de boas práticas, o ideal é sempre declarar antes da chamada.
Veja a sugestão abaixo.*/

function fn(){
    function log(value){
    console.log(value);
    }
    log('Hoisting de função');
}

fn();*/