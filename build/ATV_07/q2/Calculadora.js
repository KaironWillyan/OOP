"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    constructor(op1, op2) {
        this.operando1 = op1;
        this.operando2 = op2;
    }
    get operando1() {
        return this._operando1;
    }
    set operando1(num) {
        this._operando1 = num;
    }
    get operando2() {
        return this._operando2;
    }
    set operando2(num) {
        this._operando2 = num;
    }
    soma() {
        return this._operando1 + this._operando2;
    }
}
exports.Calculadora = Calculadora;
// const num = new Calculadora(2, 5);
// console.log(num.soma())
