"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculadora_1 = require("../q2/Calculadora");
class CalculadoraCientifica extends Calculadora_1.Calculadora {
    exponenciar() {
        return Math.pow(this.operando1, this.operando2);
    }
}
const novo = new CalculadoraCientifica(2, 6);
console.log(novo.exponenciar());
/*
Foi necessário modificação, pois os atributos de Calculadora estavam privados. Desse modo, criei métodos get e set para poder manipular os atributos.
*/ 
