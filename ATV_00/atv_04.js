import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const qtd_dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    const mes_escolha = Number(input('Digite o número do mês: ')) - 1

    console.log(`O mês escolhido é ${meses[mes_escolha]}. \nEsse mês possui ${qtd_dias[mes_escolha]} dias.`)

}
main()