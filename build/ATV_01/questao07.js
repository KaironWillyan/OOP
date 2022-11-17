"use strict";
class Retangulo {
    constructor(lado1, lado2) {
        this.l1 = lado1;
        this.l2 = lado2;
    }
    calcularArea() {
        return this.l1 * this.l2;
    }
    calcularPerimetro() {
        return this.l1 * 2 + this.l2 * 2;
    }
}
let retangulo = new Retangulo(6, 8);
console.log(retangulo.calcularArea());
console.log(retangulo.calcularPerimetro());
