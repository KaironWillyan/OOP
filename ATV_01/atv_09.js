import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const v = Number(input('Valor em R$: '))
    const t = Number(input('Taxa do juros: '))

    const vetor = receber_valor_final_de_juros(v, t)

    console.log(vetor)
}

function receber_valor_final_de_juros(v, t) {
    const vetor_juros = new Array(12)
    let valor_taxa = v + v * (t / 100)

    for (let i = 0; i < 12; i++) {
        vetor_juros[i] = valor_taxa
        valor_taxa = valor_taxa + (valor_taxa * (t / 100))
    }

    return vetor_juros
}

main()