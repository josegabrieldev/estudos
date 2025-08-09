function adicionarTarefas() {
    let inputTarefa = window.document.getElementById('inputTarefa') // recebendo valor do input
    let tarefa = inputTarefa.value.trim() // guardando o valor de input // .trim retira espaços no inicio e final do valor digitado
    let mensagem = window.document.getElementById('mensagem') // cria uma variavel para mensagem

    // se o valor de input for vazio exiba essa mensagem
    if (tarefa == "" ) {
        mensagem.innerHTML = 'Digite uma tarefa valida para adicicionar!'
        mensagem.style.color = '#7f1212'
    } else {
        // ao adicionar tarefa exibe essa mensagem
        mensagem.innerHTML = 'Tarefa adicionada com sucesso!'
        mensagem.style.color = '#186129ff'

        // Criando um item (li) e inseri na lista (ul)
        let listaTarefas = window.document.getElementById('listaTarefas')
        let novaTarefa = window.document.createElement('li')
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)
    }

    inputTarefa.value = '' // apos adicionar a tarefa, limpa o campo input
    inputTarefa.focus() // apos adicionar terefa da foco ao campo input
}