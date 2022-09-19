import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const milissegundo = Number(input('Valor em milissegundos: ')) / 1000

    const [dias, horas, minutos, segundos] = converter(milissegundo)

    console.log(`${dias} dia(s)\n ${horas}, hora(s)\n ${minutos}, minuto(s)\n ${segundos} segundo(s)`)
}

function converter(milissegundo) {
    const dias = Math.trunc(milissegundo / 86400)
    let resto = milissegundo % 86400
    const horas = Math.trunc(resto / 3600)
    resto = resto % 3600
    const minutos = Math.trunc(resto / 60)
    resto = resto % 60
    const segundos = resto

    return [dias, horas, minutos, segundos]
}

main()