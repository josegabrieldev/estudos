function diaSemana(n) {
    switch(n) {
        case 1:
            console.log(`O número ${n} corresponde ao dia de segunda-feira.`)
            console.log('Hoje é Segunda Feira!')
            break
        case 2:
            console.log(`O número ${n} corresponde ao dia de terça-feira.`)
            console.log('Hoje é Terça Feira!')
            break
        case 3 :
            console.log(`O número ${n} corresponde ao dia de quarta-feira.`)
            console.log('Hoje é Quarta Feira!')
            break
        case 4:
            console.log(`O número ${n} corresponde ao dia de quinta-feira`)
            console.log('Hoje é Quinta Feira!')
            break
        case 5: 
            console.log(`O número ${n} corresponde ao dia de sexta-feira.`)
            console.log(`Hoje é Sexta Feira!`)
            break
        case 6: 
            console.log(`O número ${n} corresponde ao dia de sábado.`)
            console.log('Hoje é Sábado!')
            break
        case 7: 
            console.log(`O número ${n} corresponde ao dia de domingo.`)
            console.log('Hoje é Domingo!')
            break
        default:
            console.log(`O número ${n} não corresponde a nenhum dia da semana.`)
            console.log('Por Favor! Tente um número de 1 a 7')
            break
    }
}
diaSemana(2)