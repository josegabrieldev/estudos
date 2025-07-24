let num = [44, 9, 57, 4, 5, 7, 1, 92, 11]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`${num}`)
let pos = num.indexOf(51)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}