import prompt from 'prompt-sync'
import * as fs from "fs"
import { Banco } from './Banco';
import { Conta } from './Conta';
import { Conta_Imposto } from './ContaImposto';
import { Poupanca } from './Poupanca';
import { AplicacaoError } from '../Error Handling/AplicacaoError';
import { PoupancaInvalidaError } from '../Error Handling/PoupancaInvalidaError';
import { ContaInexistenteError } from '../Error Handling/ContaInexistenteError';
import { ValorInvalidoError } from '../Error Handling/ValorInvalidoError';
import { SaldoInsuficienteError } from '../Error Handling/SaldoInsuficienteError';

let input = prompt()
let banco : Banco = new Banco();
let opcao: number = -1

console.log('Bem vindo\nDigite uma opção:');
do{
    try{    
        console.log(`1 - Cadastrar 2 - Consultar 3 - Sacar
                4 - Depositar 5 - Excluir 6 - Transferir
                7 – Totalizações 8 - Render Juros 
                9- Ler Arquivo Externo
                0 - Sair`);

        opcao = lerOpcao()
        verificarEntrada(opcao)
        menu(opcao)


    }catch(e){
        if(e instanceof AplicacaoError){
            console.log(e.message);
        }else if(e instanceof PoupancaInvalidaError){
            console.log(e.message);
        }else if(e instanceof ContaInexistenteError){
            console.log(e.message);
        }else if(e instanceof ValorInvalidoError){
            console.log(e.message);
        }else if(e instanceof SaldoInsuficienteError){
            console.log(e.message);
        }else if (e instanceof Error) {
            console.log("Erro no sistema. Contate o administrador.");
        }
    }
        input("Operação finalizada. Digite <enter>");
        console.clear();
}while(opcao != 0);

console.log("Aplicação encerrada");

function inserir() {
    console.log("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta: ')  ;
    let conta: Conta;
    conta = new Conta(numero, 0);
    banco.inserir(conta);
}

function consultar(){
    console.log("\nConsultar Conta\n");
    let numero: string = input('Digite o numero da conta: ') ;
    console.log(banco.consultar_conta(numero));
}

function sacar(){
    console.log("\nSacar\n");
    let numero: string = input('Digite o numero da conta: ') ;
    let valor: number = Number(input('Valor que deseja sacar: '));
    banco.sacar(numero, valor);
}

function depositar(){
    console.log("\nDepositar\n");
    let numero: string = input('Digite o numero da conta: ') ;
    let valor: number = Number(input('Valor que deseja depositar: '));
    banco.depositar(numero, valor);
}

function excluir(){
    console.log("\nExcluir\n");
    let numero: string = input('Digite o numero da conta: ') ;
    banco.excluir(numero);
}

function transferir(){
    console.log("\nTransferir\n");
    let numero: string = input('Digite o numero da conta que vai transferir: ') ;
    let numero2: string = input('Digite o numero da conta destino: ') ;
    let valor: number = Number(input('Valor que deseja transferir: '));
    banco.transferir(numero2, numero, valor);
}

function totalizacoes(){
    console.log("\nTotalizações\n");
    console.log(banco.depositoTotal());
}

function renderJuros(){
    console.log("\nRender Juros\n");
    let num = input("Numero da conta: ");
    banco.renderJuros(num);    
}

function lerArquidoExterno(){
    let contas: Array<String> = fs.readFileSync('./contas.txt').toString().split('\n');
    for(let conta of contas) {
        let dados = conta.split(';');
        let [tipo, numero_da_Conta, saldo, taxa]: string[] = dados;

        let contaN : Conta;

        if (tipo == 'P') {
            contaN = new Poupanca(numero_da_Conta, Number(saldo), Number(taxa));
        } else if(tipo == 'I') {
            contaN = new Conta_Imposto(numero_da_Conta, Number(saldo), Number(taxa));
        } else {
            contaN = new Conta(numero_da_Conta, Number(saldo));
        }

        banco.inserir(contaN);
    }
}

function lerOpcao(): number {
    let numero: number = Number(input('Digite o valor: '));
    if( isNaN(numero)) {
        throw new AplicacaoError('Valor Inválido. Digite um número');
    }
        return numero;
    }

function verificarEntrada(numero: number){
    if([0,1,2,3,4,5,6,7,8,9].indexOf(numero) == -1){
        throw new AplicacaoError('Número inválido')
    }
}

function menu(opcao: number){
    switch(opcao){
        case 1: 
            inserir();
            break;
        case 2:
            consultar();
            break;
        case 3:
            sacar();
            break;
        case 4:
            depositar();
            break;
        case 5:
            excluir();
            break;
        case 6:
            transferir();
            break;
        case 7:
            totalizacoes();
            break;
        case 8:
            renderJuros()
            break;
        case 9:
            lerArquidoExterno()
            break;
    }
}
