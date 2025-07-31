function tabuada() {
    var num = window.document.getElementById('num')
    var tab = window.document.getElementById('tabuada')
    tab.innerHTML = ''

    if (num.value.length == 0) {
        window.alert('POR FAVOR! Digite um Número!')
    } else {
        var n = Number(num.value)
        for (var m = 1; m <= 10; m++) {
            var item = document.createElement('option')
            item.text = `${n} x ${m} = ${n * m}`
            item.value = `tab${m}` // uso para outras linguagens de programação
            tab.appendChild(item)
        }
    }
}
