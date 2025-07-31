function ehPrimo(n) {
    if (n <= 1) {
        console.log('Números como "0" e "1" ou números negativos não são primos') // 0, 1 e negativos não são primos
        console.log('Tente outro número por gentileza.')
        return
    }

    for (let p = 2; p < n; p++) {
        if (n % p === 0) {
            console.log(`O número ${n} não é Primo! Pois é divisivel por ${p}.`) // Encontrou divisor, não é primo
            return
        }
    }

    console.log(`O número ${n} é Primo!`) // Nenhum divisor encontrado, é primo!
}

ehPrimo(8)