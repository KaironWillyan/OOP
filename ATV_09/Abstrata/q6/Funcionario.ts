abstract class Funcionario{
    constructor(protected salario: number){}
    abstract getBonificacao(): number
}