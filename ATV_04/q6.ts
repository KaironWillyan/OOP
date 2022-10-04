// Crie uma classe chamada Triangulo que:
// a. Possua 3 atributos inteiros representando os lados;
// b. Crie um método que retorna true se os lados formarem um triângulo de
// acordo com a regra: |b-c| < a < b+c;
// c. Crie 3 métodos: ehIsoceles(), ehEquilatero() e ehEscaleto() que retorne
// verdadeiro caso o triângulo seja um dos tipos relacionados ao nome do
// método. Eles devem chamar antes de tudo, o método da questão b. e
// retornar false se esse método já retornar false também;
// d. Instancie classes Triangulo de diferentes lados e seus métodos.

class Triangulo{
    a : number;
    b : number;
    c : number;

    constructor(a: number, b : number, c : number){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    ehTriangulo(){
        return (this.a > Math.abs(this.b - this.c) && this.a < this.b + this.c);
    }

    ehIsoceles(){
        return (this.a == this.b && this.a != this.c) || (this.b == this.c && this.b != this.a ) || (this.a == this.c && this.a != this.b);
    }

    ehEquilatero(){
        return this.a == this.b && this.a == this.c;
    }

    ehEscaneno(){
        return this.a != this.b && this.a != this.c;
    }
}

let triangulo = new Triangulo(2,3,4)

// console.log(triangulo.ehTriangulo())
// console.log(triangulo.ehEquilatero())
// console.log(triangulo.ehIsoceles())
// console.log(triangulo.ehEscaneno())

triangulo = new Triangulo(3,3,3)

console.log(triangulo.ehTriangulo())
console.log(triangulo.ehEquilatero())
console.log(triangulo.ehIsoceles())
console.log(triangulo.ehEscaneno())