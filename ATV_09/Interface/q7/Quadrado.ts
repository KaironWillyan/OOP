class Quadrado_ implements FiguraGeometrica_, Comparavel{
    constructor(public base: number,public altura: number){}

    calcularArea(): number {
        return this.base * this.altura;
    }

    calcularPerimetro(): number {
        return this.base * 4
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

