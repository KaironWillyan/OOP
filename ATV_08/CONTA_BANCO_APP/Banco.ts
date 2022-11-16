import { Conta } from "./Conta";
import { Poupanca } from "./Poupanca";
import { Conta_Imposto } from "./ContaImposto";
import { SaldoInsuficienteError } from "../Error Handling/SaldoInsuficienteError";
import { ContaInexistenteError } from "../Error Handling/ContaInexistenteError";
import { PoupancaInvalidaError } from "../Error Handling/PoupancaInvalidaError";
import { ContaExistenteError } from "../Error Handling/ContaExistenteError";

export class Banco {

    constructor(private _contas: Conta[] = []) {}

    public inserir(conta: Conta): void {
        try{
            this.consultar_conta(conta.numero);
            throw new ContaExistenteError(`Conta ${conta.numero} existente`)
        }catch(e){
            if(e instanceof ContaInexistenteError){
                this._contas.push(conta);
            }else{
                console.log((<Error>e).message);
            }
        }
    }

    public consultar_conta(numero: string): Conta {
            let i = this.consultarIndice(numero)
            let conta = this._contas[i]
            return conta;
    }

    private consultarIndice(numero: string): number {
        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                return i;   
            }
        }
        throw new ContaInexistenteError('Conta Inexistente')
    }

    public sacar(numero: string, valor: number): void {
        try{
            let conta: Conta = this.consultar_conta(numero);
            if(conta instanceof Conta_Imposto) {
                conta.debitar(valor);
            }
            else {
                conta.sacar(valor);
            }
        }catch(e){
            console.log((<SaldoInsuficienteError>e).message)
        }
    }

    public depositar(numero: string, valor: number): void {
        try{   
            let conta: Conta = this.consultar_conta(numero)
            conta.depositar(valor)
        }catch(e){
            console.log((<SaldoInsuficienteError>e).message)
        }
    }

    public transferir(num_credito: string, num_debito: string, valor: number): void {
        let conta1: Conta = this.consultar_conta(num_credito)
        let conta2: Conta = this.consultar_conta(num_debito)
        conta2.transferir(conta1, valor)
    }

    public quantidadeContas(): number {
        return this._contas.length;
    }

    public depositoTotal(): number {
        let soma = 0

        for (let i = 0; i < this._contas.length; i++) {
            soma += this._contas[i].saldo
        }

        return soma
    }

    public mediaTotal(): number {
        let media: number = this.depositoTotal() / this.quantidadeContas();

        return media;
    }

    public excluir(numero: string): void {
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                this._contas.splice(i, 1)
                break
            }
        }
    }

    public renderJuros(numero: string): void{
        try{
            let conta = this.consultar_conta(numero)
            if(conta instanceof Poupanca){
                (<Poupanca> conta).render_juros();
            }
        }catch(e){
            console.log((<PoupancaInvalidaError>e).message);
        }
    }
}