import { Banco, Conta } from "./q4";

let conta1 = new Conta('1', 5000);
let conta2 = new Conta('2', 6000);

let banco = new Banco(conta1);
banco.inserir(conta2);
console.log(banco.consultar('1'));
console.log(banco.consultar('2'));
console.log(banco.quantidadeContas());
console.log(banco.mediaSaldos());
banco.excluir('1');
console.log(banco.consultar('1'));
console.log(banco.consultar('2'));