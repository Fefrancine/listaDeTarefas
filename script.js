let listaPendentes = document.getElementById("tarefasPendentes");
let listaFinalizadas = document.getElementById("tarefasFinalizadas");
let buttonAdicionar = document.getElementById("buttonAdicionar");
let input = document.getElementById("inputAdicionar");


// 
function adicionarTarefa() {
    let li = document.createElement("li");
    li.innerHTML = input.value; // o que o usuario colocou no input, virou li

    let button = document.createElement("button");
    button.innerHTML = 'Finalizar';

    button.addEventListener("click", () => {
        finalizarTarefa(li, button);
    })

    li.appendChild(button);
    listaPendentes.appendChild(li); // bt como filho da li
}

// limpa o input para add outras tarefas
function limparInput() {
    input.value = '';
}

//
function finalizarTarefa(tarefa, botao) {
    let removerBotao = tarefa.removeChild(botao); // remove o botão
    let cloneTarefa = tarefa.cloneNode(true); // clone para colocar na lista de baixo
    listaFinalizadas.appendChild(cloneTarefa); // clone na lista de finalizadas
    tarefa.remove();
}

input.addEventListener("keydown", function(e) { 
    if (e.key == "Enter") {
        adicionarTarefa();
        limparInput()
    }
})

buttonAdicionar.addEventListener("click", () => {
    adicionarTarefa();
    limparInput();
});