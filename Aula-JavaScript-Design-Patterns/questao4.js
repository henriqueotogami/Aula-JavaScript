No código abaixo as funções "adicionaUsuarioLogado" e "executaSeUsuarioEstaLogado" são exemplos de qual pattern:

function adicionaUsuarioLogado(fn) {
  const usuarioLogado = {
    nome: 'Foo',
    sobrenome: 'Bar'
  };

  fn(usuarioLogado);
}

function executaSeUsuarioEstaLogado(usuarioLogado, fn) {
  if (!usuarioLogado) {
    console.log('Usuário não está logado.');
    return;
  }
  
  fn();
}

function notificaUsuarioLogado(usuarioLogado) {
  console.log(`Bem-vindo usuário ${usuarioLogado.nome}!`);
}

adicionaUsuarioLogado(
  usuarioLogado => executaSeUsuarioEstaLogado(usuarioLogado, () => {
    notificaUsuarioLogado(usuarioLogado);
  })
);

decorator