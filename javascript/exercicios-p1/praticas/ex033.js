function tabuada(n) {
    console.log(`A tabuada do Número ${n} é...`)
    for (let m = 1; m <= 10; m++) {
        let tab = n * m
        console.log(`${n} x ${m} = ${tab}`)
    }
}
tabuada(21)