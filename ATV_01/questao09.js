"use strict";
class SituacaoFinanceira {
    constructor(vc, vd) {
        this.valorCreditos = vc;
        this.valorDebitos = vd;
    }
    saldo() {
        return this.valorCreditos - this.valorDebitos;
    }
}
let situacaoPessoa = new SituacaoFinanceira(190, 150);
console.log(situacaoPessoa.saldo());
