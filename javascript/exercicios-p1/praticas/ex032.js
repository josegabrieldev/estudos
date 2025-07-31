function fatorial(n) {
    let fat = 1
    for (let f = n; f > 1; f--) {
       fat *= f
    }
     console.log(`O fatorial do número ${n} é ${fat}.`)
}
fatorial(7)