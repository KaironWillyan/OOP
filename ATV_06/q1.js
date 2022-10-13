"use strict";
class Calculadora {
    constructor(o1, o2) {
        this.operando1 = o1;
        this.operando2 = o2;
    }
    soma() {
        return this.operando1 + this.operando2;
    }
    multiplicacao() {
        return this.operando1 * this.operando2;
    }
}
let calculadora = new Calculadora(2, 5);
//calculadora.operando1() o atributo é privado, logo não pode ser acessado diretamente.
console.log(calculadora.soma());
console.log(calculadora.multiplicacao());
