"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions_main_1 = require("../q5/functions_main");
const fs = __importStar(require("fs"));
const q4Banco_1 = require("./q4Banco");
let b = new q4Banco_1.Banco();
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
        case '8':
            renderJuros();
    }
    prompt("Operação finalizada. Digite <enter>");
    console.clear();
} while (opcao != '0');
console.log("Aplicação encerrada");
function inserir() {
    console.log("\nCadastrar conta\n");
    let numero = prompt('Digite o número da conta: ');
    let conta;
    conta = new q4Banco_1.Conta(numero, 0);
    b.inserir(conta);
}
function consultar() {
    console.log("\nConsultar Conta\n");
    let numero = prompt('Digite o numero da conta: ');
    console.log(b.consultar_saldo(numero));
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
function renderJuros() {
    console.log("\nRender Juros\n");
    let num = functions_main_1.input("Numero da conta: ");
    b.renderJuros(num);
}
function lerArquidoExterno() {
    let contas = fs.readFileSync('./contas.txt').toString().split('\n');
    for (let conta of contas) {
        let dados = conta.split(';');
        let [tipo, nome, numero_da_Conta, saldo, taxa] = dados;
        let contaN;
        if (tipo == 'P') {
            contaN = new q4Banco_1.Poupanca(numero_da_Conta, Number(saldo), Number(taxa));
        }
        else if (tipo == 'I') {
            contaN = new q4Banco_1.Conta_Imposto(numero_da_Conta, Number(saldo), Number(taxa));
        }
        else {
            contaN = new q4Banco_1.Conta(numero_da_Conta, Number(saldo));
        }
        b.inserir(contaN);
    }
}
