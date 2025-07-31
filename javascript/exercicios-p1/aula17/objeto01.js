let amigo = {
    nome: 'José',
    sexo: 'Masculino',
    peso: 75.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
}
}

console.log(`O ${amigo.nome} tem ${amigo.peso}kg`)
amigo.engordar(4.5) // vai fazer o amigo ganha mais peso
console.log(`Agora o ${amigo.nome} tem ${amigo.peso}kg`)