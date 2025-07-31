function mediaAritmetica(n1, n2, n3, n4) {
    let media = (n1 + n2 + n3 + n4) / 4
    if (media < 7) {
        console.log(`A sua Média Aritmética foi ${media}, e ela ta abaixo do que é preciso. Aluno REPROVADO!`)
        console.log('Não desanime, Continue se esforçando.')
    } else {
        console.log(`A sua Média Aritmética foi ${media}, e ela ta acima do que é preciso. Aluno APROVADO!`)
        console.log('Meus Parabéns continue assim.')
    }
    console.log('A média necessaria é 7.')
} 
mediaAritmetica(6, 9, 9, 7)