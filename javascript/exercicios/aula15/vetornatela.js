let num = [9, 1, 2, 7, 4, 6, 8, 3]

// MANNEIRA PADRÃO
//console.log(num)

/*
MANEIRA ERRADA
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])

    MANEIRA MAIS SIMPLES COM MENOS CÓDIGO(MANEIRA CORRETA)
for (let pos = 0; pos < num.length; pos++) {
    console.log(`O elemento ${pos} tem o valor ${num[pos]}`)
}
*/
    // MANEIRA MAIS SIMPLICADA
for (let pos in num) {
    console.log(num[pos])
}