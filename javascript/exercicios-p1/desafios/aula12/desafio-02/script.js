function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('resultado')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

            if (fsex[0].checked) {
                genero = 'Mulher'
                if (idade >= 0 && idade < 12) {
                    //criança
                    res.innerHTML = `Detectamos uma menina com ${idade} anos`
                    img.setAttribute('src', 'imagens/mulher-menina.png')
                } else if (idade <= 25) {
                    //jovem
                    res.innerHTML = `Detectamos uma jovem de ${idade} anos`
                    img.setAttribute('src', 'imagens/mulher-jovem.png')
                } else if (idade < 60) {
                    //adulto
                    res.innerHTML = `Detectamos uma mulher adulta de ${idade} anos`
                    img.setAttribute('src', 'imagens/mulher-adulta.png')
                } else {
                    //idosa
                    res.innerHTML = `Detectamos uma mulher idosa com ${idade} anos`
                    img.setAttribute('src', 'imagens/mulher-adulta.png')
                }
            } else if (fsex[1].checked) {
                genero = 'Homem'
                if (idade >= 0 && idade < 12) {
                    //criança
                    res.innerHTML = `Detectamos um menino de ${idade} anos`
                    img.setAttribute('src', 'imagens/homem-menino.png')
                } else if (idade <= 25) {
                    //jovem
                    res.innerHTML = `Detectamos um jovem de ${idade} anos`
                    img.setAttribute('src', 'imagens/homem-jovem.png')
                } else if (idade < 60) {
                    //adulto
                    res.innerHTML = `Detectamos um homem adulto de ${idade} anos`
                    img.setAttribute('src', 'imagens/homem-adulto.png')
                } else {
                    //idoso
                    res.innerHTML = `Detectamos um homem idoso de ${idade} anos`
                    img.setAttribute('src', 'imagens/homem-adulto.png')
                }
            }

        res.appendChild(img)
    }
}