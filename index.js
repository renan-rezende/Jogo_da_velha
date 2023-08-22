// Elementos e variáveis
const addPlayers = document.getElementById("addPlayers");
let player1 = "";
let player2 = "";
const currentPlayer = document.getElementById("player");

// Evento para adicionar jogadores
addPlayers.addEventListener("click", function () {
  player1 = document.getElementById("nome1").value;
  player2 = document.getElementById("nome2").value;

  // Define o jogador da vez e seu valor de dataset
  currentPlayer.innerHTML = "Jogador da vez: " + player1;
  currentPlayer.dataset.value = player1;
});

// Variável para alternar entre "X" e "O"
var marcaçãoAtual = "X";

// Função para lidar com o clique em um quadrado
function quadradoClick(event) {
  const quadrado = event.target;
  if (!quadrado.dataset.value) {
    // Marca o quadrado com a marcação atual
    quadrado.dataset.value = marcaçãoAtual;
    quadrado.textContent = marcaçãoAtual;
    marcaçãoAtual = marcaçãoAtual === "X" ? "O" : "X";

    // Verifica se há um vencedor
    verificationWinner();

    // Alterna o jogador da vez
    if (currentPlayer.dataset.value === player1) {
      currentPlayer.innerHTML = "Jogador da vez: " + player2;
      currentPlayer.dataset.value = player2;
    } else {
      currentPlayer.innerHTML = "Jogador da vez: " + player1;
      currentPlayer.dataset.value = player1;
    }
  }
}

// Adiciona o evento de clique a todos os quadrados
document.querySelectorAll(".charKey").forEach(function (quadrado) {
  quadrado.addEventListener("click", quadradoClick);
});

// Função para verificar se há um vencedor e exibi-lo
function verificationWinner() {
  var id_11 = document.getElementById("11").dataset.value;
  // ... (mesmo para os outros quadrados)

  if (
    // Condições para verificar o vencedor
  ) {
    // Exibe o vencedor no elemento com id "winner"
    document.getElementById("winner").innerHTML =
      "O vencedor é: " + currentPlayer.dataset.value;

    // Remove o evento de clique de todos os quadrados
    document.querySelectorAll(".charKey").forEach(function (quadrado) {
      quadrado.removeEventListener("click", quadradoClick);
    });
  }
}

// Botão para reiniciar o jogo
const restartButton = document.getElementById("restart");

// Função para reiniciar os quadrados e o jogo
function reiniciarQuadrados() {
  // Limpa os valores dos quadrados
  document.querySelectorAll(".charKey").forEach(function (quadrado) {
    quadrado.dataset.value = "";
    quadrado.textContent = "";
  });

  // Reinicia a marcação atual para "X"
  marcaçãoAtual = "X";

  // Atualiza o jogador da vez para o player1
  currentPlayer.innerHTML = "Jogador da vez: " + player1;
  currentPlayer.dataset.value = player1;

  // Adiciona novamente o evento de clique aos quadrados
  document.querySelectorAll(".charKey").forEach(function (quadrado) {
    quadrado.addEventListener("click", quadradoClick);
  });

  // Remove a mensagem de vencedor
  document.getElementById("winner").innerHTML = "";
}

// Adiciona o evento de clique ao botão de reiniciar
restartButton.addEventListener("click", function () {
  reiniciarQuadrados();
});


