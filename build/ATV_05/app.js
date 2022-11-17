"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = exports.Conta = void 0;
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
exports.Conta = Conta;
class Banco {
    constructor(contas) {
        this.contas = [];
    }
    inserir(c) {
        let conta = this.consultar(c.numero);
        conta == null ? this.contas.push(c) : console.log("Conta existente.");
        this.contas.push(c);
    }
    alterar(c) {
        let indice = this.consultarIndice(c.numero);
        if (indice != -1) {
            this.contas[indice] = c;
        }
    }
    consultar(numero) {
        let contaProcurada;
        for (let c of this.contas) {
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }
    consultarIndice(numero) {
        let indice = -1;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    excluir(numero) {
        let indice = this.consultarIndice(numero);
        if (indice != -1) {
            for (let i = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }
    depositar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    }
    sacar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.sacar(valor);
            return true;
        }
        return false;
    }
    transferir(numeroCredito, numeroDebito, valor) {
        let conta1 = this.consultar(numeroCredito);
        let conta2 = this.consultar(numeroDebito);
        if (conta1 != null && conta2 != null) {
            conta2.transferir(conta1, valor);
        }
    }
    quantidadeContas() {
        return this.contas.length;
    }
    depositoTotal() {
        let soma = 0;
        for (let i = 0; i < this.contas.length; i++) {
            soma += this.contas[i].saldo;
        }
        return soma;
    }
    mediaSaldos() {
        return this.depositoTotal() / this.quantidadeContas();
    }
}
exports.Banco = Banco;
let b = new Banco();
let opcao = '';
do {
    console.log('Bem vindo\nDigite uma opção:');
    console.log(`1 - Cadastrar 2 - Consultar 3 - Sacar
                4 - Depositar 5 - Excluir 6 - Transferir
                7 – Totalizações
                0 - Sair`);
    opcao = prompt();
    switch (opcao) {
        case '1':
            inserir();
            break;
        case '2':
            consultar();
            break;
        case '3':
            sacar();
            break;
        case '4':
            depositar();
            break;
        case '5':
            excluir();
            break;
        case '6':
            transferir();
            break;
        case '7':
            totalizacoes();
            break;
    }
    prompt("Operação finalizada. Digite <enter>");
    console.clear();
} while (opcao != '0');
console.log("Aplicação encerrada");
function inserir() {
    console.log("\nCadastrar conta\n");
    let numero = prompt('Digite o número da conta: ');
    let conta;
    conta = new Conta(numero, 0);
    b.inserir(conta);
}
function consultar() {
    console.log("\nConsultar Conta\n");
    let numero = prompt('Digite o numero da conta: ');
    console.log(b.consultar(numero));
}
function sacar() {
    console.log("\nSacar\n");
    let numero = prompt('Digite o numero da conta: ');
    let valor = Number(prompt('Valor que deseja sacar: '));
    b.sacar(numero, valor);
}
function depositar() {
    console.log("\nDepositar\n");
    let numero = prompt('Digite o numero da conta: ');
    let valor = Number(prompt('Valor que deseja depositar: '));
    b.depositar(numero, valor);
}
function excluir() {
    console.log("\nExcluir\n");
    let numero = prompt('Digite o numero da conta: ');
    b.excluir(numero);
}
function transferir() {
    console.log("\nTransferir\n");
    let numero = prompt('Digite o numero da conta que vai transferir: ');
    let numero2 = prompt('Digite o numero da conta destino: ');
    let valor = Number(prompt('Valor que deseja transferir: '));
    b.transferir(numero2, numero, valor);
}
function totalizacoes() {
    console.log("\nTotalizações\n");
    console.log(b.depositoTotal());
}
