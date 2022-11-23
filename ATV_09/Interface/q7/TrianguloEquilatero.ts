class TrianguloEquilatero_ implements FiguraGeometrica_, Comparavel{
    constructor(public base: number,public altura: number){}

    calcularArea(): number {
        return this.base * this.altura / 2;
    }

    calcularPerimetro(): number {
        return this.base * 3
    }

    comparar(obj: FiguraGeometrica_): number {
        if(obj.calcularArea() > this.calcularArea()){
            return -1
        }else if(obj.calcularArea() < this.calcularArea()){
            return 1
        }else{
            return 0
        }
    }
}