class Teste_ { 
    quadrado:Quadrado_ = new Quadrado_(5, 5);
    triangulo:TrianguloEquilatero_ = new Quadrado_(14, 30);
}

let test = new Teste();

test.triangulo.comparar(test.quadrado);
test.quadrado.comparar(test.triangulo);