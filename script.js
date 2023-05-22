
const form = document.getElementById('cadastroForm');
const table = document.getElementById('tarefasTable');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const cargaHoraria = parseInt(document.getElementById('cargaHoraria').value);
  const atividade = document.getElementById('atividade').value;
  const diaSemana = document.getElementById('diaSemana').value;
  const horario = document.getElementById('horario').value;

  if (verificarLimiteCargaHoraria(cargaHoraria)) {
    if (verificarConflitoHorario(horario)) {
      adicionarTarefa(nome, cargaHoraria, atividade, diaSemana, horario);
      limparFormulario();
    } else {
      alert('Já existe uma atividade cadastrada no mesmo horário.');
    }
  } else {
    alert('A carga horária máxima foi atingida.');
  }
});

function verificarLimiteCargaHoraria(cargaHoraria) {
  let totalCargaHoraria = 0;
  const tarefas = table.getElementsByTagName('tr');
  for (let i = 1; i < tarefas.length; i++) {
    const cargaHorariaTarefa = parseInt(tarefas[i].cells[1].innerText);
    totalCargaHoraria += cargaHorariaTarefa;
  }
  return totalCargaHoraria + cargaHoraria <= 40; // Limite de carga horária é 40 horas
}

function verificarConflitoHorario(horario) {
  const tarefas = table.getElementsByTagName('tr');
  for (let i = 1; i < tarefas.length; i++) {
    const horarioTarefa = tarefas[i].cells[4].innerText;
    if (horarioTarefa === horario) {
      return false;
    }
  }
  return true;
}

function adicionarTarefa(nome, cargaHoraria, atividade, diaSemana, horario) {
  const row = table.insertRow(-1);
  row.insertCell(0).innerText = nome;
  row.insertCell(1).innerText = cargaHoraria;
  row.insertCell(2).innerText = atividade;
  row.insertCell(3).innerText = diaSemana;
  row.insertCell(4).innerText = horario;
}

function limparFormulario() {
  document.getElementById('nome').value = '';
  document.getElementById('cargaHoraria').value = '';
  document.getElementById('atividade').value = '';
  document.getElementById('horario').value = '';
}
