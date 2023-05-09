let tar = document.getElementById('tar')
let resultado = document.querySelector('ul')
let listaTarefas = []

function adicionar() {
    listaTarefas.push(tar)
    let tarefa = document.createElement('li')
    tarefa.innerHTML = tar.value
    resultado.appendChild(tarefa)
    tar.value = ''
    tar.focus()
}