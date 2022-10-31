import { input } from "../q5/functions_main";
import * as fs from "fs"
import { Banco, Conta, Conta_Imposto, Poupanca } from "./q4Banco";

let b : Banco = new Banco();
let opcao: string = '';


do{
    console.log('Bem vindo\nDigite uma opção:');
    console.log(`1 - Cadastrar 2 - Consultar 3 - Sacar
                4 - Depositar 5 - Excluir 6 - Transferir
                7 – Totalizações
                0 - Sair`);

    opcao = prompt() as string as string;

    switch(opcao){
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
            renderJuros()
    }
    prompt("Operação finalizada. Digite <enter>");

    console.clear();
}while(opcao != '0');
console.log("Aplicação encerrada");

function inserir() {
    console.log("\nCadastrar conta\n");
    let numero: string = prompt('Digite o número da conta: ') as string as string;
    let conta: Conta;
    conta = new Conta(numero, 0);
    b.inserir(conta);
}

function consultar(){
    console.log("\nConsultar Conta\n");
    let numero: string = prompt('Digite o numero da conta: ') as string;
    console.log(b.consultar_saldo(numero));
}

function sacar(){
    console.log("\nSacar\n");
    let numero: string = prompt('Digite o numero da conta: ') as string;
    let valor: number = Number(prompt('Valor que deseja sacar: '));
    b.sacar(numero, valor);
}

function depositar(){
    console.log("\nDepositar\n");
    let numero: string = prompt('Digite o numero da conta: ') as string;
    let valor: number = Number(prompt('Valor que deseja depositar: '));
    b.depositar(numero, valor);
}

function excluir(){
    console.log("\nExcluir\n");
    let numero: string = prompt('Digite o numero da conta: ') as string;
    b.excluir(numero);
}

function transferir(){
    console.log("\nTransferir\n");
    let numero: string = prompt('Digite o numero da conta que vai transferir: ') as string;
    let numero2: string = prompt('Digite o numero da conta destino: ') as string;
    let valor: number = Number(prompt('Valor que deseja transferir: '));
    b.transferir(numero2, numero, valor);
}

function totalizacoes(){
    console.log("\nTotalizações\n");
    console.log(b.depositoTotal());
}

function renderJuros(){
    console.log("\nRender Juros\n");
    let num = input("Numero da conta: ");
    b.renderJuros(num);    
}

function lerArquidoExterno(){
    let contas: Array<String> = fs.readFileSync('./contas.txt').toString().split('\n');
    for(let conta of contas) {
        let dados = conta.split(';');
        let [tipo, nome, numero_da_Conta, saldo, taxa]: string[] = dados;

        let contaN : Conta;

        if (tipo == 'P') {
            contaN = new Poupanca(numero_da_Conta, Number(saldo), Number(taxa));
        } else if(tipo == 'I') {
            contaN = new Conta_Imposto(numero_da_Conta, Number(saldo), Number(taxa));
        } else {
            contaN = new Conta(numero_da_Conta, Number(saldo));
        }

        b.inserir(contaN);
    }
}