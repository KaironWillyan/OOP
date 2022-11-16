import { SaldoInsuficienteError } from "../Error Handling/SaldoInsuficienteError";
import { ValorInvalidoError } from "../Error Handling/ValorInvalidoError";

export class Conta {

    constructor(private _numero: string, private _saldo: number) {
        try{
            this.depositar(_saldo)
            this._numero = this._validarNumero(_numero) ? _numero: '00000-0'
        }catch(e){
            this._saldo = 0;
        }
    }

    public get numero(): string {
        return this._numero;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public sacar(valor: number) {
        this._validarValor(valor);
        try {
            this._saldo = this._saldo - valor;
        } catch (e) {
           console.log((<SaldoInsuficienteError>e).message);
        }
    }

    public depositar(valor: number): void {
        this._validarValor(valor)
        this._saldo = this._saldo + valor;
    }

    public consultarSaldo() {
        return this._saldo;
    }

    public transferir(conta_destino: Conta, valor: number) {
        this._validarValor(valor)
        this._saldoRestNeg(valor)
        this.sacar(valor)
        conta_destino.depositar(valor)
    }

    private _validarValor(valor: number){
        if(valor <= 0){
            throw new ValorInvalidoError('Valor inválido')
        }
    }

    private _saldoRestNeg(valor: number){
        if(valor > this._saldo){
            throw new ValorInvalidoError('Valor inválido')
        }
    }

    private _validarNumero(numero: string){
        if(numero == undefined) return false
        else{
            const regex = /^\d{5}-\d{1}$/
            if(regex.test(numero)){
                this._numero = numero;
                return true;
            }
        }
        return false
    }
}