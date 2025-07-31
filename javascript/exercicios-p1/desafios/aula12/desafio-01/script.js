function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas`
    if (hora >= 0 && hora < 6) {

        //BOA MADRUGADA!
        img.src = 'imagens/fotomadrugada.png'
        msg.innerHTML += ' da madrugada <br> <strong>Boa Madrugada!</strong>'
        document.body.style.background = '#314e70'

    } else if (hora < 12) {

        //BOM DIA!
        img.src = 'imagens/fotomanha.png'
        msg.innerHTML += ' da manhã <br> <strong>Bom Dia!</strong>'
        document.body.style.background = '#c2992b'

    } else if (hora <= 17) {

        //BOA TARDE!
        img.src = 'imagens/fototarde.png'
        msg.innerHTML += ' da tarde <br> <strong>Boa Tarde!</strong>'
        document.body.style.background = '#1e2e13'

    } else if (hora <=24) {

        //BOA NOITE!
        img.src = 'imagens/fotonoite.png'
        msg.innerHTML += ' da noite <br> <strong>Boa Noite!</strong>'
        document.body.style.background = '#091919'

    } else {
        msg.innerHTML = `O hórario ${hora} horas não está disponivel no formato 24horas.`
    }
}