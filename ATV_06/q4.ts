export class Conta {
    private _numero: String;
    private _saldo: number;
    
    get numero(){
        return this._numero;
    }
    get saldo(){
        return this._saldo;
    }
    
    constructor(numero: String, saldo: number) {
        this._numero = numero;
        this._saldo = saldo;
    }
    sacar(valor: number): void {
        this._saldo = this._saldo - valor;
    }

    depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    consultarSaldo(): number {
        return this._saldo;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
//////////////////////////////////
export class Banco {
    private contas : Conta[] = [];
        
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

    private consultarIndice(numero: String): number {
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