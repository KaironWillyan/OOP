import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const [num1, num2, num3] = input("Digite 3 números: ").split(" ").map(Number).sort((a, b) => a - b)
    const maior = num1
    const menor = num3
    console.log(`maior: ${maior}`)
    console.log(`menor: ${menor}`)
}


main()