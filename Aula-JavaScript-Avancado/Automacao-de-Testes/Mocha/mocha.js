// Mocha é uma ferramenta para testar o código.
// Mais conhecido como test runner
// Pensado para ser descritivo e segue os padrões do BDD
// Para escrever os seus testes de uma maneira expressiva

// npm init -y
// iniciar o projeto no terminal

// npm i --save-dev mocha
// Instalar a biblioteca

// Alterar o scrip JSON no arquivo package.json
// atributo "test": recebe o valor "mocha"

// Mocha busca os arquivos no diretório raiz do projeto com o nome "test"

// mkdir test
// emacs test/math.spec.js
// "math.spec.js" segue o padrão TDD

// Tempo máximo de execução do TimeOut no mocha é de 2000ms = 2s

// Utilizando a função It
    // Método only: executa apenas aquela função de testes
    // Método skip: pula apenas aquela função de teste
    // Hooks: formas de executar código e evitar repetições
        // After
        // AfterEach
        // Before
        // BeforeEach