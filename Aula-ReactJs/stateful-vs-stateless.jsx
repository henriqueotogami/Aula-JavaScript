Stateful vs Stateless

Stateful: usa estados;

    Possui gerenciamento de estados no componente;
    Construídos usando classes em JS;

    Ciclo de vida
        - Initialization:
           - Setup do props
           - Estados iniciais do componente

        - Mounting;
            - WillMounting;
            - Render;
            - DoMount;

        - Updation;
            - Props:
                - Received props;
                - Should do Component update;
                - Component will update;
                - Render;
                - Component did update.

            - States:
                - should do Component update;
                - Component will update;
                - Render;
                - Component did update.

        - Unmounting:
            - Component will update


Stateless: não usa estados;

    Não possui gerenciamento de estados no componente.

    Construídos usando funções em JS.

    A nomenclatura foi atualizada.
        Class components
        Function Components

    Com hooks, estados são amnipuláveis em function components!