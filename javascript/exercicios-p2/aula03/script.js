let tarefas = []
function adicionarTarefas() {
    let inputTarefa = window.document.getElementById('inputTarefa')
    let tarefa = inputTarefa.value.trim() 
    let mensagem = window.document.getElementById('mensagem')

    if (tarefa == "" ) {
        mensagem.innerHTML = 'Digite uma tarefa valida para adicicionar!'
        mensagem.style.color = '#7f1212'
    } else {
        mensagem.innerHTML = 'Tarefa adicionada com sucesso!'
        mensagem.style.color = '#28A745'
        tarefas.push(tarefa)
        renderizarTarefas()
    }

    inputTarefa.value = ''
    inputTarefa.focus()
}

function renderizarTarefas() {  
    const listaTarefas = window.document.getElementById('listaTarefas')
    listaTarefas.innerText = ''

    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = window.document.createElement('li')
        novaTarefa.textContent = tarefas[i]
        listaTarefas.appendChild(novaTarefa)
    }
}