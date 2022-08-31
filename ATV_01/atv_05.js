import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const [num1, num2] = input("Infomre o primeiro e o último número: ").split(" ").map(Number)

    for (let i = num1 + 1; i < num2; i++) {
        console.log(i)
    }
}
main()