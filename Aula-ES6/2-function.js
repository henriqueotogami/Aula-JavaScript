(() => {
this.name = 'arrow function';
const getNameArrowFn = () => this.name;

function getName() {
    return this.name;
}

const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());
}) ();

/* Explicando o código acima:

Linha 1 - Define-se uma função que retorna todo o conteúdo até a linha 17. O retorno é indicado pela seta.

Linha 2 - "This" é um objeto "global". Isso porque está acessível a todas as funções filhas. O atributo name recebe uma string.

Linha 3 - Define-se uma função constante filha que não recebe nada e retorna a propriedade name do objeto this da linha 2.

Linha 5 - define-se uma função filha que não recebe nada e retorna a propriedade name do objeto em que for chamada.

Linha 9 - Define-se um objeto constante do tipo de dicionário. A chave name recebe uma string, enquanto as duas chaves seguintes recebem tanto a nomenclatura da chave quanto seu valor como sendo o retorno de cada função filha definido anteriormente.

Linha 15 - Ao chamar o valor da chave getNameArrowFn, o resultado é "arrow function". Isso porque, quando existe uma arrow function, ao ser chamada em outro lugar, ela sempre retornará o valor do lugar aonde foi criada.
Ou seja, nesse caso, está retornando o valor do objeto da linha dois. E não importa aonde seja chamada nesse código, ela sempre retornará o mesmo valor.

Linha 16 - Para o caso de funções que são declaradas com símbolos de chaves "{}", e não sendo do tipo arrow function, o valor a ser retornado será mutável. Ou seja, será obtido ou apontado conforme o objeto em que foi chamado.
Veja que neste caso, o retorno está sendo feito do nome do usuário que foi criado como objeto. 
Agora, se estivesse dentro de outra função de usuário, retornaria o valor da função desse outro usuário.*/