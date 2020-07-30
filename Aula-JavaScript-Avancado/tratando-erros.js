class CustomError extends Error {
    constructor({message, data}) {
        super(message);
        this.data = data;
    }
}

try {
    const name = 'Celso Henrique';

    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });

    throw myError;
} catch (err) {
    console.log(err);
    console.log(err, data)
} finally {
    console.log('Keep going...');
}


// Mostrou formas de debuggar o código:
    // 1 - utilizando a ferramenta de desenvolvedor do Chrome;
    // 2 - adicionando a palavra "debugger" no código, na posição desejada a ser parada;
    // 3 - utilizar o console
        // .log();      Mensagem no console do Chrome;
        // .warn();     Formatação de aviso no console do Chrome;
        // .error();    Formatação de erro no console do Chrome;
        // .trace();    Informa aonde o código foi executado. Exemplo: em qual função.
        // .group();    Inicia o agrupamento de mensagens no console do Chrome.
        // .grouEnd;    Finaliza o agrupamento de mensagens no console do Chrome.
        // .time();     Inicia o tempo de execução do código no console do Chrome.
        // .timeEnd();  Finaliza o tempo de execução do código no console do Chrome.
        // .table();    Formatação do erro em tabela no console do Chrome.
        // .assert();   Aguarda que uma comparação seja verdadeira, e se for falsa, executa o console.
    