Analise a classe abaixo e seleciona a alternativa em que todas as afirmações são corretas:

class ID {
	static #contador = 0;

  static get contador() {
    return this.#contador;
  }

  static incrementaContador() {
    return ++this.#contador;
  }
}

class Cliente {
  #id = 0;

  constructor() {
    this.#id = ID.incrementaContador();
  }

  get id() {
    return this.#id;
  }
}

const c1 = new Cliente();
console.log(`Contador atual: ${ID.contador}.`);

const c2 = new Cliente();
const c3 = new Cliente();

console.log(`Contador atual: ${ID.contador}.`);

As afirmativas abaixo são:
I   - É possível chamar o método "incrementaContador" sem instanciar a classe ID pois o método possui a palavra-chave static.
II  - A saídas dos console.log são respectivamente: "Contador atual: 1." e "Contador atual: 3.".
III - É possível instanciar a classe ID mas sua instancia não herdará os atributos/métodos com a palavra-chave static.
IV  - Quando uma função possui todos os atributos/métodos static não é possível chamá-la com a palavra-chave new.
V   - Métodos que possuem a palavra-chave static, só podem ser chamados por outros métodos static.

I, II e III.