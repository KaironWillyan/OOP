// 7. Uma classe Equipamento com:
// a. um atributo ligado (tipo boolean)
// b. dois métodos liga() e desliga(). O método liga torna o atributo ligado true e
// o método desliga torna o atributo ligado false.
// c. Crie um método chamado inverte(), que muda o status atual (se ligado,
// desliga...se desligado, liga)
// d. Crie um método que estaLigado() que retorna o valor do atributo ligado
// e. Altere o comportamento dos métodos liga para caso o equipamento já
// esteja ligado, não ligue novamente. Faça o mesmo com o método desligar.
// f. Instancie uma classe Equipamento e teste todos os seus métodos.

class Equipamento{
    ligado : boolean;

    liga(){
        return this.ligado = true;
    }

    desliga(){
        return this.ligado = false;
    }

    inverte(){
        return this.ligado = !this.ligado;
    }

    estaLigado(){
        return this.ligado;
    }

}

let ld = new  Equipamento();
console.log(ld.liga());
console.log(ld.desliga());
console.log(ld.inverte());
console.log(ld.estaLigado());