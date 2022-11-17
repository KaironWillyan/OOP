class Presidente extends Funcionario{
    constructor(salario: number){
        super(salario)
    }

    getBonificacao(): number {
        return this.salario + 1000
    }
}