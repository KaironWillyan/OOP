import prompt from 'prompt-sync'
const input = prompt()

function main() {
    let num = Number(input("Informe um número: "))
    const sequencia = []

    let soma = 0,
        cont = 0
    while (num != -1) {
        sequencia[cont] = num
        soma += num
        cont++

        num = Number(input("Informe um número: "))
    }

    const media = soma / cont
    const desvio_padrao = calcular_desvio_padrao(sequencia, media)

    console.log(` soma: ${soma}\n media: ${media.toFixed(2)}\n desvio padrão: ${desvio_padrao.toFixed(2)}`)
}

function calcular_desvio_padrao(sequencia, media) {
    let variancia = 0
    for (let i = 0; i < sequencia.length; i++) {
        variancia += ((media - sequencia[i]) ** 2)
    }
    const desvio_padrao = Math.sqrt(variancia / sequencia.length)
    return desvio_padrao
}
main()