"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const q4_1 = require("./q4");
let conta1 = new q4_1.Conta('1', 5000);
let conta2 = new q4_1.Conta('2', 6000);
let banco = new q4_1.Banco(conta1);
banco.inserir(conta2);
console.log(banco.consultar('1'));
console.log(banco.consultar('2'));
console.log(banco.quantidadeContas());
console.log(banco.mediaSaldos());
banco.excluir('1');
console.log(banco.consultar('1'));
console.log(banco.consultar('2'));
