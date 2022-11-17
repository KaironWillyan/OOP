class TrianguloEquilatero extends FiguraGeometrica{
    constructor(base: number, altura: number){
        super(base, altura)
    }

    calcularArea(): number {
        return this.base * this.altura / 2;
    }

    calcularPerimetro(): number {
        return this.base * 3
    }
}