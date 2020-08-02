REDUX

Foi criado por Dan Abramov e Andrew Clark em 2015
Redux é uma implementação de Flux
    - Mas, possui algumas diferenças.

    React -> Action -> Store -> Reducer
    
    Três princípios:
        1 - Single source of truth: Uma única store
        2 - State é read-only
        3 - Mudanças são feitas com pure functions 

    Action: São como no Flux. Mas, aqui não enviam a action em si para o dispatcher. Retornam um objeto de action formatado;

    Store: Em Flux são diversas, mas no Redux é única. Aqui, a store cuida de toda a árvore de estados. 

    Reducer: Cuidam de descobrir qual estado muda. Em redux não há dispatcher (simplifica e divide o trabalho da store). A store conecta-se ao root reducer, que divide os estados em pequenos reducers para descobrir como lidar com esse estado. Os estados aqui são imutáveis.

    Views: Em React, adiciona na camada de View, 3 novos conceitos para conectar a View à Store:
        1 - Provider;
        2 - Connect();
        3 - Selector;

    