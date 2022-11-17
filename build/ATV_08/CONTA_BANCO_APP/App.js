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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const fs = __importStar(require("fs"));
const Banco_1 = require("./Banco");
const Conta_1 = require("./Conta");
const ContaImposto_1 = require("./ContaImposto");
const Poupanca_1 = require("./Poupanca");
const AplicacaoError_1 = require("../Error Handling/AplicacaoError");
const PoupancaInvalidaError_1 = require("../Error Handling/PoupancaInvalidaError");
const ContaInexistenteError_1 = require("../Error Handling/ContaInexistenteError");
const ValorInvalidoError_1 = require("../Error Handling/ValorInvalidoError");
const SaldoInsuficienteError_1 = require("../Error Handling/SaldoInsuficienteError");
let input = prompt_sync_1.default();
let banco = new Banco_1.Banco();
let opcao = '';
do {
    console.log('Bem vindo\nDigite uma opção:');
    console.log(`1 - Cadastrar 2 - Consultar 3 - Sacar
                4 - Depositar 5 - Excluir 6 - Transferir
                7 – Totalizações 8 - Render Juros 
                9- Ler Arquivo Externo
                0 - Sair`);
    try {
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
                break;
            case '9':
                lerArquidoExterno();
                break;
        }
    }
    catch (e) {
        if (e instanceof AplicacaoError_1.AplicacaoError) {
            console.log(e.message);
        }
        if (e instanceof PoupancaInvalidaError_1.PoupancaInvalidaError) {
            console.log(e.message);
        }
        if (e instanceof ContaInexistenteError_1.ContaInexistenteError) {
            console.log(e.message);
        }
        if (e instanceof ValorInvalidoError_1.ValorInvalidoError) {
            console.log(e.message);
        }
        if (e instanceof SaldoInsuficienteError_1.SaldoInsuficienteError) {
            console.log(e.message);
        }
        if (e instanceof Error) {
            console.log("Erro no sistema. Contate o administrador.");
        }
    }
    finally {
        input("Operação finalizada. Digite <enter>");
    }
    console.clear();
} while (opcao != '0');
console.log("Aplicação encerrada");
function inserir() {
    console.log("\nCadastrar conta\n");
    let numero = input('Digite o número da conta: ');
    let conta;
    conta = new Conta_1.Conta(numero, 0);
    banco.inserir(conta);
}
function consultar() {
    console.log("\nConsultar Conta\n");
    let numero = input('Digite o numero da conta: ');
    console.log(banco.consultar_conta(numero));
}
function sacar() {
    console.log("\nSacar\n");
    let numero = input('Digite o numero da conta: ');
    let valor = Number(input('Valor que deseja sacar: '));
    banco.sacar(numero, valor);
}
function depositar() {
    console.log("\nDepositar\n");
    let numero = input('Digite o numero da conta: ');
    let valor = Number(input('Valor que deseja depositar: '));
    banco.depositar(numero, valor);
}
function excluir() {
    console.log("\nExcluir\n");
    let numero = input('Digite o numero da conta: ');
    banco.excluir(numero);
}
function transferir() {
    console.log("\nTransferir\n");
    let numero = input('Digite o numero da conta que vai transferir: ');
    let numero2 = input('Digite o numero da conta destino: ');
    let valor = Number(input('Valor que deseja transferir: '));
    banco.transferir(numero2, numero, valor);
}
function totalizacoes() {
    console.log("\nTotalizações\n");
    console.log(banco.depositoTotal());
}
function renderJuros() {
    console.log("\nRender Juros\n");
    let num = input("Numero da conta: ");
    banco.renderJuros(num);
}
function lerArquidoExterno() {
    let contas = fs.readFileSync('./contas.txt').toString().split('\n');
    for (let conta of contas) {
        let dados = conta.split(';');
        let [tipo, numero_da_Conta, saldo, taxa] = dados;
        let contaN;
        if (tipo == 'P') {
            contaN = new Poupanca_1.Poupanca(numero_da_Conta, Number(saldo), Number(taxa));
        }
        else if (tipo == 'I') {
            contaN = new ContaImposto_1.Conta_Imposto(numero_da_Conta, Number(saldo), Number(taxa));
        }
        else {
            contaN = new Conta_1.Conta(numero_da_Conta, Number(saldo));
        }
        banco.inserir(contaN);
    }
}
function verificarEntrada(numero) {
    try {
        let op = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], veri = 0;
        for (let i = 0; i < op.length; i++) {
            if (numero == op[i]) {
                veri = 1;
            }
        }
        if (veri != 1) {
            throw new AplicacaoError_1.AplicacaoError('Opção inválida');
        }
    }
    catch (e) {
        console.error('Opção inválida');
    }
}
