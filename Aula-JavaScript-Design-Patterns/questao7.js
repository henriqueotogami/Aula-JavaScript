Analise as funções abaixo e selecione a alternativa em que todas são consideradas Factory:

I - 
function exibeNome(nome) {
  console.log(nome);
}

II -
function Pessoa(nome) {
  this.nome = nome;
}

III -
function Pessoa(nome) {
  return {
    nome
  };
}

IV -
function recuperaDadosFormulario(formulario) {
  if (!formulario) {
    return {};
  }

  const dados = {
    nome: formulario.nome,
    idade: formulario.idade
  };

  return dados;
}

V -
function setNome(nome) {
  this.nome = nome;
}

III e IV.