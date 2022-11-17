"use strict";
class Circulo {
    constructor(r) {
        this.raio = r;
    }
    calcularAreaCirculo() {
        return Math.pow(this.raio, 2) * 3.14;
    }
    calcularPerimetroCirculo() {
        return this.raio * 2 * 3.14;
    }
}
let circulo = new Circulo(6);
console.log(circulo.calcularAreaCirculo());
console.log(circulo.calcularPerimetroCirculo());
