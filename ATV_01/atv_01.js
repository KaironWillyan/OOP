import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const float_number = Number(input("Digite um número decimal: "))
    const sucessor = Math.trunc(float_number + 1)
    const antecessor = Math.trunc(float_number - 1)

    console.log(`Antecessor de ${float_number} é ${antecessor}`)
    console.log(`Sucessor de ${float_number} é ${sucessor}`)
}
main()