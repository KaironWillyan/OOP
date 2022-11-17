"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta_Imposto = void 0;
const Conta_1 = require("./Conta");
class Conta_Imposto extends Conta_1.Conta {
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
