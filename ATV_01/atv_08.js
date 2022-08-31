import prompt from 'prompt-sync'
import fs from 'fs'
const input = fs.readFileSync('atv_08_input.txt', 'ut')
    //como o terminal não aceita palavaras com acento, irei puxar de um arquivo externo
function main() {
    const texto = input.split("")
    const novoTexto = vogais_sem_acento(texto)

    console.log(novoTexto.join(""))
}

function vogais_sem_acento(texto) {
    for (let i = 0; i < texto.length; i++) {
        if (vogal_tem_acento(texto[i].charCodeAt())) {
            texto[i] = alterarVogal(texto[i].charCodeAt())
        }
    }
    return texto
}

const vogal_tem_acento = code => code >= 192 && code <= 252

function alterarVogal(code) {
    if (code >= 192 && code <= 197) return "A"
    else if (code >= 200 && code <= 203) return "E"
    else if (code >= 204 && code <= 207) return "I"
    else if (code >= 210 && code <= 214) return "O"
    else if (code >= 217 && code <= 220) return "U"
    else if (code >= 224 && code <= 229) return "a"
    else if (code >= 232 && code <= 235) return "e"
    else if (code >= 236 && code <= 239) return "i"
    else if (code >= 242 && code <= 246) return "o"
    else if (code >= 249 && code <= 252) return "u"
    else return String.fromCharCode(code)
}
main()