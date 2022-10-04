export class Conta {
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

export class Banco {
    contas : Conta[] = [];
        
    constructor(contas : Conta) {

    }
    
    inserir(c : Conta): void {
        let conta : Conta = this.consultar(c.numero);
        conta == null? this.contas.push(c) : console.log("Conta existente.");
        this.contas.push(c);
    }

    alterar(c : Conta): void {
        let indice = this.consultarIndice(c.numero);
        
        if (indice != -1) {
            this.contas[indice] = c;
        }
    }

    consultar(numero: String): Conta {
        let contaProcurada!: Conta;

        for (let c of this.contas) {
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }

    consultarIndice(numero: String): number {
        let indice: number = -1;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }

    excluir(numero: String): void {
        let indice: number = this.consultarIndice(numero);
        if (indice != -1) {
            for (let i: number = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }

    depositar(numero: String, valor: number): void {
        let conta: Conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    }

    sacar(numero: String, valor: number) {
        let conta : Conta = this.consultar(numero)

        if(conta != null){
            conta.sacar(valor)
            return true
        }

        return false
    }

    transferir(numeroCredito: String, numeroDebito:String, valor: number): void {
            let conta1: Conta = this.consultar(numeroCredito)
            let conta2: Conta = this.consultar(numeroDebito)
    
            if(conta1 != null && conta2 != null){
                conta2.transferir(conta1, valor)
            }
    }

    quantidadeContas(): number{
        return this.contas.length
    }

    depositoTotal(): number{
        let soma = 0

        for(let i = 0; i < this.contas.length; i++){
            soma += this.contas[i].saldo
        }

        return soma
    }

    mediaSaldos(): number{
        return this.depositoTotal() / this.quantidadeContas()
    }

}

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
    console.log(b.consultar(numero));
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