class SituacaoFinanceira {
    valorCreditos: number;
    valorDebitos: number;

    constructor(vc: number, vd: number){
        this.valorCreditos = vc;
        this.valorDebitos = vd;
    }
    saldo(){
        return this.valorCreditos - this.valorDebitos;
    }
}

let situacaoPessoa = new SituacaoFinanceira(190, 150);
console.log(situacaoPessoa.saldo());

