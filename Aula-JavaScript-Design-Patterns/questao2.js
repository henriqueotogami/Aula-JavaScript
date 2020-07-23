Na versão 12 do nodejs é possível que uma classe possua propriedades privadas aplicando um prefixo "#" no nome de seus atributos e métodos. Analise a classe abaixo e selecione a informação que possui o que será exibido pelos "console.log" respectivamente:

class Pessoa {
  #nome = '';

  constructor(nome) {
    this.#nome = nome;
  }

  get nome() {
    return `Seu nome é: ${this.#nome}.`;
  }

  set nome(novoNome) {
    this.#nome = novoNome;
  }
}

const pessoa = new Pessoa();

console.log(pessoa);
console.log(pessoa.nome);
pessoa.nome = 'Foo';
console.log(pessoa.nome);

R:
"Pessoa {#nome: "Foo"}", "Seu nome é: undefined." e "Seu nome é: Foo."