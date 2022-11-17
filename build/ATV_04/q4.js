"use strict";
class Conta {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    sacar(valor) {
        this.saldo = this.saldo - valor;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
let c1 = new Conta("1", 100);
let c2 = new Conta("2", 100);
let c3;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2, 50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());
// //a. Qual o resultado dos dois "prints"? Justifique sua resposta.
//     /*
//     Todos os prints retornam como resultado, 90. Pois qualquer mudança feita em c1, resultará em igual alteração em c2.
//     Logo, se sacarmos, ou transferirmos de c1 para c2, ambas as contas continuarão com o mesmo valor.
//     */
// //b. O que acontece com o objeto para o qual a referência c1 apontava?
//     /*
//     É perdido. Agora ambos apontam para o mesmo objeto.
//     */
