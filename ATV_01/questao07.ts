class Retangulo {
    l1: number;
    l2: number;
    
    constructor(lado1:number, lado2: number){
        this.l1 = lado1;
        this.l2 = lado2;
    }

    calcularArea(): number {
        return this.l1 * this.l2;
    }

    calcularPerimetro():number{
        return this.l1 *2 +  this.l2 * 2;
    }
}

let retangulo = new Retangulo(6, 8);

console.log(retangulo.calcularArea())
console.log(retangulo.calcularPerimetro())