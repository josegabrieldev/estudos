function contar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam Dados! Verifique e TENTE NOVAMENTE!')
        res.innerHTML = 'Impossivel Contar!'
    } else {
       res.innerHTML = 'Contando... <br>'
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)

       if (p <= 0) {
            window.alert('Passo Inválido! Considerando passo 1')
            p = 1
       }
       if (i < f) {
        // Contagem Crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
       } else {
        // Contagem Regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
       }
       res.innerHTML += `\u{1F3F4}`
    }
}