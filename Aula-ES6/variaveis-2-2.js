(() => {
    let test='valor função';
    console.log(`Valor dentro da função "${test}"`);

    if(true){
        let test='valor if';
        console.log(`Valor dentro do if "${test}"`);
    }
    console.log(`Valor após a execução do if "${test}"`);
})();

/* A declaração let respeita o escopo de bloco.

Isso quer dizer que o valor da variável test dentro do if será único. Ou seja, só vai valer para dentro do If.

Quando a instrução if terminar, o próximo console.log vai utilizar o valor da variável global, que neste caso será igual ao valor atribuído no primeiro console.log.*/