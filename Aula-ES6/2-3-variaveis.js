(() => {
    const test = 'valor função';
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        const test = 'valor if';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();

/*O "const" vai se comportar da mesma forma que explicado no arquivo de let, 2-2-variaveis.js*/