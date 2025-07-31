// Verificação de pares com do..while

console.log('Vai mostra números pares entre 1 e 20')
var n = 1
do {
    if (n % 2 === 0) {
        console.log(`${n}`)
    }
    n++
} while (n <= 20)
console.log('FIM!')

console.log('Vai mostra números ímpares entre 1 e 30')
var num = 1
do {
    if (num % 2 != 0) {
        console.log(`${num}`)
    }
    num++
} while (num <= 30)
console.log('FIM!')