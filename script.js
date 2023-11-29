let pendentes = document.getElementById("tarefasPendentes");
let finalizadas = document.getElementById("tarefasFinalizadas");
let descricao = document.getElementById("oqueInserir");

descricao.addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        adicionarTarefa();
    }
})

function adicionarTarefa() {
    
}