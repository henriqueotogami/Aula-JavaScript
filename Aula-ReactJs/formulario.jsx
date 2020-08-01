Formulários: Mantém um estado interno.

    Exemplo:

    <form>
        <label>
            Nome:
            <input type="text" name="nome"/>
        </label>
        <input type="submit" value="Enviar"/>
    </form>

Em HTML, <input>, <textarea> e <select> têm um estado interno.

Em React, podemos controlar o estado:
    state;
    setState;

Componente controlado

    Tanto select, input ou textarea aceitam um atributo value.

    Podemos mudar esse valor usando o atributo onChange.

Componente não-controlado

    A tag input é read-only

Bibliotecas

    Formik
    Redux-forms