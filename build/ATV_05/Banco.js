"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = exports.Conta = void 0;
class Conta {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    sacar(valor) {
        this.saldo = this.saldo - valor;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
exports.Conta = Conta;
class Banco {
    constructor(contas) {
        this.contas = [];
    }
    inserir(c) {
        let conta = this.consultar(c.numero);
        conta == null ? this.contas.push(c) : console.log("Conta existente.");
        this.contas.push(c);
    }
    alterar(c) {
        let indice = this.consultarIndice(c.numero);
        if (indice != -1) {
            this.contas[indice] = c;
        }
    }
    consultar(numero) {
        let contaProcurada;
        for (let c of this.contas) {
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }
    consultarIndice(numero) {
        let indice = -1;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    excluir(numero) {
        let indice = this.consultarIndice(numero);
        if (indice != -1) {
            for (let i = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }
    depositar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    }
    sacar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.sacar(valor);
            return true;
        }
        return false;
    }
    transferir(numeroCredito, numeroDebito, valor) {
        let conta1 = this.consultar(numeroCredito);
        let conta2 = this.consultar(numeroDebito);
        if (conta1 != null && conta2 != null) {
            conta2.transferir(conta1, valor);
        }
    }
    quantidadeContas() {
        return this.contas.length;
    }
    depositoTotal() {
        let soma = 0;
        for (let i = 0; i < this.contas.length; i++) {
            soma += this.contas[i].saldo;
        }
        return soma;
    }
    mediaSaldos() {
        return this.depositoTotal() / this.quantidadeContas();
    }
}
exports.Banco = Banco;
