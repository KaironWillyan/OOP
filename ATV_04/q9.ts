// Crie uma classe chamada Jogador e nela:
// a. Crie 3 atributos inteiros representando força, nível e pontos atuais;
// b. Crie um construtor no qual os 3 parâmetros são passados e inicialize os respectivos atributos;
// c. Crie um método chamado calcularAtaque. Nele, calcule e retorne o valor da multiplicação de força pelo nível. Esse resultado é o dano de ataque do jogador;
// d. Crie um método chamado atacar em que é passado um outro jogador (atacado) como parâmetro. Nele e é feita a subtração do dano (método calcularAtaque) dos pontos do atacado;
// e. Crie um método chamado estaVivo que retorna true caso o atributo pontos do jogador seja maior que zero e falso caso contrário.
// f. Altere o método atacar para usar o método estaVivo e desconsiderar a operação, ou seja, não atacar, caso o jogador passado por parâmetro não esteja vivo.
// g. Crie um método chamado toString() que retorna a representação textual do produto concatenando todos os seus atributos.
// h. Avalie em com testes dois jogadores instanciados e inicializados através do construtor. Utilize o método de ataque de cada jogador e ao final, verifique qual jogador tem mais pontos.
class Jogador{
    forca : number; nivel : number; pontosAtuais : number;
    constructor(forca : number, nivel : number, pontosAtuais : number){
        this.nivel = nivel;
        this.forca = forca;
        this.pontosAtuais = pontosAtuais;
    }
    calcularAtaque(){
        return this.forca * this.nivel;
    }
    atacar(jogadorAtacado : Jogador){
        if(this.estaVivo()){
            return jogadorAtacado.pontosAtuais -= this.calcularAtaque();
        }
    }
    estaVivo(){
        return this.pontosAtuais > 0
    }
    toString(){
        console.log( `
        PLayer
        nivel: ${ this.nivel }
        força: ${ this.forca }
        pontos Atuais: ${ this.pontosAtuais } 
        `);
    }
}


let player1 = new Jogador(1, 50, 100)
let player2 = new Jogador(1, 60, 100)

player1.toString()
player2.toString()

player1.calcularAtaque();
player2.calcularAtaque();

player1.atacar(player2)
player2.atacar(player1)

player1.toString()
player2.toString()