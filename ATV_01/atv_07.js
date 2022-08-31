import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const vetor = input("Digite 5 números: ").split(" ").map(Number)

    console.log(vetor)

    const crescente = vetor.sort((a, b) => a - b)
    console.log(`Crescente: ${crescente}`)

    const decrescente = vetor.sort((a, b) => b - a)
    console.log(`Decrescente ${decrescente}`)
}
main()