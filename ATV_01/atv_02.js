import prompt from 'prompt-sync'
const input = prompt()
    //1 btc = R$ 121.302
function main() {
    const valor_real = Number(input("Quantos reais você quer converter para BitCoin? R$ "))
    const btc = valor_real / 121302

    console.log(`R$ ${valor_real} equivale a ${btc.toFixed(8)} BitCoin`)
}
main()