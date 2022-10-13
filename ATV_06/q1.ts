class Calculadora{
    private operando1: number;
    private operando2: number;

    constructor(o1: number, o2: number){
        this.operando1 = o1;
        this.operando2 = o2;
    }

    soma(){
        return this.operando1 + this.operando2;
    }
    multiplicacao(){
        return this.operando1 * this.operando2;
    }
}

let calculadora = new Calculadora(2, 5);
//calculadora.operando1() o atributo é privado, logo não pode ser acessado diretamente.
console.log(calculadora.soma());
console.log(calculadora.multiplicacao());