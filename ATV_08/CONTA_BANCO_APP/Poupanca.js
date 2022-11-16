"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poupanca = void 0;
const Conta_1 = require("./Conta");
class Poupanca extends Conta_1.Conta {
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
