class Quadrado extends FiguraGeometrica{
    constructor(base: number, altura: number){
        super(base, altura)
    }

    calcularArea(): number {
        return this.base * this.altura;
    }

    calcularPerimetro(): number {
        return this.base * 4
    }
}