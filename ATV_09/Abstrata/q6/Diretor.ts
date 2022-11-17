class Diretor extends Funcionario{
    constructor(salario: number){
        super(salario)
    }

    getBonificacao(): number {
        return this.salario * 1.6
    }
}