var closeTarefa = document.getElementById("closeTarefa")
var fundoTarefa = document.getElementById("fundoTarefa")
var finalizado = document.getElementById("finalizado")
var botaoAdicionar = document.getElementById("botaoAdicionar")




botaoAdicionar.onclick = function (){
    fundoTarefa.classList.add("visivel");
}

finalizado.onchange = function(){
        alert ("Tarefa Adicionada");
    }
       
   