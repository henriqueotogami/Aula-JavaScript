const { classes } = require("istanbul-lib-coverage")

Maneiras de estilização
    
    1 - Inline: é a maneira mais simples de utilizar a estilização em React, através da tag "style".

        Vantagens: 
            - Maneira mais prática e direta;
            - Ajustes rápidos;
            - Testes de estilo;

        Desvantagens:
            - Difícil manutenção.

        Exemplo:

        const divStyle = {
            color: 'blue',
            backgroundImage: 'url(' + imgUrl + ')'
        };
        function HelloWorldComponent() {
            return <div style = {divStyle} >Hello World</div>;
        }
        function App() {
            return (
                <HelloWorld style={{ marginTop: '10px'}} />
            )
        }

    2 - Classes: Maneira mais modularizada de se trabalhar com classes.

        Em JSX, define-se classes pelo atributo "className":
            - Maneira mais prática e direta;

        Desvantagens:
            - Difícil manutenção;
            - Pouca flexibilidade;
            - Conflitos com nomes.

        Exemplo: 

        .div-style {
            color: blue;
            background: url('http://bit.ly/2L8xxHZ');
        }

        import './HelloWorldComponent.css';

        function HelloWorldComponent() {
            return <div className="div-style">Hello World!</div>;
        }
    
    3 - CSS in JS:

        Vantagens:
            - Manutenção:
                - Facilidade para remover CSS;
                - Estilos dinâmicos;
            - Performance;
            - Injeção automática de prefixos vendor;

        Exemplo:

        npm install --save styled-components

        const DivStyle = style.div`
        color: blue;
        background: url(`${props => props.imageUrl}`);
        `;

        function HelloWorldComponent() {
            const url = 'htpps://bit.ly/2L8xxHz';
            return <DivStyle imageUrl={url}>Hello World!</DivStyle>
        }


