export class Calculadora{
    private _operando1: number;
    private _operando2: number;

    constructor(op1:number, op2:number){
        this.operando1 = op1;
        this.operando2 = op2;
    }

    get operando1() : number {
        return this._operando1;
    }
    
    set operando1(num: number){
        this._operando1 = num;
    }

    get operando2() : number {
        return this._operando2;
    }
    
    set operando2(num: number) {
        this._operando2 = num;
    }
    
    soma(): number{
        return this._operando1 + this._operando2;
    }
}

// const num = new Calculadora(2, 5);
// console.log(num.soma())