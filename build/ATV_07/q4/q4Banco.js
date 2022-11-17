"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = exports.Conta_Imposto = exports.Poupanca = exports.Conta = void 0;
class Conta {
    constructor(_numero, _saldo) {
        this._numero = _numero;
        this._saldo = _saldo;
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
    sacar(valor) {
        if (this._saldo - valor < 0) {
            return false;
        }
        else {
            this._saldo = this._saldo - valor;
            return true;
        }
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
    }
    consultarSaldo() {
        return this._saldo;
    }
    transferir(conta_destino, valor) {
        if (this.sacar(valor)) {
            conta_destino.depositar(valor);
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Conta = Conta;
class Poupanca extends Conta {
    constructor(numero, saldo, taxa_de_juros) {
        super(numero, saldo);
        this._taxa_de_juros = taxa_de_juros;
    }
    taxa_do_juros() {
        return this._taxa_de_juros;
    }
    render_juros() {
        this.depositar(this.saldo * this._taxa_de_juros / 100);
    }
}
exports.Poupanca = Poupanca;
class Conta_Imposto extends Conta {
    constructor(numero, saldo, tax_de_desconto) {
        super(numero, saldo);
        this._taxa_de_desconto = tax_de_desconto;
    }
    debitar(valor) {
        let total = valor + valor * (this._taxa_de_desconto / 100);
        super.sacar(total);
    }
}
exports.Conta_Imposto = Conta_Imposto;
class Banco {
    constructor(_contas = []) {
        this._contas = _contas;
    }
    inserir(conta) {
        if (this.consultarIndice(conta.numero) == -1) {
            this._contas.push(conta);
        }
    }
    consultar_saldo(numero) {
        let conta;
        for (let c of this._contas) {
            if (c.numero == numero) {
                conta = c;
                break;
            }
        }
        return conta;
    }
    consultarIndice(numero) {
        let index = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                index = i;
                break;
            }
        }
        return index;
    }
    sacar(numero, valor) {
        let conta = this.consultar_saldo(numero);
        if (conta != null) {
            if (conta instanceof Conta_Imposto) {
                conta.debitar(valor);
            }
            else {
                conta.sacar(valor);
            }
        }
    }
    depositar(numero, valor) {
        let conta = this.consultar_saldo(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    }
    transferir(num_credito, num_debito, valor) {
        let conta1 = this.consultar_saldo(num_credito);
        let conta2 = this.consultar_saldo(num_debito);
        if (conta1 != null && conta2 != null) {
            conta2.transferir(conta1, valor);
        }
    }
    quantidadeContas() {
        return this._contas.length;
    }
    depositoTotal() {
        let soma = 0;
        for (let i = 0; i < this._contas.length; i++) {
            soma += this._contas[i].saldo;
        }
        return soma;
    }
    mediaTotal() {
        let media = this.depositoTotal() / this.quantidadeContas();
        return media;
    }
    excluir(numero) {
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                this._contas.splice(i, 1);
                break;
            }
        }
    }
    renderJuros(numero) {
        for (let i = 0; i < this._contas.length; i++) {
            if (this.consultarIndice(numero)) {
                if (this._contas[i] instanceof Poupanca) {
                    this._contas[i].render_juros();
                }
            }
        }
    }
}
exports.Banco = Banco;
