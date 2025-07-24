function parimp(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}
let res = parimp(10101010112)
console.log(`O número digitado é ${res}`)