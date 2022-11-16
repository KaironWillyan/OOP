import { Conta } from "./Conta";
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
