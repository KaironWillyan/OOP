export class Conta {

    constructor(private _numero: string, private _saldo: number) {}

    public get numero(): string {
        return this._numero;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public sacar(valor: number): boolean {
        if (this._saldo - valor < 0) {
            return false;
        }
        else {
            this._saldo = this._saldo - valor;
            return true;
        }
    }

    public depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    public consultarSaldo() {
        return this._saldo;
    }

    public transferir(conta_destino: Conta, valor: number) {
        if (this.sacar(valor)) {
            conta_destino.depositar(valor)
            return true;
        }
        else {
            return false;
        }
    }
}

export class Poupanca extends Conta{
    private _taxa_de_juros: number;

    constructor(numero: string, saldo: number, taxa_de_juros: number) {
        super(numero, saldo);
        this._taxa_de_juros = taxa_de_juros;
    }

    taxa_do_juros(): number {
        return this._taxa_de_juros;
    }

    render_juros(): void {
        this.depositar(this.saldo * this._taxa_de_juros/100);
    }
}

export class Conta_Imposto extends Conta {
    private _taxa_de_desconto: number;

    constructor(numero: string, saldo: number, tax_de_desconto: number) {
        super(numero, saldo);
        this._taxa_de_desconto = tax_de_desconto;
    }

    debitar(valor: number): void {
        let total = valor + valor * (this._taxa_de_desconto/100);
        super.sacar(total);
    }
}

export class Banco {

    constructor(private _contas: Conta[] = []) {}

    public inserir(conta: Conta): void {
        if (this.consultarIndice(conta.numero) == -1) {
            this._contas.push(conta);
        }
    }

    public consultar_saldo(numero: string): Conta {
        let conta!: Conta;

        for (let c of this._contas) {
            if (c.numero == numero) {
                conta = c;
                break;
            }
        }

        return conta
    }

    private consultarIndice(numero: string): number {
        let index: number = -1;
        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                index = i;
                break;
            }
        }
        return index;
    }

    public sacar(numero: string, valor: number): void {
        let conta: Conta = this.consultar_saldo(numero);

        if (conta != null) {
            if(conta instanceof Conta_Imposto) {
                conta.debitar(valor);
            }
            else {
                conta.sacar(valor);
            }
        }
    }

    public depositar(numero: string, valor: number): void {
        let conta: Conta = this.consultar_saldo(numero)

        if (conta != null) {
            conta.depositar(valor)
        }
    }

    public transferir(num_credito: string, num_debito: string, valor: number): void {
        let conta1: Conta = this.consultar_saldo(num_credito)
        let conta2: Conta = this.consultar_saldo(num_debito)

        if (conta1 != null && conta2 != null) {
            conta2.transferir(conta1, valor)
        }
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
        for (let i = 0; i < this._contas.length; i++) {
            if(this.consultarIndice(numero)) {
                if(this._contas[i] instanceof Poupanca){
                    (<Poupanca> this._contas[i]).render_juros();
                }
            }
        }
    }
}