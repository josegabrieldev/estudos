let num = window.document.getElementById('num')
let lista = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let valores = []

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert(`Valor inválido ou já encontrado na lista.
            POR FAVOR, Tente outro Número!`)
    }
    num.value = '' // terminando a função ele apaga o campo do "num"
    num.focus() // aqui da foco ao campo "num"
}

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 2003) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
            media = soma / total
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo foram cadastrados ${total} números.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é de ${media}</p>`
    }
}