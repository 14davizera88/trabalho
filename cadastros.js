document.getElementById("cadastro-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var nomeDocente = document.getElementById("nome-docente").value;
    var cargaHoraria = parseInt(document.getElementById("carga-horaria").value);
    var atividade = document.getElementById("atividade").value;
    var diaSemana = document.getElementById("dia-semana").value;
    var horario = document.getElementById("horario").value;

    var tarefasUl = document.getElementById("tarefas-ul");
    var tarefas = tarefasUl.getElementsByTagName("li");
    var totalCargaHoraria = cargaHoraria;
    for (var i = 0; i < tarefas.length; i++) {
        totalCargaHoraria += parseInt(tarefas[i].dataset.cargaHoraria);
    }
    if (totalCargaHoraria > 40) {
        alert("A carga horária excede o limite de 40 horas.");
        return;
    }

    for (var i = 0; i < tarefas.length; i++) {
        if (tarefas[i].dataset.diaSemana === diaSemana && tarefas[i].dataset.horario === horario) {
            alert("Já existe uma atividade cadastrada no mesmo horário.");
            return;
        }
    }

    var newTarefa = document.createElement("li");
    newTarefa.textContent = nomeDocente + " - " + atividade;
    newTarefa.setAttribute("data-carga-horaria", cargaHoraria);
    newTarefa.setAttribute("data-dia-semana", diaSemana);
    newTarefa.setAttribute("data-horario", horario);
    tarefasUl.appendChild(newTarefa);

    document.getElementById("nome-docente").value = "";
    document.getElementById("carga-horaria").value = "";
    document.getElementById("atividade").value = "";
    document.getElementById("dia-semana").value = "";
    document.getElementById("horario").value = "";
});