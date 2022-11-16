"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
const Poupanca_1 = require("./Poupanca");
const ContaImposto_1 = require("./ContaImposto");
const ContaInexistenteError_1 = require("../Error Handling/ContaInexistenteError");
const ContaExistenteError_1 = require("../Error Handling/ContaExistenteError");
class Banco {
    constructor(_contas = []) {
        this._contas = _contas;
    }
    inserir(conta) {
        try {
            this.consultar_conta(conta.numero);
            throw new ContaExistenteError_1.ContaExistenteError(`Conta ${conta.numero} existente`);
        }
        catch (e) {
            if (e instanceof ContaInexistenteError_1.ContaInexistenteError) {
                this._contas.push(conta);
            }
            else {
                console.log(e.message);
            }
        }
    }
    consultar_conta(numero) {
        let i = this.consultarIndice(numero);
        let conta = this._contas[i];
        return conta;
    }
    consultarIndice(numero) {
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                return i;
            }
        }
        throw new ContaInexistenteError_1.ContaInexistenteError('Conta Inexistente');
    }
    sacar(numero, valor) {
        try {
            let conta = this.consultar_conta(numero);
            if (conta instanceof ContaImposto_1.Conta_Imposto) {
                conta.debitar(valor);
            }
            else {
                conta.sacar(valor);
            }
        }
        catch (e) {
            console.log(e.message);
        }
    }
    depositar(numero, valor) {
        try {
            let conta = this.consultar_conta(numero);
            conta.depositar(valor);
        }
        catch (e) {
            console.log(e.message);
        }
    }
    transferir(num_credito, num_debito, valor) {
        let conta1 = this.consultar_conta(num_credito);
        let conta2 = this.consultar_conta(num_debito);
        conta2.transferir(conta1, valor);
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
        try {
            let conta = this.consultar_conta(numero);
            if (conta instanceof Poupanca_1.Poupanca) {
                conta.render_juros();
            }
        }
        catch (e) {
            console.log(e.message);
        }
    }
}
exports.Banco = Banco;
