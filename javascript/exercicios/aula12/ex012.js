var idade = 19
console.log(`Você tem ${idade} anos por isso`)
if (idade < 16) {
    console.log('Você ainda não pode realizar seu voto')
} else if (idade < 18 || idade > 65) {
        console.log('Seu voto é opcional')
    } else {
        console.log('Seu voto é obrigatorio!')
    }