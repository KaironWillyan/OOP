"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const ValorInvalidoError_1 = require("../Error Handling/ValorInvalidoError");
class Conta {
    constructor(_numero, _saldo) {
        this._numero = _numero;
        this._saldo = _saldo;
        try {
            this.depositar(_saldo);
            this._numero = this._validarNumero(_numero) ? _numero : '00000-0';
        }
        catch (e) {
            this._saldo = 0;
        }
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
    sacar(valor) {
        this._validarValor(valor);
        try {
            this._saldo = this._saldo - valor;
        }
        catch (e) {
            console.log(e.message);
        }
    }
    depositar(valor) {
        this._validarValor(valor);
        this._saldo = this._saldo + valor;
    }
    consultarSaldo() {
        return this._saldo;
    }
    transferir(conta_destino, valor) {
        this.sacar(valor);
        conta_destino.depositar(valor);
    }
    _validarValor(valor) {
        if (valor <= 0) {
            throw new ValorInvalidoError_1.ValorInvalidoError('Valor inválido');
        }
    }
    _validarNumero(numero) {
        if (numero == undefined)
            return false;
        else {
            const regex = /^\d{5}-\d{1}$/;
            if (regex.test(numero)) {
                this._numero = numero;
                return true;
            }
        }
        return false;
    }
}
exports.Conta = Conta;
