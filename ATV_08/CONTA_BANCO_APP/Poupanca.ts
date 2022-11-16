import { Conta } from "./Conta";
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