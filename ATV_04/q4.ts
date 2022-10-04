class Conta {
    numero: String;
    saldo: number;
    
    constructor(numero: String, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }
    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

let c1: Conta = new Conta("1",100);
let c2: Conta = new Conta("2",100);
let c3: Conta;

c1 = c2;
c3 = c1;

c1.sacar(10);
c1.transferir(c2,50);

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