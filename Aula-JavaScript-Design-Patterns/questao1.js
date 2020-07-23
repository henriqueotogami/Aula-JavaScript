Analise o código abaixo:

function Conta() {}
Conta.prototype.rendimento = 0;
Conta.prototype.depositar = function() {}
Conta.prototype.retirar = function() {}
Conta.prototype.exibirSaldo = function() {
  return `O saldo da conta é: ${this.saldo}.`;
}

function ContaPoupanca() {
  this.exibirSaldo = function() {
    return 'Operação não disponível';
  }
}

ContaPoupanca.prototype.rendimento = 0.03;
ContaPoupanca.prototype = Object.create(Conta.prototype);

const contaPoupanca = new ContaPoupanca();

Agora avalie as afirmativas abaixo e assinale a alternativa que apresenta as corretas:
I   - A variável "contaPoupanca" será uma instância de ContaPoupanca, ou seja, a expressão "contaPoupanca instanceof ContaPoupanca" retornará true.
II  - A variável "contaPoupanca" possuíra os métodos "depositar", "retirar" e "exibirSaldo". Mas a implementação da função "exibirSaldo" não será sobrescrita, pois não é possível sobrescrever propriedades de um prototype.
III - O retorno da função "contaPoupanca.exibirSaldo()" será: "O saldo da conta é: undefined.".
IV  - O valor do atributo "rendimento" da variável "contaPoupanca" será 0.3.
V   - O retorno da função "contaPoupanca.__proto__.exibirSaldo()" será: "O saldo da conta é: undefined.".

I e V