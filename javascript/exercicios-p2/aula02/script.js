function adicionarTarefas() {
    let mensagem = 'Tarefa adicionada com sucesso!'
    let inputTarefa = window.document.getElementById('inputTarefa')
    let tarefa = inputTarefa.value
    window.document.getElementById('mensagem').textContent = mensagem
    let listaTarefas = window.document.getElementById('listaTarefas')
    let novaTarefa = window.document.createElement('li')
    novaTarefa.textContent = tarefa
    listaTarefas.appendChild(novaTarefa)

    inputTarefa.value = ''
    inputTarefa.focus()
}