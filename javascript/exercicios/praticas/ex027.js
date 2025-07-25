function saudacao(nome) {
    if (!nome) {
        console.log('Digite seu nome POR FAVOR!')
    } else {
        console.log(`Olá ${nome}, muito prazer em te conhecer.`)
    }
}
saudacao('Gabriel')