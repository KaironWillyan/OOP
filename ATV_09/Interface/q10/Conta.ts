class Conta_ {
    constructor(private _nome: string, private _saldo: number) {}

    get nome() {
        return this._nome;
    }

    set nome(nome: string) {
        this.nome = nome;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(saldo: number) {
        this.saldo = saldo;
    }
}