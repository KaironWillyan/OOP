class Circulo {
    raio: number;
    
    constructor(r:number){
        this.raio = r;
        
    }

    calcularAreaCirculo(): number {
        return this.raio**2 * 3.14;
    }

    calcularPerimetroCirculo():number{
        return this.raio * 2 * 3.14;
    }
}

let circulo = new Circulo(6)

console.log(circulo.calcularAreaCirculo())
console.log(circulo.calcularPerimetroCirculo())