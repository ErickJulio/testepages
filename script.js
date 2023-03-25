// Pega o botão de calcular pontuação
const calcularBtn = document.getElementById('calcular-btn');

// Pega o botão de resetar pontuação
const resetBtn = document.getElementById('reset-btn');

// Define os pesos de cada tipo de projeto
const pesosProjetos = {
  projeto1: 1,
  projeto2: 2,
  projeto3: 3
};

// Pega a pontuação atual do QA
let pontuacao = 0;

// Adiciona um ouvinte de evento para o botão de calcular pontuação
calcularBtn.addEventListener('click', function() {
  // Pega os valores dos projetos e adiciona à pontuação, multiplicando pelo peso correspondente
  for (let tipo in pesosProjetos) {
    const projetos = document.querySelectorAll(`input[name="${tipo}"]`);
    projetos.forEach(function(projeto) {
      pontuacao += Number(projeto.value) * pesosProjetos[tipo];
    });
  }

  // Limpa o campo da pontuação antes de atualizá-lo
  const pontuacaoElemento = document.getElementById('pontuacao');
  pontuacaoElemento.innerText = '';

  // Atualiza o campo da pontuação
  pontuacaoElemento.innerText = `Sua pontuação é: ${pontuacao}`;

  // Verifica se a pontuação é maior do que o máximo permitido (8) e exibe a mensagem adequada
  if (pontuacao > 8) {
    pontuacaoElemento.innerText += ' - Favor, realocar projetos do QA';
  } else if (pontuacao === 8) {
    pontuacaoElemento.innerText += ' - Quantia ideal para o QA';
  }

  // Limpa a pontuação
  pontuacao = 0;

  // Limpa os valores dos projetos e os nomes dos projetos
  for (let tipo in pesosProjetos) {
    const projetos = document.querySelectorAll(`input[name="${tipo}"]`);
    projetos.forEach(function(projeto) {
      projeto.value = '0';
      document.getElementById(`nome-${projeto.name}`).value = '';
    });
    document.getElementById(`${tipo}-nome`).innerText = '';
  }
});

// Adiciona um ouvinte de evento para o botão de resetar pontuação
resetBtn.addEventListener('click', function() {
  // Limpa a pontuação
  pontuacao = 0;

  // Limpa os valores dos projetos e os nomes dos projetos
  for (let tipo in pesosProjetos) {
    const projetos = document.querySelectorAll(`input[name="${tipo}"]`);
    projetos.forEach(function(projeto) {
      projeto.value = '0';
      document.getElementById(`nome-${projeto.name}`).value = '';
    });
    document.getElementById(`${tipo}-nome`).innerText = '';
  }
});
