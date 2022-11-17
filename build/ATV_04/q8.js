"use strict";
// Altere a classe conta dos slides conforme as instruções abaixo:
// a. Altere o método sacar de forma que ele retorne verdadeiro ou falso. Caso o
// saque deixe saldo negativo, o mesmo não será realizado, retornando falso;
// b. Altere o método transferir() para que retorne também um valor lógico e que
// não seja feita a transferência caso o sacar() na conta origem não seja
// satisfeito;
// c. Verifique as diferentes operações implementadas.
class ContA {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor > this.saldo) {
            return false;
        }
        this.saldo = this.saldo - valor;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    transferir(contaDestino, valor) {
        if (this.sacar(valor) == false) {
            return false;
        }
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
let c1 = new ContA("1", 0);
let c2 = new ContA("2", 0);
c1.depositar(100);
c2.depositar(200);
c1.transferir(c2, 150);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
