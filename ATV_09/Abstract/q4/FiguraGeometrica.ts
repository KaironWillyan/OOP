abstract class FiguraGeometrica {
    constructor(protected base: number, protected altura: number,  raio?: number) {}

    abstract calcularArea(): number
    abstract calcularPerimetro(): number
}